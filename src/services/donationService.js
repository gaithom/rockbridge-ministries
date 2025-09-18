// src/services/donationService.js
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51QFdLKRwgKCnc7KZNRM1uGBb7z6TKjFUzOj2YFAGDbKhx4jm3p7xxQFfg6xw4wV9LJqG0REOQVUE9nGmNfgjqyUm00IlEBJy0F"
);

// Create axios instance with better configuration
const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://rockbridge.up.railway.app/api",
  timeout: 60000, // Increased timeout
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
          case 422:
            errorMessage = "Invalid data provided";
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
      } else if (error.code === "ERR_NETWORK") {
        errorMessage = "Network error. Please check your connection";
      } else {
        errorMessage = "Unable to connect to server. Please try again";
      }
    } else {
      errorMessage = error.message || "An unexpected error occurred";
    }

    const customError = new Error(errorMessage);
    customError.originalError = error;
    customError.status = error.response?.status;
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
      console.log("Creating payment intent...");

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

      if (!donationData.donorInfo?.firstName) {
        throw new Error("First name is required");
      }

      if (!donationData.donorInfo?.lastName) {
        throw new Error("Last name is required");
      }

      if (!donationData.donorInfo?.postalCode) {
        throw new Error("Postal code is required");
      }

      // Ensure amount is in cents for Stripe (should already be converted)
      const payload = {
        ...donationData,
        currency: donationData.currency?.toLowerCase() || "usd",
      };

      console.log("Sending payment intent payload:", payload);

      const response = await api.post("/donations/intent", payload);

      if (!response.data) {
        throw new Error("Invalid response from server");
      }

      if (!response.data.success) {
        throw new Error(
          response.data.message || "Failed to create payment intent"
        );
      }

      if (!response.data.data?.clientSecret) {
        throw new Error("Missing client secret in response");
      }

      console.log("Payment intent created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating payment intent:", error);

      // Re-throw with more specific error messages
      if (error.status === 400) {
        throw new Error("Invalid donation information provided");
      } else if (error.status === 422) {
        throw new Error("Please check your donation details and try again");
      } else if (error.status >= 500) {
        throw new Error("Server error. Please try again in a few moments");
      } else if (!error.response && error.code === "ERR_NETWORK") {
        throw new Error(
          "Unable to connect to payment server. Please check your internet connection"
        );
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

      console.log("Donation confirmed successfully:", response.data);
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

  // Validate card before payment
  async validateCard(elements) {
    try {
      if (!elements) {
        throw new Error("Elements not initialized");
      }

      const { error } = await elements.submit();
      if (error) {
        throw new Error(error.message);
      }

      return { valid: true };
    } catch (error) {
      console.error("Card validation error:", error);
      return { valid: false, error: error.message };
    }
  },
};

export default donationService;
