// src/services/donationService.js
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_your_stripe_publishable_key_here"
);

// Create axios instance with better configuration
const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://rockbridge.up.railway.app/api",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(
      `Making ${config.method?.toUpperCase()} request to:`,
      config.url
    );
    console.log("Request data:", config.data);
    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor for better error handling
api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("API Error Details:", {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
      url: error.config?.url,
      method: error.config?.method,
    });

    let errorMessage = "An unexpected error occurred";

    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      if (data?.message) {
        errorMessage = data.message;
      } else if (data?.error) {
        errorMessage = data.error;
      } else {
        switch (status) {
          case 400:
            errorMessage = "Invalid request data";
            break;
          case 401:
            errorMessage = "Authentication required";
            break;
          case 403:
            errorMessage = "Access forbidden";
            break;
          case 404:
            errorMessage = "Service not found";
            break;
          case 429:
            errorMessage = "Too many requests. Please wait and try again";
            break;
          case 500:
            errorMessage = "Server error. Please try again later";
            break;
          case 502:
          case 503:
          case 504:
            errorMessage = "Service temporarily unavailable";
            break;
          default:
            errorMessage = `Server error (${status})`;
        }
      }
    } else if (error.request) {
      // Network error
      if (error.code === "ECONNABORTED") {
        errorMessage =
          "Request timeout. Please check your connection and try again";
      } else {
        errorMessage = "Network error. Please check your connection";
      }
    } else {
      errorMessage = error.message || "An unexpected error occurred";
    }

    const customError = new Error(errorMessage);
    customError.originalError = error;
    throw customError;
  }
);

export const donationService = {
  // Get Stripe instance
  getStripe() {
    return stripePromise;
  },

  // Create payment intent
  async createPaymentIntent(donationData) {
    try {
      // Validate required data
      if (!donationData.amount || donationData.amount <= 0) {
        throw new Error("Valid donation amount is required");
      }

      if (!donationData.ministry) {
        throw new Error("Ministry selection is required");
      }

      if (!donationData.donorInfo?.email) {
        throw new Error("Email address is required");
      }

      // Ensure amount is in cents for Stripe
      const payload = {
        ...donationData,
        amount: Math.round(donationData.amount * 100), // Convert to cents
        currency: donationData.currency?.toLowerCase() || "usd",
      };

      console.log("Creating payment intent with payload:", payload);

      const response = await api.post("/donations/intent", payload);

      if (!response.data) {
        throw new Error("Invalid response from server");
      }

      return response.data;
    } catch (error) {
      console.error("Error creating payment intent:", error);
      // Check if it's a network error
      if (error.code === "ECONNABORTED" || !error.response) {
        throw new Error(
          "Network error. Please check your connection and try again."
        );
      }

      // Check if it's a server error
      if (error.response.status >= 500) {
        throw new Error("Server error. Please try again later.");
      }

      // Use the error message from server if available
      if (error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      }

      throw error;
    }
  },

  // Confirm donation
  async confirmDonation(confirmationData) {
    try {
      if (!confirmationData.paymentIntentId) {
        throw new Error("Payment intent ID is required");
      }

      console.log("Confirming donation with data:", confirmationData);

      const response = await api.post("/donations/confirm", confirmationData);

      if (!response.data) {
        throw new Error("Invalid response from server");
      }

      return response.data;
    } catch (error) {
      console.error("Error confirming donation:", error);
      // Don't re-throw here as this is just for backend confirmation
      // The payment has already been processed by Stripe
      return { success: false, message: error.message };
    }
  },

  // Get recent donations (optional - for admin purposes)
  async getRecentDonations(limit = 10, ministry = null) {
    try {
      const params = { limit };
      if (ministry) params.ministry = ministry;

      const response = await api.get("/donations/recent", { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching recent donations:", error);
      throw error;
    }
  },

  // Health check
  async checkHealth() {
    try {
      const response = await api.get("/health");
      return response.data;
    } catch (error) {
      console.error("Health check failed:", error);
      throw error;
    }
  },

  // Test Stripe connection
  async testStripeConnection() {
    try {
      const stripe = await this.getStripe();
      if (!stripe) {
        throw new Error("Failed to load Stripe");
      }
      return { success: true, message: "Stripe connected successfully" };
    } catch (error) {
      console.error("Stripe connection test failed:", error);
      return { success: false, message: error.message };
    }
  },
};

export default donationService;
