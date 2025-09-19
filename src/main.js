import { createApp } from "vue";
import "./main.css";
import App from "./App.vue";
import router from "./router";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Import VueUse Motion
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

// Use plugins
app.use(router);
app.use(MotionPlugin);

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  console.error("Vue error:", {
    error: err,
    message: err.message,
    stack: err.stack,
    component: instance?.$options.__file || instance?.$options.name,
    info: info,
  });

  // Handle specific Stripe errors
  if (err.message?.includes("Stripe") || err.message?.includes("stripe")) {
    console.error("Stripe-related error detected:", err);
  }

  // Handle render function errors
  if (info === "render function") {
    console.error("Render function error - check component template");
  }
};

// Load Stripe.js script
const loadStripeScript = () => {
  return new Promise((resolve, reject) => {
    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/";
    script.onload = () => {
      if (window.Stripe) {
        console.log("Stripe.js loaded successfully");
        resolve(window.Stripe);
      } else {
        reject(new Error("Stripe.js failed to load"));
      }
    };
    script.onerror = () => reject(new Error("Failed to load Stripe.js script"));
    document.head.appendChild(script);
  });
};

// Initialize app
const initApp = async () => {
  try {
    // Load Stripe first
    await loadStripeScript();

    // Mount app
    app.mount("#app");
    console.log("Vue app mounted successfully");

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
    console.log("AOS initialized successfully");
  } catch (error) {
    console.error("Failed to initialize app:", error);

    // Still mount the app even if Stripe fails to load
    app.mount("#app");
    console.log("Vue app mounted (without Stripe)");

    // Initialize AOS anyway
    try {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });
    } catch (aosError) {
      console.error("Failed to initialize AOS:", aosError);
    }
  }
};

// Start the app
initApp();
