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

    <!-- Mobile Menu Overlay with animated background -->
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
        class="fixed inset-0 z-40 lg:hidden overflow-hidden"
        @click="closeMobileMenu"
      >
        <!-- Animated gradient background -->
        <div class="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-gray-900/90 to-amber-800/30 animate-gradient-xy"></div>
        
        <!-- Floating particles -->
        <div class="absolute inset-0 overflow-hidden">
          <div v-for="i in 15" :key="`particle-${i}`" 
            class="absolute rounded-full bg-amber-400/20"
            :class="`w-${Math.floor(Math.random() * 3) + 1} h-${Math.floor(Math.random() * 3) + 1}`"
            :style="{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random()})`
            }"
          ></div>
        </div>
        
        <!-- Backdrop blur -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
    </transition>

    <!-- Mobile Menu Sidebar with enhanced styling -->
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
        class="fixed top-0 right-0 h-screen w-80 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-800/95 shadow-2xl z-[60] overflow-y-auto overflow-x-hidden"
        @click.stop
      >
        <!-- Animated border highlight -->
        <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-300 to-amber-600 animate-pulse"></div>
        
        <!-- Glow effect container -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent animate-float-slow"></div>
        </div>
        <!-- Enhanced close button with animation -->
        <div class="flex justify-between items-center p-4 sticky top-0 bg-gradient-to-b from-gray-900/90 to-transparent backdrop-blur-sm z-[70] border-b border-amber-500/10">
          <div class="flex items-center pl-2">
            <span class="text-amber-300 font-medium text-sm tracking-wider">MENU</span>
          </div>
          <button 
            @click="toggleMobileMenu" 
            class="relative group p-2 -mr-2 rounded-full hover:bg-amber-500/10 transition-all duration-300"
            aria-label="Close menu"
          >
            <div class="absolute inset-0 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20 transition-all duration-300 scale-0 group-hover:scale-100"></div>
            <i class="fas fa-times text-xl text-amber-300 group-hover:text-amber-200 relative z-10 transition-transform duration-300 group-hover:rotate-180"></i>
          </button>
        </div>

        <!-- Mobile Menu Content with enhanced styling -->
        <div class="p-4 space-y-6 relative">
          <!-- Logo with animation -->
          <div class="flex items-center px-4 mb-8 group relative">
            <div class="relative">
              <!-- Animated glow effect -->
              <div class="absolute -inset-1 bg-amber-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <!-- Pulsing ring -->
              <div class="absolute inset-0 rounded-full border-2 border-amber-400/30 animate-ping-slow opacity-0 group-hover:opacity-100"></div>
              <img 
                src="/images/logo.jpg" 
                alt="Rock Bridge Ministries" 
                class="relative w-16 h-16 rounded-full object-cover border-2 border-amber-300/80 shadow-lg transition-all duration-500 group-hover:border-amber-200 group-hover:scale-105 z-10"
              />
            </div>
            <div class="ml-4 transform transition-all duration-500 group-hover:translate-x-1">
              <h1 class="text-xl font-bold bg-gradient-to-r from-amber-100 to-amber-300 bg-clip-text text-transparent">R.O.C.K. Bridge</h1>
              <h2 class="text-lg font-semibold text-amber-300/90">Ministries</h2>
            </div>
            <!-- Subtle animated line -->
            <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
          </div>

          <!-- Navigation Links -->
          <nav class="space-y-3 relative z-10">
            <!-- Home with enhanced animation -->
            <router-link 
              to="/" 
              class="flex items-center text-amber-50 hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
              :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path === '/'}"
              @click="handleNavigation"
            >
              <!-- Animated background highlight -->
              <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <!-- Animated icon -->
              <div class="p-2 mr-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300">
                <i class="fas fa-home text-amber-400 group-hover:text-amber-300 transition-colors duration-300"></i>
              </div>
              <span class="font-medium text-amber-100 group-hover:text-white transition-colors duration-300">Home</span>
              <!-- Animated chevron -->
              <i class="fas fa-chevron-right ml-auto text-xs text-amber-400/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300"></i>
              <!-- Active indicator -->
              <div v-if="$route.path === '/'" class="absolute right-4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
            </router-link>
    
            <!-- About Section with enhanced animations -->
            <div class="space-y-1">
              <!-- About main link with animation -->
              <router-link 
                to="/about" 
                class="flex items-center hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
                :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path.startsWith('/about')}"
                @click="handleNavigation"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="p-2 mr-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300">
                  <i class="fas fa-info-circle text-amber-400 group-hover:text-amber-300 transition-colors duration-300"></i>
                </div>
                <span class="font-medium text-amber-100 group-hover:text-white transition-colors duration-300">About</span>
                <i class="fas fa-chevron-right ml-auto text-xs text-amber-400/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300"></i>
                <div v-if="$route.path.startsWith('/about')" class="absolute right-4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
              </router-link>

              <!-- About submenu toggle with animation -->
              <button 
                @click="mobileSubmenus.about = !mobileSubmenus.about"
                class="w-full flex items-center justify-between hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="flex items-center">
                  <div class="w-6 mr-3"></div>
                  <span class="text-sm font-medium text-amber-100 group-hover:text-white transition-colors duration-300">More About</span>
                </div>
                <i 
                  class="fas transition-transform duration-300 text-xs text-amber-400/60 group-hover:text-amber-300"
                  :class="mobileSubmenus.about ? 'fa-chevron-up rotate-180' : 'fa-chevron-down'"
                ></i>
              </button>
              
              <!-- About dropdown content with animation -->
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div 
                  v-if="mobileSubmenus.about" 
                  class="ml-6 pl-4 border-l-2 border-amber-800/30 space-y-1.5 mt-1.5"
                >
                  <router-link 
                    to="/about/board-and-staff" 
                    class="flex items-center text-amber-100 hover:bg-gradient-to-r from-amber-500/5 to-transparent px-3 py-2.5 rounded-lg transition-all duration-300 text-sm group relative overflow-hidden"
                    :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path === '/about/board-and-staff'}"
                    @click="handleNavigation"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <i class="fas fa-users mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <span class="relative z-10">Board and Staff</span>
                    <i class="fas fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-amber-400"></i>
                  </router-link>
                  <router-link 
                    to="/about/history" 
                    class="flex items-center text-amber-100 hover:bg-gradient-to-r from-amber-500/5 to-transparent px-3 py-2.5 rounded-lg transition-all duration-300 text-sm group relative overflow-hidden"
                    :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path === '/about/history'}"
                    @click="handleNavigation"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <i class="fas fa-history mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <span class="relative z-10">History</span>
                    <i class="fas fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-amber-400"></i>
                  </router-link>
                </div>
              </transition>
            </div>

            <!-- Our Ministries Section with enhanced animations -->
            <div class="space-y-1">
              <!-- Our Ministries main link with animation -->
              <router-link 
                to="/our-ministries" 
                class="flex items-center hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
                :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path.startsWith('/our-ministries')}"
                @click="handleNavigation"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="p-2 mr-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300">
                  <i class="fas fa-church text-amber-400 group-hover:text-amber-300 transition-colors duration-300"></i>
                </div>
                <span class="font-medium text-amber-100 group-hover:text-white transition-colors duration-300">Our Ministries</span>
                <i class="fas fa-chevron-right ml-auto text-xs text-amber-400/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300"></i>
                <div v-if="$route.path.startsWith('/our-ministries')" class="absolute right-4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
              </router-link>

              <!-- Our Ministries submenu toggle with animation -->
              <button 
                @click="mobileSubmenus.ministries = !mobileSubmenus.ministries"
                class="w-full flex items-center justify-between hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="flex items-center">
                  <div class="w-6 mr-3"></div>
                  <span class="text-sm font-medium text-amber-100 group-hover:text-white transition-colors duration-300">View Ministries</span>
                </div>
                <i 
                  class="fas transition-transform duration-300 text-xs text-amber-400/60 group-hover:text-amber-300"
                  :class="mobileSubmenus.ministries ? 'fa-chevron-up rotate-180' : 'fa-chevron-down'"
                ></i>
              </button>
              
              <!-- Our Ministries dropdown content with animation -->
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div 
                  v-if="mobileSubmenus.ministries" 
                  class="ml-6 pl-4 border-l-2 border-amber-800/30 space-y-1.5 mt-1.5"
                >
                  <router-link 
                    to="/our-ministries/education-scholarship" 
                    class="flex items-center text-amber-100 hover:bg-gradient-to-r from-amber-500/5 to-transparent px-3 py-2.5 rounded-lg transition-all duration-300 text-sm group relative overflow-hidden"
                    :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path === '/our-ministries/education-scholarship'}"
                    @click="handleNavigation"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <i class="fas fa-graduation-cap mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <span class="relative z-10">Education Scholarship</span>
                    <i class="fas fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-amber-400"></i>
                  </router-link>
                  <router-link 
                    to="/our-ministries/social-enterprises" 
                    class="flex items-center text-amber-100 hover:bg-gradient-to-r from-amber-500/5 to-transparent px-3 py-2.5 rounded-lg transition-all duration-300 text-sm group relative overflow-hidden"
                    :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path === '/our-ministries/social-enterprises'}"
                    @click="handleNavigation"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <i class="fas fa-building mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <span class="relative z-10">Social Enterprises</span>
                    <i class="fas fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-amber-400"></i>
                  </router-link>
                  <router-link 
                    to="/our-ministries/workplace-evangelism" 
                    class="flex items-center text-amber-100 hover:bg-gradient-to-r from-amber-500/5 to-transparent px-3 py-2.5 rounded-lg transition-all duration-300 text-sm group relative overflow-hidden"
                    :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path === '/our-ministries/workplace-evangelism'}"
                    @click="handleNavigation"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <i class="fas fa-briefcase mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <span class="relative z-10">Workplace Evangelism</span>
                    <i class="fas fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-amber-400"></i>
                  </router-link>
                </div>
              </transition>
            </div>
        
            <!-- Get Involved Section with enhanced animations -->
            <div class="space-y-1">
              <!-- Get Involved main link with animation -->
              <router-link 
                to="/get-involved" 
                class="flex items-center hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
                :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path.startsWith('/get-involved')}"
                @click="handleNavigation"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="p-2 mr-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300">
                  <i class="fas fa-hands-helping text-amber-400 group-hover:text-amber-300 transition-colors duration-300"></i>
                </div>
                <span class="font-medium text-amber-100 group-hover:text-white transition-colors duration-300">Get Involved</span>
                <i class="fas fa-chevron-right ml-auto text-xs text-amber-400/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300"></i>
                <div v-if="$route.path.startsWith('/get-involved')" class="absolute right-4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
              </router-link>

              <!-- Get Involved submenu toggle with animation -->
              <button 
                @click="mobileSubmenus.getInvolved = !mobileSubmenus.getInvolved"
                class="w-full flex items-center justify-between hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="flex items-center">
                  <div class="w-6 mr-3"></div>
                  <span class="text-sm font-medium text-amber-100 group-hover:text-white transition-colors duration-300">Ways to Help</span>
                </div>
                <i 
                  class="fas transition-transform duration-300 text-xs text-amber-400/60 group-hover:text-amber-300"
                  :class="mobileSubmenus.getInvolved ? 'fa-chevron-up rotate-180' : 'fa-chevron-down'"
                ></i>
              </button>
              
              <!-- Get Involved dropdown content with animation -->
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div 
                  v-if="mobileSubmenus.getInvolved" 
                  class="ml-6 pl-4 border-l-2 border-amber-800/30 space-y-1.5 mt-1.5"
                >
                  <router-link 
                    to="/get-involved/how-to-support" 
                    class="flex items-center text-amber-100 hover:bg-gradient-to-r from-amber-500/5 to-transparent px-3 py-2.5 rounded-lg transition-all duration-300 text-sm group relative overflow-hidden"
                    :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path === '/get-involved/how-to-support'}"
                    @click="handleNavigation"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <i class="fas fa-question-circle mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <span class="relative z-10">How to Support</span>
                    <i class="fas fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-amber-400"></i>
                  </router-link>
                  <router-link 
                    to="/get-involved/partner-with-us" 
                    class="flex items-center text-amber-100 hover:bg-gradient-to-r from-amber-500/5 to-transparent px-3 py-2.5 rounded-lg transition-all duration-300 text-sm group relative overflow-hidden"
                    :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path === '/get-involved/partner-with-us'}"
                    @click="handleNavigation"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <i class="fas fa-handshake mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <span class="relative z-10">Partner with Us</span>
                    <i class="fas fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-amber-400"></i>
                  </router-link>
                  <router-link 
                    to="/get-involved/fund-our-programs" 
                    class="flex items-center text-amber-100 hover:bg-gradient-to-r from-amber-500/5 to-transparent px-3 py-2.5 rounded-lg transition-all duration-300 text-sm group relative overflow-hidden"
                    :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path === '/get-involved/fund-our-programs'}"
                    @click="handleNavigation"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <i class="fas fa-donate mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <span class="relative z-10">Fund our Programs</span>
                    <i class="fas fa-chevron-right ml-auto text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-amber-400"></i>
                  </router-link>
                </div>
              </transition>
            </div>

            <!-- Media & Resources with animation -->
            <router-link 
              to="/media-and-resources" 
              class="flex items-center hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
              :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path.startsWith('/media-and-resources')}"
              @click="handleNavigation"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="p-2 mr-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300">
                <i class="fas fa-photo-video text-amber-400 group-hover:text-amber-300 transition-colors duration-300"></i>
              </div>
              <span class="font-medium text-amber-100 group-hover:text-white transition-colors duration-300">Media and Resources</span>
              <i class="fas fa-chevron-right ml-auto text-xs text-amber-400/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300"></i>
              <div v-if="$route.path.startsWith('/media-and-resources')" class="absolute right-4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
            </router-link>

            <!-- Contact with animation -->
            <router-link 
              to="/contact" 
              class="flex items-center hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden"
              :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': $route.path === '/contact'}"
              @click="handleNavigation"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="p-2 mr-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300">
                <i class="fas fa-envelope text-amber-400 group-hover:text-amber-300 transition-colors duration-300"></i>
              </div>
              <span class="font-medium text-amber-100 group-hover:text-white transition-colors duration-300">Contact</span>
              <i class="fas fa-chevron-right ml-auto text-xs text-amber-400/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300"></i>
              <div v-if="$route.path === '/contact'" class="absolute right-4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
            </router-link>
          </nav>
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