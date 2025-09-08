<template>
  <nav 
    :class="['fixed w-full z-50 transition-all duration-300', 
            scrolledUp ? 'bg-opacity-100 shadow-lg' : 'bg-white/10 shadow-md']"
    @mouseover="makeOpaque"
    @mouseleave="restoreTransparency"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      
      <!-- Logo and Brand -->
      <div class="flex items-center space-x-3">
        <router-link to="/" class="flex items-center space-x-3">
          <div class="relative">
            <img src="/images/logo.jpg" alt="Rock Bridge Ministries" class="w-12 h-12 rounded-full object-cover border-2 border-orange-500" />
          </div>
          
        </router-link>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-2">
        
        <!-- Home -->
        <router-link 
          to="/" 
          class="flex items-center text-slate-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-300"
          active-class="bg-white/10"
        >
          <i class="fas fa-home mr-2 text-slate-500"></i> 
          <span class="font-medium">Home</span>
        </router-link>
        
        <!-- About Dropdown -->
       <!-- About Dropdown -->
<div class="relative group">
  <button class="flex items-center text-slate-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200">
    <i class="fas fa-info-circle mr-2 text-slate-500"></i> 
    <span class="font-medium">About</span>
    <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-200"></i>
  </button>

  <div class="absolute top-full left-0 hidden group-hover:block bg-orange-200 rounded-lg shadow-xl mt-2 py-2 w-56 border border-orange-200">
    <!-- Board and Staff -->
    <router-link 
      to="/about/board-staff" 
      class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
    >
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
          <button class="flex items-center text-slate-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200">
            <i class="fas fa-church mr-2 text-slate-500"></i> 
            <span class="font-medium">Our Ministries</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-200"></i>
          </button>
          <div class="absolute top-full left-0 hidden group-hover:block bg-orange-200 rounded-lg shadow-xl mt-2 py-2 w-56 border border-orange-200">
            <router-link 
              to="/ministries/children" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-child mr-2 text-orange-400"></i>Children's Ministry
            </router-link>
            <router-link 
              to="/ministries/youth" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-graduation-cap mr-2 text-orange-400"></i>Youth Ministry
            </router-link>
            <router-link 
              to="/ministries/community" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-heart mr-2 text-orange-400"></i>Community Outreach
            </router-link>
          </div>
        </div>
        
        <!-- Get Involved Dropdown -->
        <div class="relative group">
          <button class="flex items-center text-slate-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200">
            <i class="fas fa-hands-helping mr-2 text-slate-500"></i> 
            <span class="font-medium">Get Involved</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-200"></i>
          </button>
          <div class="absolute top-full left-0 hidden group-hover:block bg-orange-200 rounded-lg shadow-xl mt-2 py-2 w-56 border border-orange-200">
            <router-link 
              to="/get-involved/volunteer" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-hand-holding-heart mr-2 text-orange-400"></i>Volunteer
            </router-link>
            <router-link 
              to="/get-involved/donate" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-donate mr-2 text-orange-400"></i>Donate
            </router-link>
            <router-link 
              to="/get-involved/partner" 
              class="block px-4 py-3 text-slate-500 hover:bg-white hover:text-slate-500 transition-all duration-200"
            >
              <i class="fas fa-handshake mr-2 text-orange-400"></i>Partnership
            </router-link>
          </div>
        </div>
        
        <!-- Media & Resources -->
        <router-link 
          to="/media" 
          class="flex items-center text-slate-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200"
        >
          <i class="fas fa-photo-video mr-2 text-slate-500"></i> 
          <span class="font-medium">Media & Resources</span>
        </router-link>
        
        <!-- Contact -->
        <router-link 
          to="/contact" 
          class="flex items-center text-slate-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200"
        >
          <i class="fas fa-envelope mr-2 text-slate-500"></i> 
          <span class="font-medium">Contact</span>
        </router-link>
        
        <!-- Visit Us Button -->
        <router-link 
          to="/visit" 
          class="ml-4 bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
        >
          <i class="fas fa-map-marker-alt mr-2"></i>
          Visit Us
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
              to="/about/board-staff" 
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
            <router-link 
              to="/about/mission-vision" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Mission & Vision
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
              to="/ministries/children" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Children's Ministry
            </router-link>
            <router-link 
              to="/ministries/youth" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Youth Ministry
            </router-link>
            <router-link 
              to="/ministries/community" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Community Outreach
            </router-link>
          </div>
        </div>
        
        <!-- Mobile Get Involved Section -->
        <div class="space-y-1">
          <div class="flex items-center text-slate-500 px-4 py-3 font-medium">
            <i class="fas fa-hands-helping mr-3 text-slate-500"></i> Get Involved
          </div>
          <div class="ml-6 space-y-1">
            <router-link 
              to="/get-involved/volunteer" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Volunteer
            </router-link>
            <router-link 
              to="/get-involved/donate" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Donate
            </router-link>
            <router-link 
              to="/get-involved/partner" 
              class="block text-gray-300 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              @click="closeMobileMenu"
            >
              Partnership
            </router-link>
          </div>
        </div>
        
        <!-- Mobile Media & Resources -->
        <router-link 
          to="/media" 
          class="flex items-center text-slate-500 hover:bg-orange-500 px-4 py-3 rounded-lg transition-all duration-200"
          @click="closeMobileMenu"
        >
          <i class="fas fa-photo-video mr-3 text-orange-500"></i> Media & Resources
        </router-link>
        
        <!-- Mobile Contact -->
        <router-link 
          to="/contact" 
          class="flex items-center text-slate-500 hover:bg-orange-500 px-4 py-3 rounded-lg transition-all duration-200"
          @click="closeMobileMenu"
        >
          <i class="fas fa-envelope mr-3 text-slate-500"></i> Contact
        </router-link>
        
        <!-- Mobile Visit Us -->
        <router-link 
          to="/visit" 
          class="flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-slate-500 font-bold py-4 mx-4 mt-4 rounded-lg shadow-lg"
          @click="closeMobileMenu"
        >
          <i class="fas fa-map-marker-alt mr-2"></i> Visit Us
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