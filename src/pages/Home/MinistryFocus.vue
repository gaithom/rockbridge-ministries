<template>
    <section id="stats" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <header data-aos="fade-up" data-aos-delay="500">
          <h2 class="text-4xl text-dark mb-5 text-center text-black relative">
            <span class="text-yellow-400">R.O.C.K Bridge Ministries</span> invests in kingdom development of Kenyan communities of faith through discipleship, empowerment and resource mobilization.
          </h2>
          <div class="w-16 h-1 bg-orange-500 mx-auto mb-5"></div>
          <p class="section-subtitle font-montserrat text-center text-4xl mb-5 text-gray-600">
            Our Vision
          </p>
        </header>
  
        <!-- Stats Grid -->
        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <li v-for="(stat, index) in statistics" :key="index">
            <article
              class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-px-5] h-full flex flex-col"
            >
              <figure class="mb-6 flex justify-center">
                <Icon
                  :icon="stat.icon"
                  class="text-yellow-400 w-14 h-14 bg-red-600 rounded-full p-2"
                  aria-hidden="true"
                />
              </figure>
  
              <strong class="text-3xl text-center font-bold text-black font-montserrat">
                {{ stat.value }}
              </strong>
  
              <p class="text-xl text-center font-semi-bold text-gray-800 mb-3 font-montserrat">
                {{ stat.text }}
              </p>
            </article>
          </li>
        </ul>
      </div>
      
      <!-- Video Section -->
      <section class="mt-12 px-4">
          <div class="max-w-4xl mx-auto aspect-video">
              <iframe
                  class="w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/82iipouWg5U?si=0S0uXYVd_PxOt9qm&amp;controls=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
              ></iframe>
          </div>
      </section>
  
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  
  // Choose icons from https://icon-sets.iconify.design
  const statistics = ref([
    {
      icon: 'mdi:heart', // Species
      value: 'SPIRITUAL FORMATION',
      text: 'Spiritual formation is the foundation of every aspect of R.O.C.K Bridge Ministries–whether an orphanage, a medical clinic, or a worship service in a grocery store',
    },
    {
      icon: 'mdi:cog', // Forest
      value: 'SOCIAL ENTERPRISES',
      text: 'The ministries of R.O.C.K Bridge include income-generating structures that both aid the community and enable their operations to be self-sustaining.',
    },
    {
      icon: 'mdi:book', // Lion
      value: 'EDUCATION',
      text: 'R.O.C.K Bridge Ministries opens pathways for individuals to obtain access to education, allowing them to achieve new levels of personal and economic growth and empowering them to give back to their communities.',
    },
  ])
  </script>
  