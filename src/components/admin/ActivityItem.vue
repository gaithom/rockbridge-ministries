<template>
  <div class="flex items-start">
    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-medium">
      {{ activity.avatar }}
    </div>
    <div class="ml-4">
      <div class="flex items-center">
        <p class="text-sm font-medium text-gray-900">{{ activity.user }}</p>
        <span class="mx-1 text-gray-500">•</span>
        <p class="text-sm text-gray-500">{{ activity.time }}</p>
      </div>
      <p class="text-sm text-gray-600">
        <span class="font-medium">{{ activity.action }}</span> {{ activity.target }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  activity: {
    type: Object,
    required: true,
    validator: (value) => {
      return [
        'id',
        'user',
        'action',
        'target',
        'time',
        'avatar'
      ].every(key => key in value);
    }
  }
});
</script>
