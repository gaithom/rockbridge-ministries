<template>
  <section class="py-20 overflow-hidden gray-100" id="specialists">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <header
        class="text-center mb-16 relative"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2
          id="specialists-heding"
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative"
        >
          How To Help
        </h2>

      </header>
      <ul
        data-aos="fade-up"
        data-aos-delay="500"
        class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        <li v-for="help in specialists" :key="help.id" class="group">
          <article
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            <figure class="relative h-80 overflow-hidden">
              <img
                :src="help.image"
                :alt="help.name"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <span
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                aria-hidden="true"
              ></span>
              <img
                :src="QuoteIcon"
                alt="Quote Icon"
                class="absolute bottom-6 left-6 bg-black text-white p-3 rounded-full shadow-lg"
              />
            </figure>
            <div class="p-6 relative -mt-10">
              <div class="bg-amber-50 rounded-lg shadow-md p-6">
                <p class="text-gray-900 font-medium mb-2">{{ help.title }}</p>
                <p class="text-gray-600">{{ help.description }}</p>
              </div>
            </div>
          </article>
        </li>
      </ul>
      <div class="flex justify-center">
        <router-link
          :to="{ name: 'OurMinistries' }"
          class="group inline-flex items-center justify-center text-center bg-gray-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-amber-700 transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <span class="mr-2">Our Ministries</span>
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
  </section>
</template>

<script setup>
import QuoteIcon from "../../assets/icons/Quote.png";
import supportImg from "../../assets/images/support.png";
import comeImg from "../../assets/images/come.png";
import partnerImg from "../../assets/images/partner.png";
import { ref } from "vue";
const specialists = ref([
  {
    id: 1,
    title: "SUPPORT OUR MINISTRIES",
    image: partnerImg,
    description:
      "Though ROCKbridge is highly self-sustaining, many of its ministries depend on outside funding, such as the Tumaini student sponsorships. Any donation given to ROCKbridge is an investment that goes far in providing ministry in Kenya.",
  },
  {
    id: 2,
    title: "PARTNER WITH US",
    image: supportImg,
    description:
      "We believe in partnership that works to better the lives of vulnerable groups in our community. Join us in ministry and help us further the gospel of Christ by reaching out to communities in Kenya with truth, love and resources. See how you can specifically get involved in our ministries!",
  },
  {
    id: 3,
    title: "COME AND SEE",
    image: comeImg,
    description:
      "In order to create a bridge allowing two-way ministry between Kenya and the U.S., ROCKbridge occasionally takes vision trips to allow the people from the U.S. to come and see what God is doing through His people in Nakuru.",
  },
]);
</script>
