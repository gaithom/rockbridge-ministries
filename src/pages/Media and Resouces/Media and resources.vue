<template>
  <div class="bg-gray-50 min-h-screen antialiased text-gray-800 pt-24 sm:pt-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-12 sm:py-16">
        <h3
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center"
        >
          Media & Resources
        </h3>
        <div
          class="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8 sm:mb-12"
        ></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div
            v-for="item in mediaItems"
            :key="item.id"
            class="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1.5 group overflow-hidden"
          >
            <div class="w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-100">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div class="p-4 sm:p-6">
              <h3
                class="text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors duration-200"
              >
                {{ item.name }}
              </h3>

              <button
                type="button"
                @click="navigateTo(item.route)"
                class="mt-4 inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm"
              >
                <span>Learn more</span>
                <svg
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Function to navigate to dynamic routes
const navigateTo = (route) => {
  if (route) {
    router.push(route);
  }
};

const mediaItems = [
  {
    id: 1,
    name: "Grand Launch of Fin-Tech Hub for Youth and Community Development",
    image: "/images/DSC_0104-scaled.jpg",
    route: "/media-and-resources/grand-launch", // ✅ only this one goes to Grand Launch
  },
  {
    id: 2,
    name: "Community Empowerment Through Collaborative Technology",
    image: "/images/rbm3.jpeg",
    route: "/media-and-resources/cetct", // ✅ this one goes to CETCT
  },
  {
    id: 3,
    name: "ROCK Bridge Ministries Joins Daraja 360 Digital Skills Program Graduation",
    image: "/images/IMG_7544-scaled.jpg",
    route: "/media-and-resources/MDDSPG",
  },
  {
    id: 4,
    name: "13-Year Painful Journey to Nursing",
    image: "/images/WhatsApp-Image-2023-09-15-at-2.01.16-PM-2-1.jpeg",
    route: "/media-and-resources/journey-to-nursing",
  },
  {
    id: 5,
    name: "The Dream of a Doctor",
    image: "/images/Picture2-2.png",
    route: "/media-and-resources/the-dream-of-a-doctor"
  },
  {
    id: 6,
    name: "One Girl's Journey to a Hydrology Degree",
    image: "/images/IMG_20230703_153409-scaled.jpg",
    route: "/media-and-resources/hydrology-degree"
  },
  {
    id: 7,
    name: "NURSING COLLEGE VIDEO",
    image: "/images/nursing.jpg",
    route: "/media-and-resources/nursing-college-video"
  },
  {
    id: 8,
    name: "WORKPLACE MINISTRY VIDEO",
    image: "/images/workplacemini.jpg",
    route: "/media-and-resources/workplace-video"
  },
  {
    id: 9,
    name: "OVERVIEW",
    image: "/images/overview.jpg",
    route: "/media-and-resources/overview-video"
  },
  {
    id: 10,
    name: "YOUTH DEPARTMENT VIDEO",
    image: "/images/youth.jpg",
    route: "/media-and-resources/youth-video"
  },
  // Second section items
  {
    id: 11,
    name: "FAITH'S STORY VIDEO",
    image: "/images/faith.jpg",
    route: "/media-and-resources/faith-video"
  },
  {
    id: 12,
    name: "ROCK Bridge Scholarship Beneficiaries Graduating from PCEA",
    image: "/images/Franciskenji.jpg",
    route: "/media-and-resources/the-dream-of-a-doctor"
  },
  {
    id: 13,
    name: "HOLIDAY HOMES PHOTOS",
    image: "/images/homes.jpg",
    route: "/media-and-resources/holiday-homes-photos"
  },
  {
    id: 14,
    name: "CLEAN WATER INITITATIVE",
    image: "/images/water.jpeg",
    route: "/media-and-resouces/clean-water-initiatives"
  },
];
</script>


<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
