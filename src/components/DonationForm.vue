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

          <!-- Native Stripe Elements Container -->
          <div
            id="stripe-payment-element"
            class="border-2 border-gray-200 rounded-lg p-4 bg-white transition-colors focus-within:border-amber-400"
            style="min-height: 120px"
          >
            <!-- Stripe will mount payment element here -->
          </div>
        </div>

        <div
          v-if="paymentError"
          class="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md p-3"
        >
          {{ paymentError }}
        </div>

        <div
          v-if="stripeLoading"
          class="text-blue-600 text-sm bg-blue-50 border border-blue-200 rounded-md p-3"
        >
          Loading payment form...
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
import {
  reactive,
  watch,
  ref,
  computed,
  onMounted,
  nextTick,
  onBeforeUnmount,
} from "vue";
import donationService from "../services/donationService";

const props = defineProps({
  donation: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["submit", "error"]);

// Local reactive copy
const localDonation = reactive({ ...props.donation });

// Stripe configuration
const stripePublishableKey =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
  "pk_test_51S8H6j7nMNd6hGyDlGi92ziaM4Bhm5juRM50liyQv8qlJsmHCk8bHQUA79xiy5ZHX5hkAnYX2VQ4kqj4y6TuJSXW00eWF1rzVv";

// Component state
const processing = ref(false);
const paymentError = ref("");
const stripeLoading = ref(true);
const elementReady = ref(false);

// Stripe instances
let stripe = null;
let elements = null;
let paymentElement = null;

// Elements options
const elementsOptions = computed(() => ({
  mode: "payment",
  amount: localDonation.amount ? Math.round(localDonation.amount * 100) : 1000,
  currency: "usd",
  setup_future_usage: "off_session",
  payment_method_types: ["card"],
  appearance: {
    theme: "stripe",
    variables: {
      colorPrimary: "#d97706",
      colorBackground: "#ffffff",
      colorText: "#374151",
      colorDanger: "#dc2626",
      fontFamily: '"Inter", system-ui, sans-serif',
      borderRadius: "8px",
      spacingUnit: "4px",
      fontSizeBase: "14px",
    },
    rules: {
      ".Input": {
        padding: "12px",
        fontSize: "14px",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        boxShadow: "none",
      },
      ".Input:focus": {
        borderColor: "#d97706",
        boxShadow: "0 0 0 2px rgba(217, 119, 6, 0.2)",
      },
      ".Input--invalid": {
        borderColor: "#dc2626",
      },
    },
  },
}));

// Computed property to check if form can be submitted
const canSubmit = computed(() => {
  return (
    elementReady.value &&
    localDonation.amount &&
    localDonation.amount >= 1 &&
    localDonation.firstName?.trim() &&
    localDonation.lastName?.trim() &&
    localDonation.email?.trim() &&
    localDonation.postalCode?.trim() &&
    !processing.value &&
    !stripeLoading.value &&
    stripe &&
    paymentElement
  );
});

// Initialize Stripe
const initializeStripe = async () => {
  try {
    stripeLoading.value = true;
    paymentError.value = "";

    // Load Stripe
    if (!window.Stripe) {
      throw new Error("Stripe.js failed to load");
    }

    stripe = window.Stripe(stripePublishableKey);
    if (!stripe) {
      throw new Error("Failed to initialize Stripe");
    }

    // Wait for DOM to be ready
    await nextTick();

    const container = document.getElementById("stripe-payment-element");
    if (!container) {
      throw new Error("Stripe container element not found");
    }

    // Create elements
    elements = stripe.elements(elementsOptions.value);

    if (!elements) {
      throw new Error("Failed to create Stripe elements");
    }

    // Create payment element
    paymentElement = elements.create("payment");

    if (!paymentElement) {
      throw new Error("Failed to create payment element");
    }

    // Handle element events
    paymentElement.on("ready", () => {
      console.log("Stripe payment element ready");
      elementReady.value = true;
      stripeLoading.value = false;
    });

    paymentElement.on("change", (event) => {
      if (event.error) {
        paymentError.value = event.error.message;
      } else {
        paymentError.value = "";
      }
    });

    // Mount the element
    await paymentElement.mount("#stripe-payment-element");
    console.log("Stripe payment element mounted");
  } catch (error) {
    console.error("Error initializing Stripe:", error);
    paymentError.value = error.message || "Failed to load payment form";
    stripeLoading.value = false;
  }
};

// Update elements when amount changes
const updateElements = async () => {
  if (!elements || !localDonation.amount) return;

  try {
    await elements.update(elementsOptions.value);
  } catch (error) {
    console.error("Error updating elements:", error);
  }
};

// Watch for amount changes
watch(() => localDonation.amount, updateElements);

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

// Handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();

  if (!canSubmit.value) {
    paymentError.value = "Please complete all required fields";
    return;
  }

  processing.value = true;
  paymentError.value = "";

  try {
    console.log("Creating payment intent...");

    // Step 1: Create payment intent
    const paymentIntentResponse = await donationService.createPaymentIntent({
      ministry: localDonation.ministry,
      amount: localDonation.amount,
      currency: "usd",
      donorInfo: {
        firstName: localDonation.firstName.trim(),
        lastName: localDonation.lastName.trim(),
        email: localDonation.email.trim(),
        phone: localDonation.phone?.trim() || "",
        postalCode: localDonation.postalCode.trim(),
      },
      isRecurring: false,
      message: localDonation.message?.trim() || "",
    });

    if (
      !paymentIntentResponse.success ||
      !paymentIntentResponse.data?.clientSecret
    ) {
      throw new Error(
        paymentIntentResponse.message || "Failed to create payment intent"
      );
    }

    const clientSecret = paymentIntentResponse.data.clientSecret;
    const paymentIntentId = paymentIntentResponse.data.paymentIntentId;

    console.log("Payment intent created:", paymentIntentId);

    // Step 2: Confirm payment
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/donation-success`,
        payment_method_data: {
          billing_details: {
            name: `${localDonation.firstName} ${localDonation.lastName}`,
            email: localDonation.email,
            phone: localDonation.phone || undefined,
            address: {
              postal_code: localDonation.postalCode,
            },
          },
        },
      },
      redirect: "if_required",
    });

    if (error) {
      console.error("Payment confirmation error:", error);
      throw new Error(error.message);
    }

    if (paymentIntent?.status !== "succeeded") {
      throw new Error("Payment was not completed successfully");
    }

    // Step 3: Confirm with backend
    try {
      await donationService.confirmDonation({
        paymentIntentId: paymentIntentId,
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
    }

    // Step 4: Emit success
    emit("submit", {
      success: true,
      paymentIntent: paymentIntent,
      paymentIntentId: paymentIntentId,
      amount: localDonation.amount,
      ministry: localDonation.ministry,
    });

    console.log("Payment completed successfully!");
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

// Cleanup
onBeforeUnmount(() => {
  if (paymentElement) {
    paymentElement.unmount();
  }
});

// Initialize on mount
onMounted(async () => {
  console.log(
    "DonationForm mounted with Stripe key:",
    stripePublishableKey ? "✓" : "✗"
  );
  console.log("Initial donation data:", localDonation);

  // Wait a bit for DOM to be ready and then initialize Stripe
  await nextTick();
  setTimeout(initializeStripe, 100);
});
</script>
