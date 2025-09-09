<template>
  <nav
    :class="['fixed w-full z-50 transition-all duration-300', 
            scrolledUp ? 'bg-opacity-100' : 'bg-amber-50/90 shadow-md']"
    @mouseover="makeOpaque"
    @mouseleave="restoreTransparency"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Logo and Brand -->
      <div class="flex items-center space-x-3">
        <router-link to="/" class="flex items-center space-x-3">
          <div class="relative">
            <img src="/images/logo.jpg" alt="Rock Bridge Ministries" class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
          </div>
          <div class="text-amber-500 hidden sm:block">
            <h1 class="text-2xl font-bold leading-tight">R.O.C.K. Bridge</h1>
            <h2 class="text-2xl font-bold leading-tight">Ministries</h2>
          </div>
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-2">

        <!-- Home -->
        <router-link
          to="/"
          class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-300"
          active-class="bg-white/10"
        >
          <i class="fas fa-home mr-2 text-slate-500"></i> 
          <span class="font-medium">Home</span>
        </router-link>

        <!-- About Dropdown -->
        <div class="relative group">
          <router-link to="/about" class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200">
            <i class="fas fa-info-circle mr-2 text-slate-500"></i> 
            <span class="font-medium">About</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-200"></i>
          </router-link>

          <div class="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-out bg-orange-200 rounded-lg shadow-xl mt-2 py-2 w-56 border border-orange-200 z-50">
           

      

            <!-- Board and Staff -->
            <router-link 
              to="/about/board-and-staff" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200">
              <i class="fas fa-users mr-2 text-orange-400"></i>Board and Staff
            </router-link>

            <!-- History -->
            <router-link 
              to="/about/history" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-history mr-2 text-orange-400"></i>History
            </router-link>
          </div>
        </div>
        
        <!-- Our Ministries Dropdown -->
        <div class="relative group">
          <router-link to="/our-ministries" class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200">
            <i class="fas fa-church mr-2 text-slate-500"></i> 
            <span class="font-medium">Our Ministries</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-200"></i>
          </router-link>
          <div class="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-out bg-orange-200 rounded-lg shadow-xl mt-2 py-2 w-56 border border-orange-200 z-50">
          
            <!-- Education Scholarship -->
            <router-link 
              to="/our-ministries/education-scholarship" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-graduation-cap mr-2 text-orange-400"></i>Education Scholarship
            </router-link>
            <!-- Social Enterprises -->
            <router-link 
              to="/our-ministries/social-enterprises" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-building mr-2 text-orange-400"></i>Social Enterprises
            </router-link>
            <!-- Workplace Evangelism -->
            <router-link 
              to="/our-ministries/workplace-evangelism" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-briefcase mr-2 text-orange-400"></i>Workplace Evangelism
            </router-link>
          </div>
        </div>
        
        <!-- Get Involved Dropdown -->
        <div class="relative group">
          <router-link to="/get-involved" class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200">
            <i class="fas fa-hands-helping mr-2 text-slate-500"></i> 
            <span class="font-medium">Get Involved</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-200"></i>
          </router-link>
          <div class="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-out bg-orange-200 rounded-lg shadow-xl mt-2 py-2 w-56 border border-orange-200 z-50">
            <!-- How to Support -->
            <router-link 
              to="/get-involved/how-to-support" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-question-circle mr-2 text-orange-400"></i>How to Support
            </router-link>
            <!-- Partner with Us -->
            <router-link 
              to="/get-involved/partner-with-us" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-handshake mr-2 text-orange-400"></i>Partner with Us
            </router-link>
            <!-- Fund our Programs -->
            <router-link 
              to="/get-involved/fund-our-programs" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-donate mr-2 text-orange-400"></i>Fund our Programs
            </router-link>
          </div>
        </div>
        
        <!-- Media and Resources -->
        <router-link 
          to="/media-and-resources" 
          class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200"
        >
          <i class="fas fa-photo-video mr-2 text-slate-500"></i> 
          <span class="font-medium">Media and Resources</span>
        </router-link>

        <!-- Contact -->
        <router-link 
          to="/contact" 
          class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200"
        >
          <i class="fas fa-envelope mr-2 text-slate-500"></i> 
          <span class="font-medium">Contact</span>
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
        <button 
          @click="toggleMobileMenu" 
          class="text-white focus:outline-none hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
        >
          <i :class="['fas text-2xl transition-all duration-300', mobileMenuOpen ? 'fa-times' : 'fa-bars']"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="lg:hidden bg-gray-900 border-t border-gray-700 shadow-xl"
    >
      <div class="px-6 py-4 space-y-2">
        
        <!-- Mobile Home -->
        <router-link 
          to="/" 
          class="flex items-center text-slate-500 hover:bg-slate-500/10 px-4 py-3 rounded-lg transition-all duration-200"
          @click="closeMobileMenu"
        >
          <i class="fas fa-home mr-3 text-slate-500"></i> Home
        </router-link>
        
        <!-- Mobile About Section -->
        <div class="space-y-1">
          <div class="flex items-center text-slate-500 px-4 py-3 font-medium">
            <i class="fas fa-info-circle mr-3 text-slate-500"></i> About
          </div>
          <div class="ml-6 space-y-1">
            <router-link 
              to="/about" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              About
            </router-link>
            <router-link 
              to="/about/board-and-staff" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Board and Staff
            </router-link>
            <router-link 
              to="/about/history" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              History
            </router-link>
          </div>
        </div>
        
        <!-- Mobile Ministries Section -->
        <div class="space-y-1">
          <div class="flex items-center text-slate-500 px-4 py-3 font-medium">
            <i class="fas fa-church mr-3 text-slate-500"></i> Our Ministries
          </div>
          <div class="ml-6 space-y-1">
            <router-link 
              to="/our-ministries" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Our Ministries
            </router-link>
            <router-link 
              to="/our-ministries/education-scholarship" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Education Scholarship
            </router-link>
            <router-link 
              to="/our-ministries/social-enterprises" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Social Enterprises
            </router-link>
            <router-link 
              to="/our-ministries/workplace-evangelism" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Workplace Evangelism
            </router-link>
          </div>
        </div>
        
        <!-- Mobile Get Involved Section -->
        <div class="space-y-1">
          <router-link 
            to="/get-involved" 
            class="flex items-center text-slate-500 px-4 py-3 font-medium hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-200"
            @click="closeMobileMenu"
          >
            <i class="fas fa-hands-helping mr-3 text-slate-500"></i> Get Involved
          </router-link>
          <div class="ml-6 space-y-1">
            <router-link 
              to="/get-involved/how-to-support" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              How to Support
            </router-link>
            <router-link 
              to="/get-involved/partner-with-us" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Partner with Us
            </router-link>
            <router-link 
              to="/get-involved/fund-our-programs" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Fund our Programs
            </router-link>
          </div>
        </div>
        
        <!-- Mobile Media and Resources -->
        <router-link 
          to="/media-and-resources" 
          class="flex items-center text-slate-500 hover:bg-orange-500 px-4 py-3 rounded-lg transition-all duration-200"
          @click="closeMobileMenu"
        >
          <i class="fas fa-photo-video mr-3 text-orange-500"></i> Media and Resources
        </router-link>
        
        <!-- Mobile Contact -->
        <router-link 
          to="/contact" 
          class="flex items-center text-slate-500 hover:bg-orange-500 px-4 py-3 rounded-lg transition-all duration-200"
          @click="closeMobileMenu"
        >
          <i class="fas fa-envelope mr-3 text-slate-500"></i> Contact
        </router-link>
        
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Whether the navbar should appear transparent (when at the very top and not hovered)
const scrolledUp = ref(true)

// Track hover to force opacity while hovered
const isHovered = ref(false)

// Mobile menu toggle
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const makeOpaque = () => {
  isHovered.value = true
  scrolledUp.value = false
}

const restoreTransparency = () => {
  isHovered.value = false
  // Transparent only when scrolled to very top
  scrolledUp.value = window.scrollY === 0
}

const handleScroll = () => {
  // If not hovered, reflect scroll position; if hovered we keep it opaque
  if (!isHovered.value) {
    scrolledUp.value = window.scrollY === 0
  }
}

onMounted(() => {
  // Initialize state on mount and subscribe to scroll
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>