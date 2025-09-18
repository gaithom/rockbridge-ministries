// src/services/donationService.js
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_your_stripe_publishable_key_here"
);

// Create axios instance
const api = axios.create({
  baseURL: "https://rockbridge.up.railway.app/api",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "An unexpected error occurred";
    console.error("API Error:", error.response?.status, errorMessage);
    throw new Error(errorMessage);
  }
);

export const donationService = {
  // Get Stripe instance
  getStripe() {
    return stripePromise;
  },

  // Create payment intent
  async createPaymentIntent(donationData) {
    const response = await api.post("/donations/intent", donationData);
    return response.data;
  },

  // Confirm donation
  async confirmDonation(confirmationData) {
    const response = await api.post("/donations/confirm", confirmationData);
    return response.data;
  },

  // Get recent donations
  async getRecentDonations(limit = 10, ministry = null) {
    const params = { limit };
    if (ministry) params.ministry = ministry;

    const response = await api.get("/donations/recent", { params });
    return response.data;
  },

  // Health check
  async checkHealth() {
    const response = await api.get("/health");
    return response.data;
  },
};

export default donationService;
