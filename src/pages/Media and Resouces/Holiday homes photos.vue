<template>
  <div class="bg-gray-50 min-h-screen p-25">
    <BackToMediaButton />
    
    <!-- Heading -->
    <h2 class="text-3xl font-bold text-slate-800 text-center mb-10">
      Graduation Memories
    </h2>
    <div
          class="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8 sm:mb-12"
        ></div>

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
          alt="Gallery Image"
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
          alt="Selected Image"
          class="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BackToMediaButton from '../../components/BackToMediaButton.vue';

// Empty array (add your image paths later)
const images = [
  '/images/home/e94e186f-8558-4563-bcb8-eeba8b0ea724-scaled.jpg',
  '/images/home/f22932c8-b292-431c-9e7e-5607b942997a-scaled.jpg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.18.21-3.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.18.20-1.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.15.53-2.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.15.53-4.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.18.21.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.15.54.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.16.49.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.16.51.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.16.52-1.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.16.56-2.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.16.56.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.16.57-1.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.16.58.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.17.22.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.17.24-1.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.17.25.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.17.27-1.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.17.27-2.jpeg',
  '/images/home/WhatsApp-Image-2023-08-25-at-10.17.28.jpeg',
  '/images/home/WhatsApp-Image-2023-03-26-at-07.51.37-2.jpeg',
  '/images/home/WhatsApp-Image-2023-03-26-at-07.51.40-1.jpeg',
  '/images/home/WhatsApp-Image-2022-12-16-at-11.00.39.jpeg',
  '/images/home/WhatsApp-Image-2023-03-26-at-07.51.30.jpeg',
  '/images/home/WhatsApp-Image-2023-03-26-at-09.36.19.jpeg',
  '/images/home/WhatsApp-Image-2023-03-26-at-07.51.27.jpeg,',
];

const selectedImage = ref(null);

const openModal = (image) => {
  selectedImage.value = image;
};

const closeModal = () => {
  selectedImage.value = null;
};
</script>
