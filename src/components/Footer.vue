<template>
  <!-- Site-wide footer with 4-column layout on desktop and stacked on mobile -->
  <footer class="bg-gray-900 text-amber-50 py-12 px-4 mt-20">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div class="flex flex-col">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-3">
              <img src="/images/logo.jpg" alt="Rock Bridge Ministries" class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
              <i class="fas fa-church text-primary-brown text-xl"></i>
            </div>
            <h3 class="text-2xl font-serif font-bold">Rock Bridge Ministries</h3>
          </div>
          <p class="text-amber-50/90 mb-4 leading-relaxed">
            Reaching out to communities in kenya for christ
          </p>

          <!-- Social icons (require Font Awesome stylesheet included in index.html) -->
          <div class="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/rockbridgeministrieskenya/" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-blue-900 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-7H8.5v-3H10V9.5c0-1.38 1.11-2.5 2.5-2.5h2v3h-1.5c-.28 0-.5.22-.5.5V12h2.5v3H13v7.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
              <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                Follow us on Facebook
                <svg class="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 16 8">
                  <path d="M0 0h16L8 8 0 0z"></path>
                </svg>
              </span>
            </a>
            <a href="#" class="text-amber-50/80 hover:text-primary-light transition-colors duration-300">
              <i class="fab fa-instagram text-lg"></i>
            </a>
            <a href="#" class="text-amber-50/80 hover:text-primary-light transition-colors duration-300">
              <i class="fab fa-twitter text-lg"></i>
            </a>
            <a href="#" class="text-amber-50/80 hover:text-primary-light transition-colors duration-300">
              <i class="fab fa-youtube text-lg"></i>
            </a>
          </div>
        </div>


        <div class="flex flex-col">
          <h4 class="text-lg font-semibold mb-6 pb-2 border-b border-primary-light/30">Quick Links</h4>
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

        <div class="flex flex-col">
          <h4 class="text-lg font-semibold mb-6 pb-2 border-b border-primary-light/30">Our Ministries</h4>
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

        <div class="flex flex-col">
          <h4 class="text-lg font-semibold mb-6 pb-2 border-b border-primary-light/30">Contact Us</h4>
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

      <!-- Footer bottom bar: copyright -->
      <div class="border-t border-primary-light/30 pt-8">
        <p class="text-amber-50/80 text-sm text-center md:text-left">
          &copy; {{ new Date().getFullYear() }} Rock Bridge Ministries. All rights reserved.
        </p>
      </div>
    </div>
  </footer>

</template>



<script>

export default {

  name: 'AppFooter',

}

</script>