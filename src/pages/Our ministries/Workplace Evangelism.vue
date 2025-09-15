<template>
  <!-- Hero section -->
      <section class="relative w-full h-screen flex items-center justify-center overflow-hidden"> 
      <img 
          :src="workplaceImg"
          class="absolute inset-0 w-full h-full object-cover"
          alt="Church Background"
      />
      <div class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
          <hgroup data-aos="fade-up" data-aos-delay="500">
              <h1 class="font-serif text-4xl text-gray-500/90 md:text-6xl lg:text-7xl text-center font-bold mb-6 animate-fade-up">
                SPIRITUAL FORMATION
              </h1>
              <p class="text-xl text-center md:text-xl mb-8 text-white/90 animate-fade-up stagger-1">
                “THEREFORE, I URGE YOU, BROTHERS AND SISTERS, IN VIEW OF GOD’S MERCY, TO OFFER YOUR BODIES AS A LIVING SACRIFICE, HOLY AND PLEASING TO GOD –  <br />THIS IS YOUR TRUE AND PROPER WORSHIP. DO NOT CONFORM TO THE PATTERN OF THIS WORLD, BUT BE TRANSFORMED BY THE RENEWING OF YOUR MIND. <br /> THEN YOU WILL BE ABLE TO TEST AND APPROVE WHAT GOD’S WILL IS – HIS GOOD , PLEASING AND PERFECT WILL.” -ROMANS 12:1-2
              </p>
          </hgroup>
      </div>
  </section>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- LEFT SIDE: TEXT -->
      <div>
        <h2 class="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
          Workplace Ministry
        </h2>

        <p class="text-lg text-gray-700 leading-relaxed mb-4">
          Spiritual formation is truly at the heart of everything R.O.C.K Bridge Ministries does:
          we seek first to glorify Jesus Christ and lead others to restoration through Him.
          Whether a ministry is a church, school, medical clinic, or hotel, Christ is at the center
          of every relationship and every activity is operated on Biblical principles.
        </p>

        <p class="text-lg text-gray-700 leading-relaxed mb-4">
          The ministry seeks to reach out to people in their workplaces with the gospel of Jesus Christ,
          equip workers with kingdom business principles, and train Christian leaders. Workplace ministry
          is also about meeting people where they are and providing an opportunity for worship and
          preaching the good news of Jesus.
        </p>

        <h3 class="text-xl font-semibold text-green-800 mb-3">Our Approach</h3>
        <ul class="list-disc pl-5 text-gray-700 space-y-2">
          <li>Organize workplace Bible studies or prayer groups.</li>
          <li>Provide resources and training for Christian workers.</li>
          <li>Partner with businesses to host lunch-and-learn events or outreach programs.</li>
          <li>Encourage workers to share their faith respectfully at work.</li>
          <li>Pray for workers and their workplaces.</li>
        </ul>

        <p class="mt-6 text-lg text-gray-700 leading-relaxed">
          Workplace ministry is a powerful way to reach people with the gospel of Jesus Christ and make a
          difference in the world. We are committed to this ministry, and we invite you to
          Get Involved.
        </p>
        <button
          v-for="member in kenyanBoardMembers"
          :key="member.id"
          @click="handleCardClick(member)"
            type="button"
            class="mt-8 self-start group inline-flex px-8 py-4 bg-gray-700 text-white rounded-full font-semibold text-sm shadow-md hover:bg-amber-700 transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <span class="mr-2">Workplace Ministry</span>
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
          </button>
          <div
    v-if="selectedMember"
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    @click="closeModal"
  >
    <div
      class="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-100"
      @click.stop
    >
      <div class="flex justify-between items-start p-6 border-b bg-slate-50/60">
        <div class="flex-1">
        </div>
        <button
          @click="closeModal"
          class="text-slate-400 hover:text-slate-600 transition-colors duration-200 ml-4"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
        <div class="flex flex-col md:flex-row gap-6">
          <div class="md:w-2/3">
            <div class="space-y-4">
              <p
                v-for="(paragraph, index) in selectedMember.fullBio"
                :key="index"
                class="text-slate-700 leading-relaxed text-justify"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-6 py-4 bg-slate-50 border-t flex justify-end">
        <button
          @click="closeModal"
          class="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200 font-medium"
        >
          Close
        </button>
      </div>
    </div>
  </div>
      </div>

      <!-- RIGHT SIDE: IMAGE -->
      <div class="relative">
        <img
          :src="ministryImg"
          alt="Workplace Ministry"
          class="w-full h-[500px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import workplaceImg from '../../assets/images/workplace.png'
import ministryImg from '../../assets/images/ministry.png'
import { ref } from 'vue'

const selectedMember = ref(null)

const teamMembers = [
  {
    id: 1,
    fullBio: [
      'The Workplace Ministry reaches out to meet people where they are with the gospel. One morning per week, participating companies offer a space for employees to gather for prayer, worship, and preaching of scripture under the leadership of Benson Kahura. The Workplace Ministry builds up staff members and encourages them to be servants of Christ “working diligently as unto the Lord.',
      "Benson and the workplace ministry are currently serving 22 local businesses in Nakuru. A number of local companies have, in return, been instrumental in supporting the ministries of ROCKbridge, for example through investments in medical clinics and needs of the children’s home. To learn how your company can get involved, contact Benson Kahura.",
    ],
  },
]

const kenyanBoardMembers = teamMembers.filter(m => m.id <= 5)

const handleCardClick = (member) => {
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




