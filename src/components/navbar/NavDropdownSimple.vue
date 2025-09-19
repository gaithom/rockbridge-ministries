<template>
  <div class="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-out bg-gray-900 rounded-lg shadow-xl mt-2 py-2 w-56 border border-gray-800 z-50">
    <div v-for="(item, index) in items" :key="index" class="relative group/dd-item">
      <router-link 
        :to="item.to" 
        class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-white transition-all duration-200 group/item"
        :class="{ '!text-amber-300': $route.path === item.to }"
        @click="$emit('navigate')"
      >
        <span class="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-400 scale-y-0 group-hover/dd-item:scale-y-100 transition-transform duration-300 origin-top" :class="{ 'scale-y-100': $route.path === item.to }"></span>
        <i :class="['fas', `fa-${item.icon}`, 'mr-2 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-200']"></i>
        {{ item.text }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => {
      return items.every(item => 
        typeof item === 'object' && 
        'to' in item && 
        'icon' in item && 
        'text' in item
      );
    }
  }
});

defineEmits(['navigate']);
</script>
