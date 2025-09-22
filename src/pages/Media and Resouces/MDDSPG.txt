<template>
  <div class="bg-gray-50 min-h-screen p-6">
    <!-- Heading -->
    <h2 class="text-3xl font-bold text-slate-800 text-center mb-6">
      Graduation Memories
    </h2>

    <!-- Gallery -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden rounded-lg shadow hover:shadow-xl transition cursor-pointer"
        @click="openModal(image)"
      >
        <img
          :src="image"
          alt="Graduation memory"
          class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div class="relative max-w-4xl w-full">
        <!-- Close Button -->
        <button
          class="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow"
          @click="closeModal"
        >
          ✕
        </button>

        <!-- Fullscreen Image -->
        <img
          :src="selectedImage"
          alt="Selected graduation memory"
          class="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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

const selectedImage = ref(null);

const openModal = (image) => {
  selectedImage.value = image;
};

const closeModal = () => {
  selectedImage.value = null;
};
</script>
 