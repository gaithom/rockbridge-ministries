<template>
  <div class="bg-gray-50 min-h-screen p-25">
    <!-- Heading -->
    <h2 class="text-3xl font-bold text-slate-800 text-center mb-10">
      Clean Water Initiatives
    </h2>
    <div
      class="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8 sm:mb-12"
    ></div>

    <!-- Gallery -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden rounded-lg shadow hover:shadow-xl transition cursor-pointer"
        @click="openModal(image)"
      >
        <img
          :src="image"
          :alt="'Clean Water Initiative ' + (index + 1)"
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

const images = [
  '/images/water/IMG_0851.jpg',
  '/images/water/IMG_0822-scaled.jpg',
  '/images/water/90905764_10158656878760676_1013601883740176384_n.jpg',
  '/images/water/30726039_10156581840405676_4692970495002279936_n.jpg',
  '/images/water/30725477_10156581840470676_4292114724750884864_n.jpg',
  '/images/water/30714782_10156581840200676_3941587110691078144_n.jpg',
  '/images/water/21686732_283152818755525_1190523324994096145_o.jpg',
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
];

const selectedImage = ref(null);

const openModal = (image) => {
  selectedImage.value = image;
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedImage.value = null;
  // Re-enable body scroll when modal is closed
  document.body.style.overflow = '';
};
</script>
