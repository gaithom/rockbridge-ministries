<template>
  <div class="relative group" v-motion-slide-visible-once-bottom :delay="delay">
    <router-link
      :to="to"
      :class="['flex items-center text-amber-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all duration-300 group/nav-item relative overflow-hidden', 
             { '!text-amber-300': isActive }]"
      @click="$emit('navigate')"
    >
      <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" :class="{ 'scale-x-100': isActive }"></span>
      <i :class="['fas', `fa-${icon}`, 'mr-2 text-amber-400 group-hover/nav-item:text-amber-300 transition-all duration-300 group-hover/nav-item:scale-110']"></i> 
      <span class="font-medium relative group-hover/nav-item:text-white transition-all duration-300">
        {{ text }}
      </span>
      <i v-if="hasDropdown" class="fas fa-chevron-down ml-2 text-xs text-amber-400/80 group-hover:rotate-180 transition-all duration-300"></i>
    </router-link>
    
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  hasDropdown: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  },
  delay: {
    type: Number,
    default: 0
  }
});

defineEmits(['navigate']);
</script>
