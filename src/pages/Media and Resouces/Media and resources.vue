<template>
  <div class="bg-gray-50 min-h-screen antialiased text-gray-800 pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <br /><br />
        <h3
          class="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center"
        >
          MEDIA
        </h3>
        <div
          class="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 mb-5"
        ></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="item in mediaItems"
            :key="item.id"
            class="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1.5 group overflow-hidden"
          >
            <div class="w-full h-64 overflow-hidden bg-slate-100">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div class="p-6">
              <h3
                class="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors duration-200"
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
    image: "/images/Zablonkuria.jpg",
    route: "/media-and-resources/grand-launch", // ✅ only this one goes to Grand Launch
  },
  {
    id: 2,
    name: "Community Empowerment Through Collaborative Technology",
    image: "/images/Janemuthoni.jpg",
    route: "/media-and-resources/cetct", // ✅ this one goes to CETCT
  },
  {
    id: 3,
    name: "ROCK Bridge Ministries Joins Daraja 360 Digital Skills Program Graduation",
    image: "/images/Priscatuitowek.jpg",
    route: "/media-and-resources/MDDSPG",
  },
  {
    id: 4,
    name: "13-Year Painful Journey to Nursing",
    image: "/images/Marykariuki.jpg",
    route: "/media-and-resources/journey-to-nursing",
  },
  {
    id: 5,
    name: "The Dream of a Doctor",
    image: "/images/ProfVictoria.jpg",
    route: "/media-and-resources/the-dream-of-a-doctor"
  },
  {
    id: 6,
    name: "One Girl's Journey to a Hydrology Degree",
    image: "/images/Dickmulloy.jpg",
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
  {
    id: 11,
    name: "MEDICAL TRIP VIDEO",
    image: "/images/medicaltrip.jpg",
    route: "/media-and-resources/medical-trip-video"
  },
{
    id: 12,
    name: "TUMAINI CENTER VIDEO",
    image: "/images/tumainicenter.jpg",
    route: "/media-and-resources/tumaini-center-video"
},
  // Second section items
  {
    id: 12,
    name: "FAITH'S STORY VIDEO",
    image: "/images/faith.jpg",
    route: "/media-and-resources/faith-video"
  },
  {
    id: 12,
    name: "TUMAINI BETHANY VIDEO",
    image: "/images/tumainibethany.jpg",
    route: "/media-and-resources/tumaini-bethany-video"
  },
  {
    id: 13,
    name: "ROCK Bridge Scholarship Beneficiaries Graduating from PCEA",
    image: "/images/Franciskenji.jpg",
    route: "/media-and-resources/the-dream-of-a-doctor"
  },
  {
    id: 14,
    name: "HOLIDAY HOMES PHOTOS",
    image: "/images/Marthamuiruri.jpg",
    route: "/media-and-resources/the-dream-of-a-doctor"
  },
  {
    id: 15,
    name: "CLEAN WATER INITITATIVE",
    image: "/images/Bensonnjuguna.png",
    route: "/media-and-resources/the-dream-of-a-doctor"
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
