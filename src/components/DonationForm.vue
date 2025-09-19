<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Donation Amount -->
    <div class="space-y-2">
      <label for="amount" class="block text-sm font-medium text-gray-700">
        Donation Amount (USD) *
      </label>
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <span class="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          id="amount"
          type="number"
          v-model.number="localDonation.amount"
          class="block w-full pl-7 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
          placeholder="0.00"
          min="1"
          step="1"
          required
        />
      </div>
    </div>

    <!-- Personal Information Grid -->
    <div class="space-y-4">
      <h4
        class="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-2"
      >
        Personal Information
      </h4>

      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-1">
          <label
            for="firstName"
            class="block text-sm font-medium text-gray-700"
          >
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            v-model="localDonation.firstName"
            required
            class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
          />
        </div>

        <div class="space-y-1">
          <label for="lastName" class="block text-sm font-medium text-gray-700">
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            v-model="localDonation.lastName"
            required
            class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      <div class="space-y-1">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          v-model="localDonation.email"
          required
          class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
        />
      </div>

      <div class="space-y-1">
        <label for="phone" class="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          v-model="localDonation.phone"
          class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
        />
      </div>

      <div class="space-y-1">
        <label for="postalCode" class="block text-sm font-medium text-gray-700">
          ZIP/Postal Code *
        </label>
        <input
          id="postalCode"
          type="text"
          v-model="localDonation.postalCode"
          required
          class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
        />
      </div>

      <div class="space-y-1">
        <label for="message" class="block text-sm font-medium text-gray-700">
          Message (Optional)
        </label>
        <textarea
          id="message"
          v-model="localDonation.message"
          rows="3"
          class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors resize-none"
          placeholder="Share why this cause is important to you..."
        ></textarea>
      </div>
    </div>

    <!-- Payment Information -->
    <div class="space-y-4">
      <h4
        class="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-2"
      >
        Payment Information
      </h4>

      <div class="space-y-3">
        <div class="space-y-1">
          <label class="block text-sm font-medium text-gray-700">
            Card Details *
          </label>
          <div
            class="border-2 border-gray-200 rounded-lg p-1 bg-white transition-colors focus-within:border-amber-400"
          >
            <!-- Vue Stripe Payment Element -->
            <StripeElementPayment
              ref="paymentRef"
              :pk="stripePublishableKey"
              :elements-options="elementsOptions"
              :confirm-params="confirmParams"
              @loading="handleLoading"
              @error="handleError"
              @element-ready="handleElementReady"
              v-if="clientSecret"
            />
            <div
              v-else
              class="flex items-center justify-center p-4 text-gray-500 text-sm"
            >
              {{ loadingMessage }}
            </div>
          </div>
        </div>
        <div v-if="paymentError" class="text-red-600 text-sm">
          {{ paymentError }}
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="pt-6 border-t border-gray-200">
      <button
        type="submit"
        :disabled="!canSubmit || processing"
        class="w-full bg-amber-600 text-white py-3 px-4 rounded-lg font-semibold text-base hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
      >
        <span v-if="processing" class="flex items-center justify-center">
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </span>
        <span v-else-if="localDonation.amount">
          Donate ${{ localDonation.amount }}
        </span>
        <span v-else>Enter Amount to Donate</span>
      </button>

      <!-- Security Notice -->
      <div
        class="mt-3 flex items-center justify-center space-x-2 text-gray-500"
      >
        <svg
          class="w-4 h-4 text-green-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        <span class="text-xs">Secure and encrypted donation via Stripe</span>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, watch, ref, computed, onMounted } from "vue";
import { StripeElementPayment } from "@vue-stripe/vue-stripe";
import donationService from "../services/donationService";

const props = defineProps({
  donation: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["submit", "error"]);

// Local reactive copy to avoid direct prop mutation
const localDonation = reactive({ ...props.donation });

// Stripe configuration
const stripePublishableKey =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
  "pk_test_51QFdLKRwgKCnc7KZNRM1uGBb7z6TKjFUzOj2YFAGDbKhx4jm3p7xxQFfg6xw4wV9LJqG0REOQVUE9nGmNfgjqyUm00IlEBJy0F";

// Component state
const processing = ref(false);
const loadingMessage = ref("Please fill in all required fields...");
const paymentError = ref("");
const clientSecret = ref(null);
const paymentIntentId = ref(null);
const paymentRef = ref(null);
const elementReady = ref(false);
const isLoading = ref(false);

// Stripe elements options
const elementsOptions = ref({
  clientSecret: null,
  appearance: {
    theme: "stripe",
    variables: {
      colorPrimary: "#d97706",
      colorBackground: "#ffffff",
      colorText: "#374151",
      colorDanger: "#dc2626",
      fontFamily: '"Inter", system-ui, sans-serif',
      borderRadius: "8px",
    },
  },
});

// Confirm params for Stripe
const confirmParams = ref({
  return_url: window.location.origin + "/donation-success",
});

// Computed property to check if form can be submitted
const canSubmit = computed(() => {
  return (
    clientSecret.value &&
    elementReady.value &&
    localDonation.amount &&
    localDonation.amount >= 1 &&
    localDonation.firstName &&
    localDonation.lastName &&
    localDonation.email &&
    localDonation.postalCode &&
    !processing.value &&
    !isLoading.value
  );
});

// Initialize payment intent when all required fields are filled
const initializePayment = async () => {
  if (!localDonation.amount || localDonation.amount < 1) {
    return;
  }

  if (
    !localDonation.firstName ||
    !localDonation.lastName ||
    !localDonation.email ||
    !localDonation.postalCode
  ) {
    return;
  }

  try {
    loadingMessage.value = "Creating payment intent...";
    paymentError.value = "";

    // Create payment intent
    const response = await donationService.createPaymentIntent({
      ministry: localDonation.ministry,
      amount: localDonation.amount, // Amount in dollars
      currency: "usd",
      donorInfo: {
        firstName: localDonation.firstName,
        lastName: localDonation.lastName,
        email: localDonation.email,
        phone: localDonation.phone || "",
        postalCode: localDonation.postalCode,
      },
      isRecurring: false,
      message: localDonation.message || "",
    });

    if (!response.success) {
      throw new Error(response.message || "Failed to create payment intent");
    }

    // Set client secret for Stripe Elements
    clientSecret.value = response.data.clientSecret;
    paymentIntentId.value = response.data.paymentIntentId;
    elementsOptions.value.clientSecret = response.data.clientSecret;

    console.log("Payment intent created:", response.data);
  } catch (error) {
    console.error("Error initializing payment:", error);
    paymentError.value =
      error.message || "Failed to initialize payment. Please try again.";
    emit("error", error.message || "Failed to initialize payment");
  }
};

// Watch for required fields and reinitialize payment when they're all filled
watch(
  [
    () => localDonation.amount,
    () => localDonation.firstName,
    () => localDonation.lastName,
    () => localDonation.email,
    () => localDonation.postalCode,
  ],
  ([amount, firstName, lastName, email, postalCode]) => {
    // Reset client secret when key fields change
    if (clientSecret.value) {
      clientSecret.value = null;
      paymentIntentId.value = null;
      elementsOptions.value.clientSecret = null;
      elementReady.value = false;
    }

    // Initialize payment if all required fields are present
    if (amount >= 1 && firstName && lastName && email && postalCode) {
      initializePayment();
    } else {
      loadingMessage.value = "Please fill in all required fields...";
    }
  },
  { immediate: true }
);

// Watch for changes in props and update local copy
watch(
  () => props.donation,
  (newDonation) => {
    Object.assign(localDonation, newDonation);
  },
  { deep: true }
);

// Watch for changes in local copy and emit updates
watch(
  localDonation,
  (newData) => {
    Object.assign(props.donation, newData);
  },
  { deep: true }
);

// Stripe event handlers
const handleLoading = (loading) => {
  isLoading.value = loading;
  console.log("Loading state:", loading);
};

const handleError = (error) => {
  console.error("Stripe element error:", error);
  paymentError.value = error.message || "Payment form error";
};

const handleElementReady = () => {
  elementReady.value = true;
  console.log("Payment element ready");
};

// Handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();

  if (!canSubmit.value) {
    paymentError.value =
      "Please fill in all required fields and wait for the payment form to load";
    return;
  }

  if (!paymentRef.value) {
    paymentError.value =
      "Payment system not ready. Please refresh and try again.";
    return;
  }

  processing.value = true;
  paymentError.value = "";

  try {
    console.log("Submitting payment...");

    // Submit the payment using Vue Stripe
    const result = await paymentRef.value.submit();

    console.log("Payment result:", result);

    if (result.error) {
      throw new Error(result.error.message);
    }

    // If payment is successful, confirm with backend
    if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
      try {
        await donationService.confirmDonation({
          paymentIntentId: paymentIntentId.value || result.paymentIntent.id,
          ministry: localDonation.ministry,
          donorInfo: {
            firstName: localDonation.firstName,
            lastName: localDonation.lastName,
            email: localDonation.email,
            phone: localDonation.phone || "",
            postalCode: localDonation.postalCode,
          },
          amount: localDonation.amount,
          currency: "USD",
          isRecurring: false,
          message: localDonation.message || "",
        });
      } catch (confirmError) {
        console.error("Error confirming donation in backend:", confirmError);
        // Don't throw here as payment was successful
      }

      // Emit success
      emit("submit", {
        success: true,
        paymentIntent: result.paymentIntent,
        amount: localDonation.amount,
        ministry: localDonation.ministry,
      });
    }
  } catch (error) {
    console.error("Payment error:", error);
    paymentError.value =
      error.message || "An error occurred while processing your donation";
    emit(
      "error",
      error.message || "An error occurred while processing your donation"
    );
  } finally {
    processing.value = false;
  }
};

// Initialize on mount
onMounted(() => {
  console.log(
    "DonationForm mounted with Stripe key:",
    stripePublishableKey ? "✓" : "✗"
  );
});
</script>
