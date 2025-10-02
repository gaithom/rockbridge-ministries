<template>
  <div class="bg-white rounded-lg shadow p-6">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium text-gray-500">{{ title }}</p>
        <div class="flex items-baseline mt-1">
          <span class="text-2xl font-semibold text-gray-900">{{ value }}</span>
          <span 
            class="ml-2 text-sm font-medium"
            :class="change.startsWith('+') ? 'text-green-600' : 'text-red-600'"
          >
            {{ change }}
          </span>
        </div>
      </div>
      <div 
        class="p-3 rounded-full"
        :class="iconBg"
      >
        <i 
          :class="['fas', 'fa-' + icon, 'text-lg', iconColor]"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  change: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  iconBg: {
    type: String,
    default: 'bg-gray-100'
  },
  iconColor: {
    type: String,
    default: 'text-gray-600'
  }
});
</script>
