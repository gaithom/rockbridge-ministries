<template>
  <section
    class="relative w-full h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      :src="SocialImg"
      class="absolute inset-0 w-full h-full object-cover"
      alt="Church Background"
    />
    <div
      class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40"
    >
      <hgroup data-aos="fade-up" data-aos-delay="500">
        <h1
          class="font-serif text-4xl text-amber-500/90 md:text-6xl lg:text-7xl text-center font-bold mb-6 animate-fade-up"
        >
          SUSTAINABILITY
        </h1>
        <p
          class="text-xl text-center md:text-xl mb-8 text-white/90 animate-fade-up stagger-1"
        >
          “WELL DONE, GOOD AND FAITHFUL SERVANT. YOU HAVE BEEN FAITHFUL OVER A
          LITTLE; I WILL SET YOU OVER MUCH. <br />
          ENTER INTO THE JOY OF YOUR MASTER.” -MATTHEW 25:21
        </p>
      </hgroup>
    </div>
  </section>
  <div class="mb-10 mt-10 flex justify-center px-4">
    <p class="text-gray-700 text-xl leading-relaxed text-center max-w-5xl">
      One of the highest priorities of R.O.C.K Bridge Ministries is to empower
      communities and individuals to become self-sustainable and independent of
      needs for outside support. To pursue this goal, our ministries include
      income-generating structures that both aid the community and enable their
      operations to be self-sustaining. The Holiday Homes and the Clean Water
      Initiative, play large roles helping create lasting sustainability in our
      ministries. Each of the ministries of R.O.C.K Bridge also play into
      employment for their staff and employees; truck divers of the water trucks
      and workers at the Holiday Homes. Take a look at our Education page to
      read more about how R.O.C.K Bridge Ministries helps empower individuals to
      sustain themselves economically.
    </p>
  </div>

  <div class="flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg">
    <!-- Left: Image -->
    <div class="w-full md:w-1/2">
      <img :src="comeImg" alt="Holiday Home" class="rounded-lg shadow-md" />
    </div>

    <!-- Right: Content -->
    <div class="w-full md:w-1/2 flex flex-col gap-4">
      <!-- Accordion Item 1: Holiday Homes Project -->
      <div class="border rounded-lg overflow-hidden">
        <button
          @click="toggleAccordion('holiday')"
          class="w-full flex justify-between items-center px-4 py-3 text-left text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          <span>Holiday Homes Project</span>
          <span
            class="text-xl transition-transform duration-300"
            :class="{ 'rotate-45': openAccordion === 'holiday' }"
            >+</span
          >
        </button>

        <transition name="accordion">
          <div v-if="openAccordion === 'holiday'" class="p-4 bg-white">
            <p class="text-gray-600 mb-4">
              A child’s dreams should be limitless even when growing up in a
              community stricken with poverty. Revenues from Holiday Homes will
              support higher education for children from at-risk communities and
              the orphans graduating from Tumaini Mission School and Children’s
              Home.
            </p>
            <a
              href="#"
              class="font-semibold text-green-600 hover:text-green-700"
              >LEARN MORE</a
            >
          </div>
        </transition>
      </div>

      <!-- Accordion Item 2: Lodge with a Purpose -->
      <div class="border rounded-lg overflow-hidden">
        <button
          @click="toggleAccordion('lodge')"
          class="w-full flex justify-between items-center px-4 py-3 text-left text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          <span>Lodge with a Purpose</span>
          <span
            class="text-xl transition-transform duration-300"
            :class="{ 'rotate-45': openAccordion === 'lodge' }"
            >+</span
          >
        </button>

        <transition name="accordion">
          <div v-if="openAccordion === 'lodge'" class="p-4 bg-white">
            <p class="text-gray-600 mb-4">
              Building upon support from donors for the past 20 years through
              R.O.C.K. Bridge Ministries, Inc., Holiday Homes are
              income-generating structures that both aid the community and
              enable operations to be self-sustaining.
            </p>
            <a
              href="#"
              class="font-semibold text-green-600 hover:text-green-700"
              >DONATE HERE</a
            >
          </div>
        </transition>
      </div>
    </div>
  </div>

  <!-- Download PDF Section -->
  <section class="bg-[#3A3A20] py-12 text-white">
    <div class="container mx-auto text-center max-w-4xl px-4">
      <h2 class="text-4xl font-bold mb-2">Download Holiday Homes PDF</h2>
      <h3 class="text-lg font-semibold tracking-widest mb-4">HOLIDAY HOMES</h3>
      <p class="mb-8 text-gray-300">
        Kenya is a new concept for Holiday Makers for both Groups and Families. The holiday homes will build income-generating structures that both aid the community and enable operations to be self-sustaining.
      </p>
      <a 
        href="#" 
        class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
      >
        Download
      </a>
    </div>
  </section>
</template>

<script setup>
import SocialImg from "../../assets/images/social.png";
import comeImg from "../../assets/images/come.png";

import { ref } from "vue";

const openAccordion = ref("holiday"); // Keep the first item open by default

const toggleAccordion = (section) => {
  if (openAccordion.value === section) {
    openAccordion.value = null; // Close if already open
  } else {
    openAccordion.value = section; // Open the new section
  }
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px; /* Adjust if your content is taller */
  opacity: 1;
}
</style>
