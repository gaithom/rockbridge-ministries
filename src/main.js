import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import router from './router'
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App)
app.use(router)
app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});