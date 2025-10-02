<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 h-96">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 overflow-hidden">
        <img 
          src="/images/getinvolved.jpg" 
          alt="Community coming together" 
          class="w-full h-full object-cover opacity-40"
        >
      </div>
      
      <!-- Hero Content -->
      <div class="relative max-w-7xl mx-auto h-full flex items-center px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Get Involved
          </h1>
          <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto italic">
            "Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth." - 2 Timothy 2:15
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content Section -->
     

     
    <div id="get-involved" class="container mx-auto px-6 py-16 tab-content">
      <!-- Header Section -->
      <div class="text-center mb-16">
        
        <div class="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
        <p class="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
          We want to invite you to form a relationship with us at R.O.C.K Bridge Ministries! We are a group of people who feel called to obey Christ by reaching out to the community of Nakuru, Kenya. We believe that everyone has something to offer, and we would love to find a way for you to get involved.
        </p>
      </div>


      <!-- Tab Navigation -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          <button
            @click="setActiveTab('ways')"
            :class="{
              'bg-amber-500 text-white': activeTab === 'ways',
              'text-gray-700 hover:bg-gray-100': activeTab !== 'ways'
            }"
            class="px-6 py-2 rounded-md font-medium transition-colors duration-200"
          >
            Ways to Get Involved
          </button>
          <button
            @click="setActiveTab('support')"
            :class="{
              'bg-amber-500 text-white': activeTab === 'support',
              'text-gray-700 hover:bg-gray-100': activeTab !== 'support'
            }"
            class="px-6 py-2 rounded-md font-medium transition-colors duration-200"
          >
            How to Support
          </button>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="mb-20">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-12" data-aos="fade-up">
          Ways You Can Make a Difference
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Donate -->
          <div 
            class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="mb-6 flex justify-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl text-center font-bold text-gray-900 mb-4">Donate</h3>
            <p class="text-gray-600 mb-6 text-center flex-grow">
              Your donation will help us continue our work in Nakuru. We use donations to fund our programs, such as our scholarship program, our clean water initiative, and our community development projects.
            </p>
            <router-link :to="{ name: 'FundOurPrograms' }" class="block w-full mt-auto">
              <button class="w-full bg-amber-100 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Make a Donation
              </button>
            </router-link>
          </div>

          <!-- Partner -->
          <div 
            class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="mb-6 flex justify-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl text-center font-bold text-gray-900 mb-4">Partner</h3>
            <p class="text-gray-600 mb-6 text-center flex-grow">
              At R.O.C.K Bridge ministries we believe in partnerships and collaborations that pools resources together for the betterment of our community.
            </p>
            <router-link to="/get-involved/partner-with-us" class="block w-full mt-auto">
              <button class="w-full bg-gray-900 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Become a Partner
              </button>
            </router-link>
          </div>

          <!-- Volunteer -->
          <div 
            class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="mb-6 flex justify-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl text-center font-bold text-gray-900 mb-4">Volunteer</h3>
            <p class="text-gray-600 mb-6 text-center flex-grow">
              We are always looking for volunteers to help us with our work. You can volunteer your time in a variety of ways, professional consultant or working on our construction projects.
            </p>
            <router-link to="/get-involved/how-to-support" class="block w-full mt-auto">
              <button class="w-full bg-amber-100 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Join as Volunteer
              </button>
            </router-link>
          </div>

          <!-- Pray & Spread the Word (Combined) -->
          <div 
            class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-3 lg:justify-self-center lg:max-w-3xl w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Pray -->
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Pray</h3>
                <p class="text-gray-600">
                  Prayer is our most powerful weapon. We would love for you to pray for us and for the people we serve.
                </p>
              </div>

              <!-- Spread the Word -->
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Spread the Word</h3>
                <p class="text-gray-600">
                  Tell your friends and family about R.O.C.K Bridge Ministries and encourage them to get involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Impact Section -->
      <div class="bg-gray-900 rounded-3xl p-12 mb-20">
        <h2 class="text-3xl font-bold text-white text-center mb-12">
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
      <div class="text-center bg-amber-50 rounded-3xl p-12 mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          Ready to Make a Difference?
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          No matter how you choose to get involved, we are grateful for your support. Together, we can make a difference in the lives of people in Nakuru.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          
        </div>
        <p class="text-sm text-gray-500 mt-6">
          To learn more about how you can get involved, please visit our website or 
          <router-link to="/contact" class="text-green-600 font-semibold hover:text-amber-700 transition-colors duration-200">contact us</router-link>!
        </p>
      </div>

      <!-- How to Support Section -->
      <div class="bg-gradient-to-b from-gray-50 to-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Invest in Our Mission
            </h2>
            <div class="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
            <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Your support helps us transform lives through education and community development in Kenya.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <!-- Left Column -->
            <div class="space-y-12">
              <!-- Individual Donations -->
              <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Individual Donations</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  The power to open pathways to education. Your donation helps students from needy backgrounds transition to higher education and achieve their educational goals.
                </p>
                <div class="space-y-3 mt-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">Online:</span> Make a secure donation on our website
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">By mail:</span> Send a check to Gibbon House, P.O. Box 16142-20100, Nakuru, Kenya
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">In person:</span> Visit our office at Gibbon House, Opposite Nyayo Garden
                    </p>
                  </div>
                </div>
                <div class="mt-6">
                  <router-link to="/donate" class="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200">
                    Donate Now
                    <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>

              <!-- Foundation Grants -->
              <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-right" data-aos-delay="100">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Foundation Grants</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  We invite like-minded organizations and donors to help us pursue grants for our scholarship program and improve education in our community.
                </p>
                <div class="space-y-3 mt-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">Scholarship grants:</span> Help provide scholarships to more students from needy backgrounds
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">General operating grants:</span> Support the overall operations of our ministry
                    </p>
                  </div>
                </div>
                <div class="mt-6">
                  <router-link to="/contact" class="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200">
                    Learn More
                    <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-12">
              <!-- Corporate Sponsorships -->
              <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-left">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Corporate Sponsorships</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  Partner with us to help students from needy backgrounds while achieving your organization's community and social responsibility objectives.
                </p>
                <div class="space-y-3 mt-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">Event sponsorships:</span> Sponsor our outreach events to create more impact
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">Program sponsorship:</span> Support specific initiatives like our Scholarship Program
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">Product or service support:</span> Provide operational supplies and services
                    </p>
                  </div>
                </div>
                <div class="mt-6">
                  <router-link to="/contact" class="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200">
                    Partner With Us
                    <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>

              <!-- In-Kind Donations -->
              <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-left" data-aos-delay="100">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">In-Kind Donations</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  Your donation of goods or services can help reduce our operating costs and free up more resources for our programs.
                </p>
                <div class="space-y-3 mt-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      Office supplies and equipment
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      Printing and design services
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      Materials for holiday homes and community projects
                    </p>
                  </div>
                </div>
                <div class="mt-6">
                  <router-link to="/contact" class="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200">
                    Contact Us to Donate
                    <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
    offset: 100
  });
});
</script>