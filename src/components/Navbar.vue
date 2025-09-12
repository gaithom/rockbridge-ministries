<template>
  <!-- Top navigation bar: fixed, with dynamic background based on scroll/hover -->
  <nav
    :class="['fixed w-full z-50 transition-all duration-300', 
            (scrolledUp && !isBoardAndStaffPage) ? 'bg-opacity-10' : 'bg-gray-900 shadow-md']"
    @mouseleave="restoreTransparency"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Logo and Brand linking back to home -->
      <div class="flex items-center space-x-3">
        <router-link to="/" class="flex items-center space-x-3">
          <div class="relative">
            <img src="/images/logo.jpg" alt="Rock Bridge Ministries" class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
          </div>
          <div class="text-white hidden sm:block">
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
          active-class="underline decoration-amber-500 decoration-2 underline-offset-8"
        >
          <i class="fas fa-home mr-2 text-slate-500"></i> 
          <span class="font-medium">Home</span>
        </router-link>

        <!-- About Dropdown -->
        <div class="relative group">
          <router-link to="/about" class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200" active-class="underline decoration-amber-500 decoration-2 underline-offset-8">
            <i class="fas fa-info-circle mr-2 text-slate-500"></i> 
            <span class="font-medium">About</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-200"></i>
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
        <div class="relative group">
          <router-link to="/our-ministries" class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200" active-class="underline decoration-amber-500 decoration-2 underline-offset-8">
            <i class="fas fa-church mr-2 text-slate-500"></i> 
            <span class="font-medium">Our Ministries</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-200"></i>
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
        <div class="relative group">
          <router-link to="/get-involved" class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200" active-class="underline decoration-amber-500 decoration-2 underline-offset-8">
            <i class="fas fa-hands-helping mr-2 text-slate-500"></i> 
            <span class="font-medium">Get Involved</span>
            <i class="fas fa-chevron-down ml-2 text-xs group-hover:rotate-180 transition-transform duration-200"></i>
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
          class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200"
          active-class="underline decoration-amber-500 decoration-2 underline-offset-8"
        >
          <i class="fas fa-photo-video mr-2 text-slate-500"></i> 
          <span class="font-medium">Media and Resources</span>
        </router-link>

        <!-- Contact -->
        <router-link 
          to="/contact" 
          class="flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-200"
          active-class="underline decoration-amber-500 decoration-2 underline-offset-8"
        >
          <i class="fas fa-envelope mr-2 text-slate-500"></i> 
          <span class="font-medium">Contact</span>
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
            class="block absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out"
            :class="{'rotate-45 translate-y-0': mobileMenuOpen, '-translate-y-2': !mobileMenuOpen}"
          ></span>
          <span 
            class="block absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out"
            :class="{'opacity-0': mobileMenuOpen, 'opacity-100': !mobileMenuOpen}"
          ></span>
          <span 
            class="block absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out"
            :class="{'-rotate-45 translate-y-0': mobileMenuOpen, 'translate-y-2': !mobileMenuOpen}"
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
        class="fixed inset-0 bg-black bg-opacity-75 z-40 lg:hidden"
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
        class="fixed top-0 right-0 h-full w-4/5 max-w-md bg-gray-900 shadow-2xl z-50 overflow-y-auto"
        @click.stop
      >
        <!-- Close button inside the menu -->
        <div class="flex justify-end p-4">
          <button 
            @click="toggleMobileMenu" 
            class="text-gray-400 hover:text-white focus:outline-none"
          >
            <i class="fas fa-times text-2xl"></i>
          </button>
        </div>

        <!-- Mobile Menu Items -->
        <div class="px-6 py-2 space-y-1">
        
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
    </transition>

</nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'

// Whether the navbar should appear transparent (true at very top and not hovered)
const route = useRoute()
const scrolledUp = ref(true)
const lastScrollY = ref(0)
const mobileMenuOpen = ref(false)
const isHovered = ref(false)

// Check if current route is the Board and Staff page
const isBoardAndStaffPage = computed(() => {
  return route.path.includes('board-and-staff')
})

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

// Close mobile menu (called on link click)
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  // Re-enable body scroll
  document.body.style.overflow = 'auto'
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

// Update scrolledUp based on current scroll (unless hovered)
const handleScroll = () => {
  // If not hovered, reflect scroll position; if hovered we keep it opaque
  if (!isHovered.value) {
    scrolledUp.value = window.scrollY === 0
  }
}

onMounted(() => {
  // Initialize state on mount and subscribe to scroll listener
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>