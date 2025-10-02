<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl z-20 overflow-hidden">
      <!-- Decorative wave at the bottom -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg class="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                class="fill-current text-amber-600 opacity-20"></path>
        </svg>
      </div>
      
      <div class="relative z-10 h-full flex flex-col">
        <div class="flex items-center justify-center h-20 px-6 border-b border-gray-700">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg mr-3">
            <i class="fas fa-shield-alt text-white text-lg"></i>
          </div>
          <h1 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white">
            Admin Panel
          </h1>
        </div>
        
        <nav class="flex-1 px-4 py-6 overflow-y-auto">
          <router-link 
            v-for="item in navItems" 
            :key="item.to"
            :to="item.to"
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
      </div>
    </div>

    <!-- Main Content -->
    <div class="pl-64">
      <!-- Top Navigation -->
      <header class="bg-white shadow-sm border-b border-gray-200">
        <div class="flex items-center justify-between h-16 px-6">
          <div class="relative max-w-md w-full">
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
              <span class="absolute top-1 right-1 h-2.5 w-2.5 bg-amber-500 rounded-full border-2 border-white"></span>
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
      <main class="p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const user = {
  name: 'Admin',
  email: 'admin@rockbridge.org'
};

const userInitials = computed(() => 'AD');
const userName = computed(() => 'Admin');

const navItems = [
  { to: '/admin/dashboard', name: 'Dashboard', icon: 'fas fa-tachometer-alt' },
  { to: '/admin/users', name: 'Users', icon: 'fas fa-users' },
  { to: '/admin/posts', name: 'Posts', icon: 'fas fa-newspaper' },
  { to: '/admin/settings', name: 'Settings', icon: 'fas fa-cog' },
];
</script>
