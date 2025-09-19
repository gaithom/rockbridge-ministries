<template>
  <div class="lg:hidden z-50">
    <button 
      @click="$emit('toggle')" 
      class="relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none group"
      :aria-expanded="isOpen"
      aria-label="Toggle navigation menu"
    >
      <span 
        :class="[
          'block w-6 h-0.5 bg-amber-300 rounded-full transition-all duration-300',
          isOpen ? 'rotate-45 translate-y-1.5 bg-amber-200' : 'mb-1.5 bg-amber-300 group-hover:bg-amber-200'
        ]"
      ></span>
      <span 
        :class="[
          'block w-6 h-0.5 bg-amber-300 rounded-full transition-all duration-300',
          isOpen ? 'opacity-0' : 'opacity-100 mb-1.5 bg-amber-300 group-hover:bg-amber-200'
        ]"
      ></span>
      <span 
        :class="[
          'block w-6 h-0.5 bg-amber-300 rounded-full transition-all duration-300',
          isOpen ? '-rotate-45 -translate-y-1.5 bg-amber-200' : 'bg-amber-300 group-hover:bg-amber-200'
        ]"
      ></span>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

defineEmits(['toggle']);
</script>
