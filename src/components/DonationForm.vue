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
          <label
            for="payment-element"
            class="block text-sm font-medium text-gray-700"
          >
            Card Details *
          </label>
          <div
            id="payment-element"
            class="p-4 border-2 border-gray-200 rounded-lg bg-white transition-colors focus-within:border-amber-400 min-h-[50px]"
          >
            <!-- Stripe Payment Element will be mounted here -->
            <div
              v-if="!stripeReady"
              class="flex items-center justify-center text-gray-500 text-sm"
            >
              {{ loadingMessage }}
            </div>
          </div>
        </div>
        <div
          id="payment-element-errors"
          role="alert"
          class="text-red-600 text-sm min-h-[20px]"
        ></div>
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
import { reactive, watch, ref, computed, onBeforeUnmount } from "vue";

const props = defineProps({
  donation: {
    type: Object,
    required: true,
  },
  stripe: Object,
});

const emit = defineEmits(["submit", "elements-ready", "error"]);

// Local reactive copy to avoid direct prop mutation
const localDonation = reactive({ ...props.donation });
const stripeReady = ref(false);
const processing = ref(false);
const loadingMessage = ref("Loading payment form...");
const elements = ref(null);
const paymentElement = ref(null);
const clientSecret = ref(null);
const paymentIntentId = ref(null);

// Computed property to check if form can be submitted
const canSubmit = computed(() => {
  return (
    stripeReady.value &&
    localDonation.amount &&
    localDonation.amount >= 1 &&
    localDonation.firstName &&
    localDonation.lastName &&
    localDonation.email &&
    localDonation.postalCode &&
    !processing.value
  );
});

// Initialize Stripe Elements with client secret
const setupStripeElements = async (stripeInstance, secret) => {
  try {
    if (!stripeInstance || !secret) {
      throw new Error("Stripe instance or client secret not available");
    }

    loadingMessage.value = "Setting up payment form...";

    // Cleanup existing elements first
    cleanup();

    // Create elements instance with client secret
    elements.value = stripeInstance.elements({
      clientSecret: secret,
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

    // Create payment element
    paymentElement.value = elements.value.create("payment", {
      layout: {
        type: "tabs",
        defaultCollapsed: false,
      },
      fields: {
        billingDetails: "never", // We collect this separately
      },
    });

    // Wait for DOM to be ready
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Mount the payment element
    const paymentElementContainer = document.getElementById("payment-element");
    if (paymentElementContainer) {
      await paymentElement.value.mount("#payment-element");
      stripeReady.value = true;

      // Listen for changes and errors
      paymentElement.value.on("change", (event) => {
        const displayError = document.getElementById("payment-element-errors");
        if (displayError) {
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = "";
          }
        }
      });

      // Emit ready state
      emit("elements-ready", {
        elements: elements.value,
        paymentElement: paymentElement.value,
        clientSecret: secret,
        paymentIntentId: paymentIntentId.value,
      });
    } else {
      throw new Error("Payment element container not found");
    }
  } catch (error) {
    console.error("Error setting up Stripe Elements:", error);
    const displayError = document.getElementById("payment-element-errors");
    if (displayError) {
      displayError.textContent =
        error.message ||
        "Failed to load payment form. Please refresh the page.";
    }
    emit("error", error.message || "Failed to setup payment form");
  }
};

// Create payment intent and setup elements
const initializePayment = async () => {
  if (!props.stripe || !localDonation.amount || localDonation.amount < 1) {
    return;
  }

  if (
    !localDonation.firstName ||
    !localDonation.lastName ||
    !localDonation.email
  ) {
    return;
  }

  try {
    loadingMessage.value = "Creating payment intent...";

    // Import the donation service
    const { default: donationService } = await import(
      "../services/donationService"
    );

    // Create payment intent
    const intentResponse = await donationService.createPaymentIntent({
      ministry: localDonation.ministry,
      amount: Math.round(localDonation.amount * 100), // Convert to cents
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

    if (!intentResponse.success) {
      throw new Error(
        intentResponse.message || "Failed to create payment intent"
      );
    }

    // Store the client secret and payment intent ID
    clientSecret.value = intentResponse.data.clientSecret;
    paymentIntentId.value = intentResponse.data.paymentIntentId;

    // Setup Stripe elements with the client secret
    await setupStripeElements(props.stripe, clientSecret.value);
  } catch (error) {
    console.error("Error initializing payment:", error);
    const displayError = document.getElementById("payment-element-errors");
    if (displayError) {
      displayError.textContent =
        error.message || "Failed to initialize payment. Please try again.";
    }
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
    () => props.stripe,
  ],
  ([amount, firstName, lastName, email, postalCode, stripe]) => {
    // Reset stripe ready state when key fields change
    if (stripeReady.value) {
      stripeReady.value = false;
      cleanup();
    }

    // Initialize payment if all required fields are present
    if (stripe && amount >= 1 && firstName && lastName && email && postalCode) {
      initializePayment();
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

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!props.stripe || !paymentElement.value || !clientSecret.value) {
    emit("error", "Payment system not ready. Please wait and try again.");
    return;
  }

  if (!canSubmit.value) {
    emit("error", "Please fill in all required fields");
    return;
  }

  processing.value = true;

  try {
    emit("submit", {
      elements: elements.value,
      paymentElement: paymentElement.value,
      clientSecret: clientSecret.value,
      paymentIntentId: paymentIntentId.value,
    });
  } catch (error) {
    console.error("Submit error:", error);
    emit(
      "error",
      error.message || "An error occurred while processing your donation"
    );
  } finally {
    processing.value = false;
  }
};

// Cleanup function
const cleanup = () => {
  if (paymentElement.value) {
    try {
      paymentElement.value.unmount();
    } catch (error) {
      console.warn("Error unmounting payment element:", error);
    }
    paymentElement.value = null;
  }

  if (elements.value) {
    elements.value = null;
  }

  stripeReady.value = false;
  clientSecret.value = null;
  paymentIntentId.value = null;
};

// Cleanup on unmount
onBeforeUnmount(() => {
  cleanup();
});

// Expose cleanup method
defineExpose({
  cleanup,
  initializePayment,
});
</script>
