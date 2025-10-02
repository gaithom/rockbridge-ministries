<template>
  <div>
    <div class="flex justify-between text-sm mb-1">
      <span class="font-medium text-gray-700">{{ project.name }}</span>
      <span class="text-gray-500">{{ project.progress }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div 
        class="h-2 rounded-full" 
        :class="project.color"
        :style="{ width: project.progress + '%' }"
      ></div>
    </div>
    <div class="flex justify-between mt-2 text-xs text-gray-500">
      <span>{{ project.members }} members</span>
      <span>Due in 5 days</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
    validator: (value) => {
      return [
        'name',
        'progress',
        'color',
        'members'
      ].every(key => key in value);
    }
  }
});
</script>
