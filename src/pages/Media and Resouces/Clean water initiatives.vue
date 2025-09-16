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
  '/images/water/WhatsApp-Image-2023-08-14-at-16.14.52.jpeg',
  '/images/water/WhatsApp-Image-2023-08-14-at-16.14.51.jpeg',
  '/images/water/WhatsApp-Image-2023-07-07-at-08.59.22.jpeg',
  '/images/water/WhatsApp-Image-2023-07-07-at-08.59.22-1.jpeg',
  '/images/water/Screenshot-2023-03-26-095202.png',
  '/images/water/Screenshot-2023-03-26-095116.png',
  '/images/water/IMG_7556-scaled.jpg',
  '/images/water/IMG_7554-scaled.jpg',
  '/images/water/IMG_7550-scaled.jpg',
  '/images/water/IMG_7548-scaled.jpg',
  '/images/water/IMG_7529-scaled.jpg',
  '/images/water/IMG_0861.jpg',
  '/images/water/IMG_0860.jpg',
  '/images/water/IMG_0859.jpg',
  '/images/water/IMG_0852.jpg',
  '/images/water/IMG_0851.jpg',
  '/images/water/IMG_0822-scaled.jpg',
  '/images/water/90905764_10158656878760676_1013601883740176384_n.jpg',
  '/images/water/30726039_10156581840405676_4692970495002279936_n.jpg',
  '/images/water/30714782_10156581840200676_3941587110691078144_n.jpg',
  '/images/water/53484770_10157469583070676_7582684707192569856_n.jpg',
  '/images/water/53472608_10157469583355676_301313915982184448_n.jpg',
  '/images/water/69798652_10158011892845676_441428251827503104_n.jpg',
  '/images/water/54207500_10157469582820676_3010725121913520128_n.jpg'
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
