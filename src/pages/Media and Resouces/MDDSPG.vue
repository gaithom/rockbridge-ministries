<template>
  <div class="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-12">
    <!-- Heading -->
    <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
      Our Memories in Pictures
    </h2>
    <div class="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mb-10"></div>

    <!-- Slideshow Container -->
    <div class="relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg">
      <!-- Images -->
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="w-full flex-shrink-0"
        >
          <img
            :src="image"
            alt="Slideshow Image"
              class="w-full h-96 object-cover"
          />
        </div>
      </div>

      <!-- Previous Button -->
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
      >
        ‹
      </button>

      <!-- Next Button -->
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
      >
        ›
      </button>

      <!-- Dots -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          v-for="(image, index) in images"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'w-3 h-3 rounded-full',
            currentIndex === index ? 'bg-amber-500' : 'bg-gray-300'
          ]"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Array of images (replace with your actual paths)
const images = [
  '/images/garduation/WhatsApp-Image-2024-01-20-at-10.34.56-1.jpeg',
  '/images/garduation/WhatsApp-Image-2024-01-20-at-10.34.55-10.jpeg',
  '/images/garduation/WhatsApp-Image-2024-01-20-at-10.34.55-9.jpeg',
  '/images/garduation/WhatsApp-Image-2024-01-20-at-10.34.55-8.jpeg',
  '/images/garduation/WhatsApp-Image-2024-01-20-at-13.17.22-e1705746040834.jpeg',
  '/images/garduation/WhatsApp-Image-2024-01-19-at-14.21.27-1.jpeg',
  '/images/garduation/WhatsApp-Image-2024-01-19-at-14.21.27.jpeg',
  '/images/garduation/WhatsApp-Image-2024-01-19-at-14.21.28-1.jpeg',
  '/images/garduation/WhatsApp-Image-2024-01-19-at-14.21.28.jpeg',
  '/images/garduation/WhatsApp-Image-2024-01-19-at-14.21.29.jpeg'
];

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>
