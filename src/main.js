import { createApp } from "vue";
import "./main.css";
import App from "./App.vue";
import router from "./router";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Import VueUse Motion
import { MotionPlugin } from "@vueuse/motion";

// Import Vue Stripe
import { VueStripePlugin } from "@vue-stripe/vue-stripe";

const app = createApp(App);

// Use plugins
app.use(router);
app.use(MotionPlugin);

// Configure Vue Stripe with proper error handling
const stripePublishableKey =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
  "pk_test_51QFdLKRwgKCnc7KZNRM1uGBb7z6TKjFUzOj2YFAGDbKhx4jm3p7xxQFfg6xw4wV9LJqG0REOQVUE9nGmNfgjqyUm00IlEBJy0F";

console.log(
  "Initializing Vue Stripe with key:",
  stripePublishableKey ? "✓ Present" : "✗ Missing"
);

if (!stripePublishableKey) {
  console.error(
    "VITE_STRIPE_PUBLISHABLE_KEY is not defined in environment variables"
  );
}

app.use(VueStripePlugin, {
  pk: stripePublishableKey,
  stripeAccount: undefined,
  apiVersion: "2023-10-16", // Use a specific API version
  locale: "en",
});

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error("Vue error:", err, info);
};

// Mount app
app.mount("#app");

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});
