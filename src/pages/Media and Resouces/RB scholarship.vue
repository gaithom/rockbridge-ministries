<template>
  <div class="pt-32 px-4">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-12">RB Scholarship Gallery</h1>
    <div class="relative max-w-4xl mx-auto" v-if="images.length > 0">
      <!-- Image Display -->
      <div class="overflow-hidden rounded-lg shadow-lg">
        <img :src="currentImage" alt="Scholarship Image" class="w-full h-auto object-cover transition-transform duration-500 ease-in-out" />
      </div>

      <!-- Navigation Buttons -->
      <button @click="prevImage" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none ml-4">
        &#10094;
      </button>
      <button @click="nextImage" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none mr-4">
        &#10095;
      </button>
    </div>
    <div v-else class="text-center text-gray-500">
      <p>No images found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const images = [
  '/images/rbm1.jpeg',
  '/images/rbm2.jpeg',
  '/images/rbm4.jpeg',
  '/images/rbm5.jpeg',
  '/images/rbm6.jpeg',
  '/images/rbm7.jpeg'
];

const currentIndex = ref(0);

const currentImage = computed(() => {
  return images[currentIndex.value];
});

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
</script>

<style scoped>
/* You can add custom styles here if needed, but Tailwind CSS is used for basic styling. */
</style>