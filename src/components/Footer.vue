<template>
  <!-- Enhanced Footer with Creative Design -->
  <footer class="bg-gradient-to-b from-gray-800 to-gray-900 text-amber-50 pt-16 pb-8 px-4 relative overflow-hidden">
    <!-- Decorative wave divider -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
      <svg class="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              class="fill-current text-amber-600 opacity-20"></path>
      </svg>
    </div>
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div class="flex flex-col group">
          <div class="flex items-center mb-6 transform transition-transform duration-500 hover:scale-105">
            <div class="relative w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mr-4 shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <img src="/images/logo.jpg" alt="Rock Bridge Ministries" class="w-12 h-12 rounded-lg object-cover border-2 border-white shadow-md" />
            </div>
            <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white">
              Rock Bridge<br>Ministries
            </h3>
          </div>
          <p class="text-amber-50/80 mb-6 leading-relaxed relative pl-4 border-l-2 border-amber-500/30">
            Reaching out to communities in Kenya with the love of Christ through service and discipleship.
          </p>

          <!-- Social Icons -->
          <div class="flex space-x-4 mt-2">
            <!-- Facebook -->
            <a href="https://www.facebook.com/rockbridgeministrieskenya/" target="_blank" rel="noopener noreferrer" 
               class="social-icon group relative flex items-center justify-center w-10 h-10 rounded-xl bg-gray-700/50 backdrop-blur-sm hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-7H8.5v-3H10V9.5c0-1.38 1.11-2.5 2.5-2.5h2v3h-1.5c-.28 0-.5.22-.5.5V12h2.5v3H13v7.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            
            <!-- YouTube -->
            <a href="https://www.youtube.com/@rockbridgeministries7906/featured" target="_blank" rel="noopener noreferrer" 
               class="social-icon group relative flex items-center justify-center w-10 h-10 rounded-xl bg-gray-700/50 backdrop-blur-sm hover:bg-red-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div class="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
          
          <!-- Newsletter Signup -->
          <div class="mt-8">
            <h4 class="text-sm font-semibold text-amber-100 uppercase tracking-wider mb-3">Stay Updated</h4>
          </div>
        </div>

        <div class="flex flex-col group">
          <h4 class="text-lg font-semibold mb-6 pb-3 border-b border-amber-500/30 relative">
            <span class="relative inline-block">
              Quick Links
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-amber-50/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i> Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-amber-50/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i> About Us
              </router-link>
            </li>
            <li>
              <router-link to="/our-ministries" class="text-amber-50/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i> Our Ministries
              </router-link>
            </li>
            <li>
              <router-link to="/get-involved" class="text-amber-50/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i> Get Involved
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-amber-50/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                <i class="fas fa-chevron-right text-xs mr-2"></i> Contact Us
              </router-link>
            </li>
          </ul>
        </div>

        <div class="flex flex-col group">
          <h4 class="text-lg font-semibold mb-6 pb-3 border-b border-amber-500/30 relative">
            <span class="relative inline-block">
              Our Ministries
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/our-ministries/education-scholarship" class="text-amber-50/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                <i class="fas fa-graduation-cap text-xs mr-2"></i> Education Scholarship
              </router-link>
            </li>
            <li>
              <router-link to="/our-ministries/social-enterprises" class="text-amber-50/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                <i class="fas fa-handshake text-xs mr-2"></i> Social Enterprises
              </router-link>
            </li>
            <li>
              <router-link to="/our-ministries/workplace-evangelism" class="text-amber-50/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                <i class="fas fa-briefcase text-xs mr-2"></i> Workplace Evangelism
              </router-link>
            </li>
            <li>
              <router-link to="/media-and-resources" class="text-amber-50/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                <i class="fas fa-book-open text-xs mr-2"></i> Resources
              </router-link>
            </li>
          </ul>
        </div>

        <div class="flex flex-col group">
          <h4 class="text-lg font-semibold mb-6 pb-3 border-b border-amber-500/30 relative">
            <span class="relative inline-block">
              Contact Us
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h4>
          <ul class="space-y-4">
            <li class="flex items-start">
              <i class="fas fa-map-marker-alt text-amber-50 mt-1 mr-3"></i>
              <span class="text-gray-200/90">P.O. BOX 10271 - Gibcon House,<br/> Nakuru, Kenya, 20100</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone text-amber-50 mr-3"></i>
              <span class="text-gray-200/90">+254 720 422945</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-envelope text-amber-50 mr-3"></i>
              <span class="text-gray-200/90">rockbridgeministries@gmail.com</span>
            </li>
            <li class="flex items-center mt-4">
              <i class="fas fa-clock text-amber-50 mr-3"></i>
              <span class="text-gray-200/90">Mon - Fri: 8:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer bottom bar -->
      <div class="border-t border-gray-700/50 pt-8 mt-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-amber-50/70 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {{ new Date().getFullYear() }} Rock Bridge Ministries. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-amber-50/60 hover:text-amber-400 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" class="text-amber-50/60 hover:text-amber-400 text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" class="text-amber-50/60 hover:text-amber-400 text-sm transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
      
      <!-- Back to Top Button -->
      <button v-if="showBackToTop" @click="scrollToTop" class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  </footer>

</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      showBackToTop: false,
      scrollListener: null
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300;
    }
  },
  mounted() {
    this.scrollListener = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
  },
  beforeUnmount() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }
}
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #d97706;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #b45309;
}

/* Animation for list items */
ul li {
  transition: transform 0.3s ease, color 0.3s ease;
}

ul li:hover {
  transform: translateX(5px);
}

/* Gradient text animation */
.gradient-text {
  background-image: linear-gradient(90deg, #f59e0b, #fcd34d, #f59e0b);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 3s linear infinite;
}

@keyframes gradient {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

/* Pulse animation for call to action */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.newsletter-button {
  animation: pulse 2s infinite;
}

.newsletter-button:hover {
  animation: none;
}
</style>