<template>
    <footer class="bg-primary-brown text-primary-beige py-12 px-4 mt-20">
      <div class="container mx-auto max-w-6xl">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- Ministry Info -->
          <div class="flex flex-col">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-3">
                <i class="fas fa-church text-primary-brown text-xl"></i>
              </div>
              <h3 class="text-2xl font-serif font-bold">Rock Bridge Ministries</h3>
            </div>
            <p class="text-primary-beige/90 mb-4 leading-relaxed">
              Serving the community of Nakuru, Kenya with love and compassion through Christ-centered ministries.
            </p>
            <div class="flex space-x-4 mt-2">
              <a href="#" class="text-primary-beige/80 hover:text-primary-light transition-colors duration-300">
                <i class="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" class="text-primary-beige/80 hover:text-primary-light transition-colors duration-300">
                <i class="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" class="text-primary-beige/80 hover:text-primary-light transition-colors duration-300">
                <i class="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" class="text-primary-beige/80 hover:text-primary-light transition-colors duration-300">
                <i class="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>
  
          <!-- Quick Links -->
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold mb-6 pb-2 border-b border-primary-light/30">Quick Links</h4>
            <ul class="space-y-3">
              <li>
                <router-link to="/" class="text-primary-beige/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                  <i class="fas fa-chevron-right text-xs mr-2"></i> Home
                </router-link>
              </li>
              <li>
                <router-link to="/about" class="text-primary-beige/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                  <i class="fas fa-chevron-right text-xs mr-2"></i> About Us
                </router-link>
              </li>
              <li>
                <router-link to="/our-ministries" class="text-primary-beige/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                  <i class="fas fa-chevron-right text-xs mr-2"></i> Our Ministries
                </router-link>
              </li>
              <li>
                <router-link to="/get-involved" class="text-primary-beige/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                  <i class="fas fa-chevron-right text-xs mr-2"></i> Get Involved
                </router-link>
              </li>
              <li>
                <router-link to="/contact" class="text-primary-beige/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                  <i class="fas fa-chevron-right text-xs mr-2"></i> Contact Us
                </router-link>
              </li>
            </ul>
          </div>
  
          <!-- Ministries -->
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold mb-6 pb-2 border-b border-primary-light/30">Our Ministries</h4>
            <ul class="space-y-3">
              <li>
                <router-link to="/our-ministries/education-scholarship" class="text-primary-beige/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                  <i class="fas fa-graduation-cap text-xs mr-2"></i> Education Scholarship
                </router-link>
              </li>
              <li>
                <router-link to="/our-ministries/social-enterprises" class="text-primary-beige/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                  <i class="fas fa-handshake text-xs mr-2"></i> Social Enterprises
                </router-link>
              </li>
              <li>
                <router-link to="/our-ministries/workplace-evangelism" class="text-primary-beige/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                  <i class="fas fa-briefcase text-xs mr-2"></i> Workplace Evangelism
                </router-link>
              </li>
              <li>
                <router-link to="/media-and-resources" class="text-primary-beige/90 hover:text-primary-light transition-colors duration-300 flex items-center">
                  <i class="fas fa-book-open text-xs mr-2"></i> Resources
                </router-link>
              </li>
            </ul>
          </div>
  
          <!-- Contact Information -->
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold mb-6 pb-2 border-b border-primary-light/30">Contact Us</h4>
            <ul class="space-y-4">
              <li class="flex items-start">
                <i class="fas fa-map-marker-alt text-primary-light mt-1 mr-3"></i>
                <span class="text-primary-beige/90">P.O. Box 123-20100<br>Nakuru, Kenya</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-phone text-primary-light mr-3"></i>
                <span class="text-primary-beige/90">+254 712 345 678</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-envelope text-primary-light mr-3"></i>
                <span class="text-primary-beige/90">info@rockbridgeministries.org</span>
              </li>
              <li class="flex items-center mt-4">
                <i class="fas fa-clock text-primary-light mr-3"></i>
                <span class="text-primary-beige/90">Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Newsletter Subscription -->
        <div class="bg-primary-brown/80 rounded-lg p-6 mb-8 border border-primary-light/20">
          <div class="flex flex-col md:flex-row md:items-center justify-between">
            <div class="mb-4 md:mb-0">
              <h4 class="text-xl font-serif font-bold mb-2">Stay Updated</h4>
              <p class="text-primary-beige/90">Subscribe to our newsletter for updates on our ministries</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                class="px-4 py-3 rounded-lg bg-primary-beige/10 border border-primary-light/30 text-primary-beige placeholder-primary-beige/70 focus:outline-none focus:ring-2 focus:ring-primary-light"
              >
              <button class="bg-primary-light text-primary-brown px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        <!-- Bottom Bar -->
        <div class="border-t border-primary-light/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-primary-beige/80 text-sm mb-4 md:mb-0">
            &copy; {{ new Date().getFullYear() }} Rock Bridge Ministries. All rights reserved.
          </p>
          <div class="flex space-x-6 text-sm">
            <router-link to="/privacy-policy" class="text-primary-beige/80 hover:text-primary-light transition-colors duration-300">
              Privacy Policy
            </router-link>
            <router-link to="/terms-of-service" class="text-primary-beige/80 hover:text-primary-light transition-colors duration-300">
              Terms of Service
            </router-link>
            <router-link to="/contact" class="text-primary-beige/80 hover:text-primary-light transition-colors duration-300">
              Contact
            </router-link>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
  }
  </script>