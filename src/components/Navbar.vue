<template>
  <div>
    <!-- Top navigation bar: fixed, with dynamic background based on scroll/hover -->
    <nav
    :class="['fixed w-full z-50 transition-all duration-300 ease-in-out',]"
    :style="{
      backgroundColor: isMediaAndResourcesPage ? 'rgb(17, 24, 39)' : (scrolledUp && !isBoardAndStaffPage ? '' : 'rgb(17, 24, 39)'),
      backdropFilter: isMediaAndResourcesPage ? 'none' : (scrolledUp && !isBoardAndStaffPage ? 'none' : 'blur(8px)')
    }"
    
    @mouseleave="isMediaAndResourcesPage ? null : restoreTransparency()"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Logo and Brand linking back to home -->
      <div class="flex items-center space-x-3">
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="relative transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
            <img 
              src="/images/logo.jpg" 
              alt="Rock Bridge Ministries" 
              class="w-16 h-16 rounded-full object-cover border-2 border-amber-300/80 shadow-md transition-all duration-300 group-hover:border-amber-200 group-hover:shadow-lg" 
            />
            <div class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-amber-200 group-hover:animate-ping-slow opacity-0 group-hover:opacity-50"></div>
          </div>
          <div class="text-amber-50 hidden sm:block transition-all duration-300 group-hover:text-amber-200">
            <h1 class="text-2xl font-bold leading-tight transform transition-all duration-200 group-hover:translate-x-0.5">R.O.C.K. Bridge</h1>
            <h2 class="text-2xl font-bold leading-tight transform transition-all duration-200 group-hover:translate-x-0.5">Ministries</h2>
          </div>
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-2">

        <!-- Home -->
        <router-link
          to="/"
          class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-300 group relative overflow-hidden"
          active-class="underline decoration-amber-500 decoration-2 underline-offset-8"
          @click="handleNavigation"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
          <i class="fas fa-home mr-2 text-slate-500 group-hover:text-amber-400 transition-transform duration-300 group-hover:scale-110"></i> 
          <span class="font-medium relative group-hover:text-white transition-all duration-300">Home</span>
        </router-link>

        <!-- About Dropdown -->
        <div class="relative group" v-motion-slide-visible-once-bottom>
          <router-link to="/about" :class="['flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-300 group/nav-item relative overflow-hidden', { 'underline decoration-amber-500 decoration-2 underline-offset-8': isAboutActive }]" @click="handleNavigation">
            <span class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover/nav-item:opacity-100 transition-all duration-300 transform -translate-x-full group-hover/nav-item:translate-x-0"></span>
            <i class="fas fa-info-circle mr-2 text-slate-500 group-hover/nav-item:text-amber-400 transition-transform duration-300 group-hover/nav-item:scale-110"></i> 
            <span class="font-medium relative group-hover/nav-item:text-white transition-all duration-300">About</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-300"></i>
          </router-link>

          <!-- Hover dropdown menu for About section -->
          <div class="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-out bg-gray-900 rounded-lg shadow-xl mt-2 py-2 w-56 border border-gray-800 z-50">
            <!-- Board and Staff -->
            <router-link 
              to="/about/board-and-staff" 
              class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-white transition-all duration-200"
              active-class="underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              <i class="fas fa-users mr-2 text-orange-400"></i>Board and Staff
            </router-link>

            <!-- History -->
            <router-link 
              to="/about/history" 
              class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-white transition-all duration-200"
              active-class="underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              <i class="fas fa-history mr-2 text-orange-400"></i>History
            </router-link>
          </div>
        </div>
        
        <!-- Our Ministries Dropdown -->
        <div class="relative group" v-motion-slide-visible-once-bottom :delay="100">
          <router-link to="/our-ministries" :class="['flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-300 group/nav-item relative overflow-hidden', { 'underline decoration-amber-500 decoration-2 underline-offset-8': isOurMinistriesActive }]" @click="handleNavigation">
            <span class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover/nav-item:opacity-100 transition-all duration-300 transform -translate-x-full group-hover/nav-item:translate-x-0"></span>
            <i class="fas fa-church mr-2 text-slate-500 group-hover/nav-item:text-amber-400 transition-transform duration-300 group-hover/nav-item:scale-110"></i> 
            <span class="font-medium relative group-hover/nav-item:text-white transition-all duration-300">Our Ministries</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-300"></i>
          </router-link>
          <!-- Hover dropdown menu for Our Ministries -->
          <div class="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-out bg-gray-900 rounded-lg shadow-xl mt-2 py-2 w-56 border border-gray-800 z-50">
          
            <!-- Education Scholarship -->
            <router-link 
              to="/our-ministries/education-scholarship" 
              class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-white transition-all duration-200"
              active-class="underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              <i class="fas fa-graduation-cap mr-2 text-orange-400"></i>Education Scholarship
            </router-link>
            <!-- Social Enterprises -->
            <router-link 
              to="/our-ministries/social-enterprises" 
              class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-white transition-all duration-200"
              active-class="underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              <i class="fas fa-building mr-2 text-orange-400"></i>Social Enterprises
            </router-link>
            <!-- Workplace Evangelism -->
            <router-link 
              to="/our-ministries/workplace-evangelism" 
              class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-white transition-all duration-200"
              active-class="underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              <i class="fas fa-briefcase mr-2 text-orange-400"></i>Workplace Evangelism
            </router-link>
          </div>
        </div>
        
        <!-- Get Involved Dropdown -->
        <div class="relative group" v-motion-slide-visible-once-bottom :delay="200">
          <router-link to="/get-involved" :class="['flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-300 group/nav-item relative overflow-hidden', { 'underline decoration-amber-500 decoration-2 underline-offset-8': isGetInvolvedActive }]" @click="handleNavigation">
            <span class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover/nav-item:opacity-100 transition-all duration-300 transform -translate-x-full group-hover/nav-item:translate-x-0"></span>
            <i class="fas fa-hands-helping mr-2 text-slate-500 group-hover/nav-item:text-amber-400 transition-transform duration-300 group-hover/nav-item:scale-110"></i> 
            <span class="font-medium relative group-hover/nav-item:text-white transition-all duration-300">Get Involved</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-300"></i>
          </router-link>
          <!-- Hover dropdown menu for Get Involved -->
          <div class="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-out bg-gray-900 rounded-lg shadow-xl mt-2 py-2 w-56 border border-gray-800 z-50">
            <!-- How to Support -->
            <router-link 
              to="/get-involved/how-to-support" 
              class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-white transition-all duration-200"
              active-class="underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              <i class="fas fa-question-circle mr-2 text-orange-400"></i>How to Support
            </router-link>
            <!-- Partner with Us -->
            <router-link 
              to="/get-involved/partner-with-us" 
              class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-white transition-all duration-200"
              active-class="underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              <i class="fas fa-handshake mr-2 text-orange-400"></i>Partner with Us
            </router-link>
            <!-- Fund our Programs -->
            <router-link 
              to="/get-involved/fund-our-programs" 
              class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-white transition-all duration-200"
              active-class="underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              <i class="fas fa-donate mr-2 text-orange-400"></i>Fund our Programs
            </router-link>
          </div>
        </div>
        
        <!-- Media and Resources -->
        <router-link 
          to="/media-and-resources" 
          class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-300 group relative overflow-hidden"
          active-class="underline decoration-amber-500 decoration-2 underline-offset-8"
          v-motion-slide-visible-once-bottom :delay="300"
          @click="handleNavigation"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
          <i class="fas fa-photo-video mr-2 text-slate-500 group-hover:text-amber-400 transition-transform duration-300 group-hover:scale-110"></i> 
          <span class="font-medium relative group-hover:text-white transition-all duration-300">Media and Resources</span>
        </router-link>

        <!-- Contact -->
        <router-link 
          to="/contact" 
          class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-300 group relative overflow-hidden"
          active-class="underline decoration-amber-500 decoration-2 underline-offset-8"
          v-motion-slide-visible-once-bottom :delay="400"
          @click="handleNavigation"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
          <i class="fas fa-envelope mr-2 text-slate-500 group-hover:text-amber-400 transition-transform duration-300 group-hover:scale-110"></i> 
          <span class="font-medium relative group-hover:text-white transition-all duration-300">Contact</span>
        </router-link>
      </div>

      <!-- Mobile Menu Button (Hamburger) -->
      <div class="lg:hidden z-50">
        <button 
          @click="toggleMobileMenu" 
          class="relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none group"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <span 
            :class="[
              'block w-6 h-0.5 bg-amber-300 rounded-full transition-all duration-300',
              mobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-amber-200' : 'mb-1.5 bg-amber-300 group-hover:bg-amber-200'
            ]"
          ></span>
          <span 
            :class="[
              'block w-6 h-0.5 bg-amber-300 rounded-full transition-all duration-300',
              mobileMenuOpen ? 'opacity-0' : 'opacity-100 mb-1.5 bg-amber-300 group-hover:bg-amber-200'
            ]"
          ></span>
          <span 
            :class="[
              'block w-6 h-0.5 bg-amber-300 rounded-full transition-all duration-300',
              mobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-amber-200' : 'bg-amber-300 group-hover:bg-amber-200'
            ]"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        @click="closeMobileMenu"
      ></div>
    </transition>

    <!-- Mobile Menu Sidebar -->
    <transition
      enter-active-class="transition-transform duration-300 ease-out"
      leave-active-class="transition-transform duration-200 ease-in"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div 
        v-if="mobileMenuOpen"
        class="fixed top-0 right-0 h-screen w-80 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-[60] overflow-y-auto"
        @click.stop
      >
        <!-- Close button inside the menu -->
        <div class="flex justify-end p-4 sticky top-0 bg-gray-900/80 backdrop-blur-sm z-[70]">
          <button 
            @click="toggleMobileMenu" 
            class="text-amber-300 hover:text-amber-200 focus:outline-none p-2 -mr-2"
            aria-label="Close menu"
          >
            <i class="fas fa-times text-2xl"></i>
          </button>
        </div>

        <!-- Mobile Menu Content -->
        <div class="p-4 space-y-6">
          <!-- Logo -->
          <div class="flex items-center px-4 mb-6">
            <img 
              src="/images/logo.jpg" 
              alt="Rock Bridge Ministries" 
              class="w-16 h-16 rounded-full object-cover border-2 border-amber-300/80 shadow-md"
            />
            <div class="ml-4">
              <h1 class="text-xl font-bold text-white">R.O.C.K. Bridge</h1>
              <h2 class="text-lg text-amber-300">Ministries</h2>
            </div>
          </div>

          <!-- Navigation Links -->
          <nav class="space-y-2">
            <!-- Home -->
            <router-link 
              to="/" 
              class="flex items-center text-amber-50 hover:bg-gray-700/50 px-4 py-3 rounded-lg transition-all duration-200 group"
              :class="{'bg-gray-700/50 text-amber-200': $route.path === '/'}"
              @click="handleNavigation"
            >
              <i class="fas fa-home mr-3 text-amber-300 group-hover:text-amber-200 text-lg w-6 text-center"></i> 
              <span>Home</span>
            </router-link>
    
            <!-- About Section -->
            <div class="space-y-1">
              <!-- About main link -->
              <router-link 
                to="/about" 
                class="flex items-center text-amber-50 hover:bg-gray-700/50 px-4 py-3 rounded-lg transition-all duration-200 group"
                :class="{'bg-gray-700/50 text-amber-200': $route.path === '/about'}"
                @click="handleNavigation"
              >
                <i class="fas fa-info-circle mr-3 text-amber-300 group-hover:text-amber-200 text-lg w-6 text-center"></i>
                <span>About</span>
              </router-link>

              <!-- About submenu toggle -->
              <button 
                @click="mobileSubmenus.about = !mobileSubmenus.about"
                class="w-full flex items-center justify-between text-amber-50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 group"
              >
                <div class="flex items-center">
                  <div class="w-6 mr-3"></div> <!-- Spacer to align with parent -->
                  <span class="text-sm text-amber-100">More About</span>
                </div>
                <i 
                  class="fas fa-chevron-down transition-transform duration-200 text-amber-400/70 text-sm"
                  :class="mobileSubmenus.about ? 'transform rotate-180' : ''"
                ></i>
              </button>
              
              <div 
                v-if="mobileSubmenus.about" 
                class="mt-1 ml-4 pl-4 border-l-2 border-amber-900/30 space-y-1"
              >
                <router-link 
                  to="/about/board-and-staff" 
                  class="block text-amber-100 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                  :class="{'bg-gray-700/50 text-amber-200': $route.path === '/about/board-and-staff'}"
                  @click="handleNavigation"
                >
                  <i class="fas fa-users mr-2 text-orange-400"></i>Board and Staff
                </router-link>
                <router-link 
                  to="/about/history" 
                  class="block text-amber-100 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                  :class="{'bg-gray-700/50 text-amber-200': $route.path === '/about/history'}"
                  @click="handleNavigation"
                >
                  <i class="fas fa-history mr-2 text-orange-400"></i>History
                </router-link>
              </div>
            </div>

            <!-- Our Ministries Section -->
            <div class="space-y-1">
              <!-- Our Ministries main link -->
              <router-link 
                to="/our-ministries" 
                class="flex items-center text-amber-50 hover:bg-gray-700/50 px-4 py-3 rounded-lg transition-all duration-200 group"
                :class="{'bg-gray-700/50 text-amber-200': $route.path === '/our-ministries'}"
                @click="handleNavigation"
              >
                <i class="fas fa-church mr-3 text-amber-300 group-hover:text-amber-200 text-lg w-6 text-center"></i>
                <span>Our Ministries</span>
              </router-link>

              <!-- Our Ministries submenu toggle -->
              <button 
                @click="mobileSubmenus.ministries = !mobileSubmenus.ministries"
                class="w-full flex items-center justify-between text-amber-50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 group"
              >
                <div class="flex items-center">
                  <div class="w-6 mr-3"></div> <!-- Spacer to align with parent -->
                  <span class="text-sm text-amber-100">View Ministries</span>
                </div>
                <i 
                  class="fas fa-chevron-down transition-transform duration-200 text-amber-400/70 text-sm"
                  :class="mobileSubmenus.ministries ? 'transform rotate-180' : ''"
                ></i>
              </button>
              
              <div 
                v-if="mobileSubmenus.ministries" 
                class="mt-1 ml-4 pl-4 border-l-2 border-amber-900/30 space-y-1"
              >
                <router-link 
                  to="/our-ministries/education-scholarship" 
                  class="block text-amber-100 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                  :class="{'bg-gray-700/50 text-amber-200': $route.path === '/our-ministries/education-scholarship'}"
                  @click="handleNavigation"
                >
                  <i class="fas fa-graduation-cap mr-2 text-orange-400"></i>Education Scholarship
                </router-link>
                <router-link 
                  to="/our-ministries/social-enterprises" 
                  class="block text-amber-100 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                  :class="{'bg-gray-700/50 text-amber-200': $route.path === '/our-ministries/social-enterprises'}"
                  @click="handleNavigation"
                >
                  <i class="fas fa-building mr-2 text-orange-400"></i>Social Enterprises
                </router-link>
                <router-link 
                  to="/our-ministries/workplace-evangelism" 
                  class="block text-amber-100 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                  :class="{'bg-gray-700/50 text-amber-200': $route.path === '/our-ministries/workplace-evangelism'}"
                  @click="handleNavigation"
                >
                  <i class="fas fa-briefcase mr-2 text-orange-400"></i>Workplace Evangelism
                </router-link>
              </div>
            </div>
        
            <!-- Get Involved Section -->
            <div class="space-y-1">
              <!-- Get Involved main link -->
              <router-link 
                to="/get-involved" 
                class="flex items-center text-amber-50 hover:bg-gray-700/50 px-4 py-3 rounded-lg transition-all duration-200 group"
                :class="{'bg-gray-700/50 text-amber-200': $route.path === '/get-involved'}"
                @click="handleNavigation"
              >
                <i class="fas fa-hands-helping mr-3 text-amber-300 group-hover:text-amber-200 text-lg w-6 text-center"></i>
                <span>Get Involved</span>
              </router-link>

              <!-- Get Involved submenu toggle -->
              <button 
                @click="mobileSubmenus.getInvolved = !mobileSubmenus.getInvolved"
                class="w-full flex items-center justify-between text-amber-50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 group"
              >
                <div class="flex items-center">
                  <div class="w-6 mr-3"></div> <!-- Spacer to align with parent -->
                  <span class="text-sm text-amber-100">Ways to Help</span>
                </div>
                <i 
                  class="fas fa-chevron-down transition-transform duration-200 text-amber-400/70 text-sm"
                  :class="mobileSubmenus.getInvolved ? 'transform rotate-180' : ''"
                ></i>
              </button>
              
              <div 
                v-if="mobileSubmenus.getInvolved" 
                class="mt-1 ml-4 pl-4 border-l-2 border-amber-900/30 space-y-1"
              >
                <router-link 
                  to="/get-involved/how-to-support" 
                  class="block text-amber-100 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                  :class="{'bg-gray-700/50 text-amber-200': $route.path === '/get-involved/how-to-support'}"
                  @click="handleNavigation"
                >
                  <i class="fas fa-question-circle mr-2 text-orange-400"></i>How to Support
                </router-link>
                <router-link 
                  to="/get-involved/partner-with-us" 
                  class="block text-amber-100 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                  :class="{'bg-gray-700/50 text-amber-200': $route.path === '/get-involved/partner-with-us'}"
                  @click="handleNavigation"
                >
                  <i class="fas fa-handshake mr-2 text-orange-400"></i>Partner with Us
                </router-link>
                <router-link 
                  to="/get-involved/fund-our-programs" 
                  class="block text-amber-100 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                  :class="{'bg-gray-700/50 text-amber-200': $route.path === '/get-involved/fund-our-programs'}"
                  @click="handleNavigation"
                >
                  <i class="fas fa-donate mr-2 text-orange-400"></i>Fund our Programs
                </router-link>
              </div>
            </div>

            <!-- Media & Resources -->
            <router-link 
              to="/media-and-resources" 
              class="flex items-center text-amber-50 hover:bg-gray-700/50 px-4 py-3 rounded-lg transition-all duration-200 group"
              :class="{'bg-gray-700/50 text-amber-200': $route.path.startsWith('/media-and-resources')}"
              @click="handleNavigation"
            >
              <i class="fas fa-photo-video mr-3 text-amber-300 group-hover:text-amber-200 text-lg w-6 text-center"></i> 
              <span>Media and Resources</span>
            </router-link>

            <!-- Contact -->
            <router-link 
              to="/contact" 
              class="flex items-center text-amber-50 hover:bg-gray-700/50 px-4 py-3 rounded-lg transition-all duration-200 group"
              :class="{'bg-gray-700/50 text-amber-200': $route.path === '/contact'}"
              @click="handleNavigation"
            >
              <i class="fas fa-envelope mr-3 text-amber-300 group-hover:text-amber-200 text-lg w-6 text-center"></i> 
              <span>Contact</span>
            </router-link>
          </nav>
          
          <!-- Social Links -->
          <div class="px-4 pt-6 pb-8 border-t border-gray-800 mt-6">
            <h3 class="text-sm font-medium text-amber-100 mb-4">Connect With Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-amber-300 hover:text-amber-200 transition-colors">
                <i class="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" class="text-amber-300 hover:text-amber-200 transition-colors">
                <i class="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" class="text-amber-300 hover:text-amber-200 transition-colors">
                <i class="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" class="text-amber-300 hover:text-amber-200 transition-colors">
                <i class="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
// VueUse Motion directives are auto-imported and available globally
import { useRoute } from 'vue-router'

// Whether the navbar should appear transparent (true at very top and not hovered)
const route = useRoute()
const scrolledUp = ref(true)
const lastScrollY = ref(0)
const mobileMenuOpen = ref(false)
const isHovered = ref(false)
let ticking = false

// Mobile submenu states
const mobileSubmenus = ref({
  about: false,
  ministries: false,
  getInvolved: false
})

// Check if current route should maintain solid navbar background
const isBoardAndStaffPage = computed(() => {
  return route.path.includes('board-and-staff') || route.path.includes('how-to-support')
})

// Check if current page is Media and Resources page
const isMediaAndResourcesPage = computed(() => {
  return route.path.includes('media-and-resources') && !route.path.includes('videos')
})

// Computed properties to check for active parent routes
const isAboutActive = computed(() => route.path.startsWith('/about'))
const isOurMinistriesActive = computed(() => route.path.startsWith('/our-ministries'))
const isGetInvolvedActive = computed(() => route.path.startsWith('/get-involved'))

// Toggle mobile menu open state
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Toggle body scroll
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : 'auto'
  
  // Update scrolled state when toggling menu
  if (mobileMenuOpen.value) {
    scrolledUp.value = false
  } else {
    handleScroll()
  }
}

// Close mobile menu and scroll to top (called on link click)
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  // Reset all mobile submenus
  mobileSubmenus.value = {
    about: false,
    ministries: false,
    getInvolved: false
  }
  // Smooth scroll to top after a small delay to allow menu to close
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, 100)
  // Re-enable body scroll
  document.body.style.overflow = 'auto'
}

// Handle navigation with scroll to top
const handleNavigation = () => {
  closeMobileMenu()
  // Additional scroll to top to ensure it happens even if menu was already closed
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Force opaque background while hovered
const makeOpaque = () => {
  isHovered.value = true
  scrolledUp.value = false
}

// Restore transparency if scrolled to very top and not hovered
const restoreTransparency = () => {
  isHovered.value = false
  // Transparent only when scrolled to very top
  scrolledUp.value = window.scrollY === 0
}

// Update scrolledUp based on current scroll
const handleScroll = () => {
  if (isHovered.value || isMediaAndResourcesPage.value) return
  
  // Use requestAnimationFrame for smoother updates
  window.requestAnimationFrame(() => {
    scrolledUp.value = isMediaAndResourcesPage.value ? false : window.scrollY < 10
  })
}

onMounted(() => {
  // Initialize state on mount and subscribe to scroll listener
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  // Re-enable body scroll when component is unmounted
  document.body.style.overflow = 'auto'
})
</script>