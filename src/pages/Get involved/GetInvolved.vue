<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 h-96">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-087703934569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Community coming together" 
          class="w-full h-full object-cover opacity-40"
        >
      </div>
      
      <!-- Hero Content -->
      <div class="relative max-w-7xl mx-auto h-full flex items-center px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="font-sans text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Get Involved
          </h1>
          <p class="font-sans text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto italic">
            "Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth." - 2 Timothy 2:15
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content Section -->
    <div id="get-involved" class="container mx-auto px-6 py-16">
      <!-- Header Section -->
      <div class="text-center mb-16">
        
        <div class="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
        <p class="font-sans text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We want to invite you to form a relationship with us at R.O.C.K Bridge Ministries! We are a group of people who feel called to obey Christ by reaching out to the community of Nakuru, Kenya. We believe that everyone has something to offer, and we would love to find a way for you to get involved.
        </p>
      </div>

      <!-- Ways to Get Involved -->
      <div class="mb-20">
        <h2 class="font-sans text-3xl font-bold text-gray-900 text-center mb-12">
          Ways You Can Make a Difference
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Donate -->
          <div class="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="font-sans text-xl font-semibold text-gray-900 mb-4">Donate</h3>
            <p class="font-sans text-gray-600 mb-6">
              Your donation will help us continue our work in Nakuru. We use donations to fund our programs, such as our scholarship program, our clean water initiative, and our community development projects.
            </p>
            <router-link :to="{ name: 'FundOurPrograms' }" class="block w-full">
              <button class="w-full bg-amber-100 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Make a Donation
              </button>
            </router-link>
          </div>

          <!-- Partner -->
          <div class="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="font-sans text-xl font-semibold text-gray-900 mb-4">Partner</h3>
            <p class="font-sans text-gray-600 mb-6">
              At R.O.C.K Bridge ministries we believe in partnerships and collaborations that pools resources together for the betterment of our community.
            </p>
            <router-link to="/get-involved/partner-with-us" class="block w-full">
              <button class="w-full bg-gray-900 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Become a Partner
              </button>
            </router-link>
          </div>

          <!-- Volunteer -->
          <div class="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
              </svg>
            </div>
            <h3 class="font-sans text-xl font-semibold text-gray-900 mb-4">Volunteer</h3>
            <p class="font-sans text-gray-600 mb-6">
              We are always looking for volunteers to help us with our work. You can volunteer your time in a variety of ways, professional consultant or working on our construction projects.
            </p>
            <router-link to="/get-involved/how-to-support" class="block w-full">
              <button class="w-full bg-amber-100 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Join as Volunteer
              </button>
            </router-link>
          </div>

          <!-- Pray & Spread the Word (Combined) -->
          <div class="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-3 lg:justify-self-center lg:max-w-3xl w-full">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
              <!-- Pray -->
              <div>
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 class="font-sans text-xl font-semibold text-gray-900">Pray</h3>
                </div>
                <p class="font-sans text-gray-600">
                  Prayer is our most powerful weapon. We would love for you to pray for us and for the people we serve.
                </p>
              </div>

              <!-- Spread the Word -->
              <div class="md:pl-8">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                    </svg>
                  </div>
                  <h3 class="font-sans text-xl font-semibold text-gray-900">Spread the Word</h3>
                </div>
                <p class="font-sans text-gray-600">
                  Tell your friends and family about R.O.C.K Bridge Ministries and encourage them to get involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Impact Section -->
      <div class="bg-gray-900 rounded-3xl p-12 mb-20">
        <h2 class="font-sans text-3xl font-bold text-white text-center mb-12">
          Our Impact Areas
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Workplace Evangelism -->
          <router-link to="/our-ministries/workplace-evangelism" class="block text-center group">
            <div class="relative mb-6">
              <img src="/images/ourimpact1.jpg" 
                   alt="Workplace Evangelism" 
                   class="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl group-hover:from-black/70 transition-colors duration-300"></div>
              <span class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-xl group-hover:text-amber-300 transition-colors duration-300">Workplace Evangelism</span>
            </div>
            <p class="text-gray-300 group-hover:text-amber-200 transition-colors duration-300">
              Equipping Christians to share their faith effectively in professional settings.
            </p>
          </router-link>

          <!-- Education Scholarship -->
          <router-link to="/our-ministries/education-scholarship" class="block text-center group">
            <div class="relative mb-6">
              <img src="/images/ourimpact2.jpg" 
                   alt="Education Scholarship" 
                   class="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl group-hover:from-black/70 transition-colors duration-300"></div>
              <span class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-xl group-hover:text-amber-300 transition-colors duration-300">Education Scholarship</span>
            </div>
            <p class="text-gray-300 group-hover:text-amber-200 transition-colors duration-300">
              Providing quality education and scholarships to underprivileged students.
            </p>
          </router-link>

          <!-- Social Enterprises -->
          <router-link to="/our-ministries/social-enterprises" class="block text-center group">
            <div class="relative mb-6">
              <img src="/images/ourimpact3.jpg" 
                   alt="Social Enterprises" 
                   class="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl group-hover:from-black/70 transition-colors duration-300"></div>
              <span class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-xl group-hover:text-amber-300 transition-colors duration-300">Social Enterprises</span>
            </div>
            <p class="text-gray-300 group-hover:text-amber-200 transition-colors duration-300">
              Building sustainable community projects and social enterprises that create lasting change.
            </p>
          </router-link>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center bg-amber-50 rounded-3xl p-12">
        <h2 class="font-sans text-3xl font-bold text-gray-900 mb-6">
          Ready to Make a Difference?
        </h2>
        <p class="font-sans text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          No matter how you choose to get involved, we are grateful for your support. Together, we can make a difference in the lives of people in Nakuru.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          
        </div>
        <p class="text-sm text-gray-500 mt-6">
          To learn more about how you can get involved, please visit our website or 
          <router-link to="/contact" class="font-sans text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200">contact us</router-link>!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page scaffold - Get Involved section for R.O.C.K Bridge Ministries
</script>