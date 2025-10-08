<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Mobile menu overlay -->
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
      @click="closeMobileMenu"
    ></div>

    <!-- Sidebar -->
    <div 
      class="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl z-40 overflow-hidden transform transition-transform duration-300 ease-in-out lg:translate-x-0"
      :class="{ '-translate-x-full': !isMobileMenuOpen && isMobile, 'translate-x-0': isMobileMenuOpen || !isMobile }"
    >
      <!-- Decorative wave at the bottom -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg class="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                class="fill-current text-amber-600 opacity-20"></path>
        </svg>
      </div>
      
      <div class="relative z-10 h-full flex flex-col">
        <div class="flex items-center justify-between h-20 px-6 border-b border-gray-700">
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg mr-3">
              <i class="fas fa-shield-alt text-white text-lg"></i>
            </div>
            <h1 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white">
              Admin Panel
            </h1>
          </div>
          <!-- Mobile close button -->
          <button 
            @click="closeMobileMenu"
            class="lg:hidden p-2 rounded-md text-amber-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
          >
            <i class="fas fa-times text-lg"></i>
          </button>
        </div>
        
        <nav class="flex-1 px-4 py-6 overflow-y-auto">
          <router-link 
            v-for="item in navItems" 
            :key="item.to"
            :to="item.to"
            @click="closeMobileMenu"
            class="flex items-center px-4 py-3 mb-2 text-amber-100/90 rounded-lg transition-all duration-200 group relative overflow-hidden"
            :class="{ 'bg-amber-600/30 text-white': $route.path.startsWith(item.to) }"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <i :class="['mr-3 w-5 text-center', item.icon, $route.path.startsWith(item.to) ? 'text-amber-400' : 'text-amber-400/70']"></i>
            <span class="relative z-10">{{ item.name }}</span>
            <span v-if="$route.path.startsWith(item.to)" class="absolute right-4 w-1.5 h-6 bg-amber-400 rounded-full"></span>
          </router-link>
        </nav>
        
        <!-- User info at bottom -->
        <div class="p-4 border-t border-gray-700">
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-semibold shadow-md">
              {{ userInitials }}
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white">{{ userName }}</p>
              <p class="text-xs text-amber-200/70">Administrator</p>
            </div>
          </div>
        </div>
        
        
        <!-- Footer -->
        <footer class="p-4 mt-auto border-t border-gray-700">
          <p class="text-xs text-center text-gray-400">&copy; 2024 Rockbridge Ministries</p>
        </footer>
      </div>
    </div>

    <!-- Mobile Mini Sidebar (visible only on mobile) -->
    <div class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30">
      <div class="flex items-center justify-around py-2">
        <router-link 
          to="/admin"
          class="flex flex-col items-center justify-center p-3 min-w-0 flex-1 text-gray-600 hover:text-amber-600 transition-colors duration-200"
          :class="{ 'text-amber-600': $route.path === '/admin' }"
        >
          <i class="fas fa-tachometer-alt text-lg mb-1"></i>
          <span class="text-xs font-medium">Dashboard</span>
        </router-link>
        
        <router-link 
          to="/admin/media"
          class="flex flex-col items-center justify-center p-3 min-w-0 flex-1 text-gray-600 hover:text-amber-600 transition-colors duration-200"
          :class="{ 'text-amber-600': $route.path.startsWith('/admin/media') }"
        >
          <i class="fas fa-photo-video text-lg mb-1"></i>
          <span class="text-xs font-medium">Media</span>
        </router-link>
        
        <router-link 
          to="/admin/notifications"
          class="flex flex-col items-center justify-center p-3 min-w-0 flex-1 text-gray-600 hover:text-amber-600 transition-colors duration-200 relative"
          :class="{ 'text-amber-600': $route.path.startsWith('/admin/notifications') }"
        >
          <i class="fas fa-bell text-lg mb-1"></i>
          <span class="text-xs font-medium">Notifications</span>
          <span v-if="unreadCount > 0" class="absolute top-2 right-1/2 transform translate-x-2 h-2 w-2 bg-amber-500 rounded-full"></span>
        </router-link>
        
        <router-link 
          to="/admin/settings"
          class="flex flex-col items-center justify-center p-3 min-w-0 flex-1 text-gray-600 hover:text-amber-600 transition-colors duration-200"
          :class="{ 'text-amber-600': $route.path.startsWith('/admin/settings') }"
        >
          <i class="fas fa-cog text-lg mb-1"></i>
          <span class="text-xs font-medium">Settings</span>
        </router-link>
      </div>
    </div>

    <!-- Main Content -->
    <div class="lg:pl-64 pb-20 lg:pb-0 flex flex-col min-h-screen">
      <!-- Top Navigation -->
      <header class="bg-white shadow-sm border-b border-gray-200">
        <div class="flex items-center justify-between h-16 px-4 sm:px-6">
          <!-- Mobile menu button -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
          >
            <i class="fas fa-bars text-lg"></i>
          </button>
          <div class="relative max-w-md w-full hidden sm:block">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i class="fas fa-search text-gray-400"></i>
            </div>
            <input 
              type="text" 
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all duration-200"
              placeholder="Search..."
            >
          </div>
          <div class="flex items-center space-x-4">
            <button class="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none transition-colors duration-200 relative">
              <i class="fas fa-bell text-lg"></i>
              <span v-if="unreadCount > 0" class="absolute top-1 right-1 h-2.5 w-2.5 bg-amber-500 rounded-full border-2 border-white"></span>
            </button>
            <div class="h-8 w-px bg-gray-200"></div>
            <div class="flex items-center">
              <div class="h-9 w-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-semibold shadow-sm">
                {{ userInitials }}
              </div>
              <div class="ml-3 hidden md:block">
                <p class="text-sm font-medium text-gray-700">{{ userName }}</p>
                <p class="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-4 sm:p-6">
        <router-view />
      </main>

      <!-- Footer -->
      <Footer />
    </div>

    <!-- Notification Toast -->
    <NotificationToast />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '../components/Footer.vue';
import NotificationToast from '../components/admin/NotificationToast.vue';
import { getUnreadCount } from '../services/notificationService';

const route = useRoute();
const unreadCount = ref(0);

// Mobile menu state
const isMobileMenuOpen = ref(false);
const isMobile = ref(false);

// Check if device is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024;
  if (!isMobile.value) {
    isMobileMenuOpen.value = false;
  }
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Handle window resize
const handleResize = () => {
  checkMobile();
};

// Update unread count
const updateUnreadCount = () => {
  unreadCount.value = getUnreadCount();
};

// Listen for new notifications
const handleNewNotification = () => {
  updateUnreadCount();
};

onMounted(() => {
  checkMobile();
  updateUnreadCount();
  window.addEventListener('resize', handleResize);
  window.addEventListener('new-notification', handleNewNotification);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('new-notification', handleNewNotification);
});

const user = {
  name: 'Admin',
  email: 'admin@rockbridge.org'
};

const userInitials = computed(() => 'AD');
const userName = computed(() => 'Admin');

const navItems = [
  { to: '/admin', name: 'Dashboard', icon: 'fas fa-tachometer-alt' },
  { to: '/admin/media', name: 'Media Management', icon: 'fas fa-photo-video' },
  { to: '/admin/notifications', name: 'Notifications', icon: 'fas fa-bell' },
  { to: '/admin/settings', name: 'Settings', icon: 'fas fa-cog' },
];
</script>
