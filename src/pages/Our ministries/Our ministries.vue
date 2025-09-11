<template>
  <!-- Hero Section -->
  <section
    class="relative w-full h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      :src="churchImg"
      class="absolute inset-0 w-full h-full object-cover"
      alt="Church Background"
    />
    <div
      class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40"
    >
      <hgroup data-aos="fade-up" data-aos-delay="500">
        <h1
          class="font-serif text-4xl text-white md:text-6xl lg:text-7xl text-center font-bold mb-6 animate-fade-up"
        >
          Reaching Out to Communities <br />
          in Kenya for Christ
        </h1>
        <p
          class="text-xl text-center md:text-2xl mb-8 text-white/90 animate-fade-up stagger-1"
        >
          -Come and See What God is Doing-
        </p>
      </hgroup>
    </div>
  </section>

  <!-- Ministries Section -->
  <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div
          v-for="(item, index) in values"
          :key="index"
          class="relative bg-white rounded-2xl shadow-md overflow-hidden group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          data-aos="fade-up"
          :data-aos-delay="200 * index"
        >
          <!-- Animated Border -->
          <div
            class="absolute inset-0 border-2 border-transparent group-hover:border-green-600 rounded-2xl transition-all duration-500"
          ></div>

          <!-- Card Content -->
          <div class="relative z-10 p-8 flex flex-col h-full">
            <!-- Icon -->
            <div
              class="flex items-center justify-center w-16 h-16 rounded-xl bg-green-100 mb-6"
            >
              <Icon :icon="item.icon" class="text-green-700 text-3xl" />
            </div>

            <!-- Title -->
            <h3 class="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              {{ item.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 flex-grow leading-relaxed">
              {{ item.description }}
            </p>

            <!-- Button -->

            <router-link
              :to="{ name: 'WorkplaceEvangelism' }"
              class="mt-8 self-start group inline-flex px-8 py-4 bg-gray-700 text-white rounded-full font-semibold text-sm shadow-md hover:bg-amber-700 transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <span class="mr-2">View Ministries</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import churchImg from "../../assets/images/Church.png";

const values = [
  {
    icon: "mdi:church",
    title: "Workplace Evangelism",
    description:
      "Spiritual formation is the foundation of every aspect of R.O.C.K Bridge Ministries—whether an orphanage, a medical clinic, or a worship service in a grocery store.",
  },
  {
    icon: "mdi:school",
    title: "Education",
    description:
      "R.O.C.K Bridge Ministries helps hundreds of primary, secondary, and collegiate students gain access to quality education.",
  },
  {
    icon: "mdi:hand-heart",
    title: "Social Enterprises",
    description:
      "The ministries of R.O.C.K Bridge include income-generating structures that both aid the community and enable their operations to be self-sustaining.",
  },
];
</script>
