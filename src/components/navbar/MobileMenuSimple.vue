<template>
  <!-- Mobile Menu Overlay -->
  <transition v-bind="animationClasses">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-40 lg:hidden overflow-hidden"
      @click.self="$emit('close')"
    >
      <!-- Background elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-gray-900/90 to-amber-800/30 animate-gradient-xy"></div>
      
      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden">
        <div 
          v-for="i in 15" 
          :key="`particle-${i}`" 
          class="absolute rounded-full bg-amber-400/20 pointer-events-none"
          :class="`w-${Math.floor(Math.random() * 3) + 1} h-${Math.floor(Math.random() * 3) + 1}`"
          :style="getParticleStyle(i)"
        ></div>
      </div>
      
      <!-- Backdrop blur -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    </div>
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
      v-if="isOpen"
      class="fixed top-0 right-0 h-screen w-80 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-800/95 shadow-2xl z-[60] overflow-y-auto overflow-x-hidden"
      @click.stop
    >
      <!-- Menu content -->
      <div class="p-4 space-y-6 relative">
        <!-- Logo -->
        <div class="flex items-center px-4 mb-8 group relative">
          <div class="relative">
            <div class="absolute -inset-1 bg-amber-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
        </div>

        <!-- Navigation Links -->
        <nav class="space-y-3 relative z-10">
          <MobileNavItem 
            v-for="(item, index) in navItems" 
            :key="index"
            :item="item" 
            :is-active="isActive(item)"
            @navigate="handleNavigation"
          />
        </nav>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { navItems, animationClasses } from './NavbarParts';
import MobileNavItem from './MobileNavItemSimple.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  navItems: {
    type: Array,
    required: true,
    default: () => []
  },
  isActive: {
    type: Function,
    required: true
  }
});

const emit = defineEmits(['close', 'navigate']);

const getParticleStyle = (index) => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animation: `float ${6 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`,
  transform: `scale(${0.5 + Math.random()})`
});

const handleNavigation = () => {
  emit('navigate');
  emit('close');
};
</script>
