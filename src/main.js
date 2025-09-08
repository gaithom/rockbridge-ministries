import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).mount('#app')

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration (in ms)
  once: true,     // Whether animation happens only once
});