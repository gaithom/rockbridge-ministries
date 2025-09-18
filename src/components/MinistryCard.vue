<template>
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group hover:scale-[1.02]">
    <!-- Image -->
    <div class="h-48 overflow-hidden">
      <img
        :src="ministry.image"
        :alt="ministry.title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
        {{ ministry.title }}
      </h3>
      
      <div class="space-y-3 mb-4 flex-grow">
        <p
          v-for="(paragraph, index) in ministry.description"
          :key="index"
          class="text-sm text-gray-600 leading-relaxed"
        >
          {{ paragraph }}
        </p>
      </div>

      <!-- Quote (if exists) -->
      <blockquote
        v-if="ministry.quote"
        class="italic border-l-4 border-amber-600 pl-3 text-sm text-gray-500 mb-4 bg-amber-50 py-2 rounded-r"
      >
        "{{ ministry.quote.text }}"
        <footer class="font-medium mt-1">- {{ ministry.quote.author }}</footer>
      </blockquote>

      <!-- Action Button -->
      <div class="mt-auto pt-4">
        <button
          @click="$emit('donate', ministry.title)"
          class="group/btn relative inline-flex items-center justify-center w-full px-6 py-3 bg-gray-700 text-white rounded-full font-semibold text-sm shadow-md hover:bg-amber-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          <span class="mr-2">DONATE NOW</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
        <p class="text-xs text-gray-500 text-center mt-2">
          Support {{ ministry.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ministry: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.title && value.description && value.image
    }
  }
})

defineEmits(['donate'])
</script>