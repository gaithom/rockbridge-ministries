<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="heroImage"
        alt="Rockbridge Ministries - A welcoming church sanctuary"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="fade-in-up">
        <h1 class="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-warm-white mb-6">
          Welcome to<br />
          <span class="text-accent">Rockbridge</span><br />
          Ministries
        </h1>
        <p class="text-xl md:text-2xl text-warm-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          A community rooted in faith, growing in love, and reaching out with hope. 
          Join us as we walk together in Christ's light.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" as-child>
            <RouterLink to="/events">Join Us This Sunday</RouterLink>
          </Button>
          <Button variant="warm" size="lg" as-child>
            <RouterLink to="/about">Learn More</RouterLink>
          </Button>
        </div>
      </div>

      <!-- Service Times -->
      <div class="mt-16 fade-in-gentle">
        <div class="bg-warm-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto shadow-warm">
          <h3 class="font-heading text-2xl font-semibold text-warm-white mb-4">
            Service Times
          </h3>
          <div class="space-y-2 text-warm-white/90">
            <p><strong>Sunday Worship:</strong> 9:00 AM & 11:00 AM</p>
            <p><strong>Wednesday Bible Study:</strong> 7:00 PM</p>
            <p><strong>Youth Group:</strong> Friday 6:30 PM</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-warm-white rounded-full flex justify-center">
        <div class="w-1 h-3 bg-warm-white rounded-full mt-2"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
// If your Button is a custom component, import it
// import Button from "@/components/ui/Button.vue";

// Hero background image
// import heroImage from "@/assets/heroImage.jpg";
</script>
