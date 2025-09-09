<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p class="text-lg text-gray-600">Meet the dedicated leaders of R.O.C.K Bridge Ministries</p>
        </div>
  
        <!-- Team Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            @click="handleCardClick(member)"
            class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group"
          >
            <div class="aspect-w-3 aspect-h-3">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-64 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {{ member.name }}
              </h3>
              <p class="text-sm text-blue-600 font-medium mb-3">
                {{ member.position }}
              </p>
              <p class="text-gray-600 text-sm line-clamp-3">
                {{ member.shortBio }}
              </p>
              
              <div class="mt-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <span class="text-sm font-medium">Learn more</span>
                <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Modal for detailed information -->
        <div v-if="selectedMember" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" @click="closeModal">
          <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl" @click.stop>
            <div class="flex justify-between items-start p-6 border-b">
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                  {{ selectedMember.name }}
                </h3>
                <p class="text-blue-600 font-medium text-lg">
                  {{ selectedMember.position }}
                </p>
              </div>
              <button
                @click="closeModal"
                class="text-gray-400 hover:text-gray-600 transition-colors duration-200 ml-4"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/3">
                  <img
                    :src="selectedMember.image"
                    :alt="selectedMember.name"
                    class="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div class="md:w-2/3">
                  <h4 class="text-xl font-semibold text-gray-900 mb-4">Biography</h4>
                  <div class="space-y-4">
                    <p
                      v-for="(paragraph, index) in selectedMember.fullBio"
                      :key="index"
                      class="text-gray-700 leading-relaxed text-justify"
                    >
                      {{ paragraph }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="px-6 py-4 bg-gray-50 border-t flex justify-end">
              <button
                @click="closeModal"
                class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  interface TeamMember {
    id: number
    name: string
    position: string
    image: string
    shortBio: string
    fullBio: string[]
  }
  
  const selectedMember = ref<TeamMember | null>(null)
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "ZABLON KURIA",
      position: "Founder & Executive Director, R.O.C.K Bridge Ministries",
      image: "/images/zablon-kuria.jpg",
      shortBio: "Former insurance salesman turned missionary and ministry founder.",
      fullBio: [
        "Mr. Kuria was a successful insurance salesman until 1999 when he left his job to pursue a degree in Biblical Education and Leadership in the United States. After graduation in 2006, Mr. Kuria was commissioned by Roswell Presbyterian Church in Georgia to return to Kenya as a missionary. It was after coming back to his country that he started R.O.C.K. Bridge Ministries.",
        "His main calling is to act as a bridge which connects churches, foundations, and corporations abroad to those in Kenya who are serving as the hands and feet of Christ. This way, Mr. Kuria says he is able to mobilize the Kenyan church in the mission of a holistic gospel; preaching the good news to all while uplifting the lives and spirits of the needy. To this end, he continues to seek partnerships with like-minded organizations and individuals who share his vision of transforming communities through Christ-centered development."
      ]
    },
    {
      id: 2,
      name: "JANE MUTHONI MACHARIA",
      position: "Treasurer",
      image: "/images/jane-macharia.jpg",
      shortBio: "Former teacher turned charitable business leader with a passion for music ministry.",
      fullBio: [
        "A teacher by profession, Mrs. Macharia quit her career to join her husband in business shortly after they married. After he passed, she carried his legacy forward as a charitable business person with a heart for employee empowerment. However, with a passion for teaching music, she has continued instructing at her church, where she plays the keyboard as the music advisor.",
        "Mrs. Macharia actively participates in development projects and mercy ministries within her church. Despite her busy schedule, Mrs. Macharia always makes ample time to serve the needy, as this is one of her basic callings which she yearns to fulfill."
      ]
    },
    {
      id: 3,
      name: "PRISCA TUITOWEK",
      position: "Kenyan Board of Directors, Member at Large Africa Gospel Church: Ngata, Nakuru",
      image: "/images/prisca-tuitowek.jpg",
      shortBio: "University lecturer and nutrition expert dedicated to empowering marginalized communities.",
      fullBio: [
        "Professor Tuitowek is a lecturer in Human Nutrition at Egerton University where she has been working for over 20 years, where she is also director of Quality Assurance. At her church, Professor Tuitowek serves as an elder in charge of the Protocol section. She is a board member in several institutions, including the Rift Valley Institute of Science and Technology, Kenya Highlands Evangelical University, and Moi High School in Kabarak.",
        "Professor Tuitowek passionately sponsors bright students from poor backgrounds, especially those who come from marginalized communities such as Pokot, Turkana, Ilchamus and Samburu. She is also a private health and nutrition consultant."
      ]
    }
  ]
  
  const handleCardClick = (member: TeamMember) => {
    selectedMember.value = member
  }
  
  const closeModal = () => {
    selectedMember.value = null
  }
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