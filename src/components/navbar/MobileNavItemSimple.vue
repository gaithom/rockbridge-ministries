<template>
  <div>
    <!-- Main nav item -->
    <router-link 
      v-if="!item.hasDropdown"
      :to="item.to" 
      class="flex items-center hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden w-full text-left"
      :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5 text-amber-100': isActive}"
      @click="handleClick"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="p-2 mr-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300 border border-transparent group-hover:border-amber-400/20">
        <i :class="['fas', `fa-${item.icon}`, 'text-amber-400 group-hover:text-amber-300 transition-colors duration-300']"></i>
      </div>
      <span class="font-medium text-amber-100 group-hover:text-white transition-colors duration-300">
        {{ item.text }}
      </span>
      <div v-if="isActive" class="absolute right-4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
    </router-link>

    <!-- Dropdown parent -->
    <div v-else class="relative">
      <!-- Parent link container -->
      <div class="flex items-center">
        <!-- Parent link that navigates -->
        <a
          :href="item.to"
          class="flex-1 flex items-center hover:bg-gradient-to-r from-amber-500/5 to-transparent px-4 py-3.5 rounded-xl transition-all duration-300 group text-left"
          :class="{'bg-gradient-to-r from-amber-500/10 to-amber-500/5': isActive}"
          @click.prevent="handleParentClick"
        >
          <div class="p-2 mr-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-400/20 transition-colors duration-300 border border-transparent group-hover:border-amber-400/20">
            <i :class="['fas', `fa-${item.icon}`, 'text-amber-400 group-hover:text-amber-300 transition-colors duration-300']"></i>
          </div>
          <span class="font-medium text-amber-100 group-hover:text-white transition-colors duration-300">
            {{ item.text }}
          </span>
        </a>
        
        <!-- Dropdown toggle button -->
        <button 
          class="p-2 text-amber-400/80 hover:text-amber-300 transition-colors duration-200 focus:outline-none"
          @click.stop="toggleDropdown"
          aria-label="Toggle dropdown menu"
        >
          <i 
            class="fas fa-chevron-down text-xs transition-transform duration-200"
            :class="{'transform rotate-180': isOpen}"
          ></i>
        </button>
      </div>
      
      <!-- Dropdown menu -->
      <transition
        enter-active-class="transition-all duration-200 ease-out"
        leave-active-class="transition-all duration-150 ease-in"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="isOpen" class="ml-8 mt-1 space-y-1 overflow-hidden">
          <a
            v-for="(subItem, subIndex) in item.dropdownItems"
            :key="subIndex"
            :href="subItem.to"
            class="flex items-center px-4 py-2.5 text-sm text-amber-100/90 hover:text-white hover:bg-amber-500/10 rounded-lg transition-colors duration-200 group cursor-pointer"
            @click.prevent="navigateTo(subItem.to)"
          >
            <i :class="['fas', `fa-${subItem.icon}`, 'mr-3 text-amber-400/80 group-hover:text-amber-300 w-4 text-center']"></i>
            {{ subItem.text }}
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isOpen = ref(false);

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['navigate']);

const handleClick = () => {
  emit('navigate');
};

const toggleDropdown = (event) => {
  event.stopPropagation();
  isOpen.value = !isOpen.value;
};

const handleParentClick = (event) => {
  // If dropdown is closed, navigate to the parent link
  if (!isOpen.value) {
    emit('navigate');
    router.push(item.to);
  } else {
    // If dropdown is open, just close it
    isOpen.value = false;
  }
  event.preventDefault();
};

// Close dropdown when route changes
watch(() => route.path, () => {
  isOpen.value = false;
});

// Handle navigation for dropdown items
const navigateTo = (path) => {
  // Close the mobile menu
  emit('navigate');
  // Navigate to the selected route
  router.push(path);
  // Close the dropdown
  isOpen.value = false;
};
</script>
