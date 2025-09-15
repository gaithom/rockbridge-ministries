<template>
  <section class="relative w-full h-screen flex items-center justify-center overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
      :src="churchVideo"
    />
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <div class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
            <hgroup data-aos="fade-up" data-aos-delay="500">
                <h1 class="font-serif text-4xl text-white md:text-6xl lg:text-7xl text-center font-bold mb-6 animate-fade-up">
                    Reaching Out to Communities <br /> in Kenya for Christ
                </h1>
                <p class="text-xl text-center md:text-2xl mb-8 text-white/90 animate-fade-up stagger-1">
                    -Come and See What God is Doing-
                </p>
            </hgroup>
        </div>
    </div>
  </section>
</template>

<script setup>
import churchVideo from '../../../assets/videos/church.mp4'
</script>
