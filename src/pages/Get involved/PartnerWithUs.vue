<template>
  <div class="bg-white">
    <!-- Hero Section (image to be added later) -->
    <div class="relative bg-gray-900 h-80 md:h-96">
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background image placeholder - you can replace via inline style or <img> as done in other pages -->
        <div class="w-full h-full bg-gray-800 opacity-40"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative max-w-7xl mx-auto h-full flex items-center px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
            Partner with Us
          </h1>
        </div>
      </div>
    </div>

    <!-- Main Content - Centered -->
    <main class="w-full px-6 sm:px-8 py-16">
      <div class="w-full max-w-7xl mx-auto">
        <!-- Top actions row: right aligned Contact -->
        <div class="flex justify-end mb-10">
          <router-link to="/contact">
            <button class="px-4 py-2 text-xs font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-200">
              Contact
            </button>
          </router-link>
        </div>

        <!-- Intro strip -->
        <div class="bg-amber-50 border border-amber-100 rounded-2xl p-6 md:p-8 mb-12 text-center w-full">
          <p class="text-gray-700 text-base md:text-lg max-w-4xl mx-auto">
            Partner with R.O.C.K Bridge Ministries through workplace evangelism, education scholarships, and social enterprises.
            Your partnership fuels sustainable, Gospel-centered impact in Kenya.
          </p>
        </div>

        <!-- Creative grid cards - modified layout -->
        <div class="space-y-8 lg:space-y-10">
          <!-- Top row with two cards side by side -->
          <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <!-- Workplace Evangelism Card -->
            <section class="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shadow-inner">
                <svg class="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div class="inline-flex items-center gap-2 mb-1">
                  <span class="text-xs uppercase tracking-wider font-semibold text-amber-700">Workplace Evangelism</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">Ambassadors</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900">Be a Light Where You Work</h3>
              </div>
            </div>
            <ul class="space-y-3 text-gray-700 text-base md:text-lg leading-relaxed list-disc pl-6">
              <li>
                <span class="font-semibold">Become a Workplace Ambassador:</span>
                ROCK Bridge Ministries Workplace Ambassadors are individuals who are committed to sharing their faith in the workplace.
                They receive training and resources to help them do this effectively. 
                To become a Workplace Ambassador, you can contact ROCK Bridge Ministries.
              </li>
              <li>
                <span class="font-semibold">Share your story with colleagues:</span>
                One of the best ways to share your faith in the workplace is to simply share your story. 
                Talk to your colleagues about how your faith has impacted your life and how it has helped you to be a better person.
              </li>
            </ul>
            </section>
            <!-- Education Scholarships Card -->
            <section class="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shadow-inner">
                <svg class="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.468 9.563 5 8 5a4 4 0 000 8h2.167M12 6.253c1.168.174 2.437.53 4 1.247M10 19h4m-2-12V5" />
                </svg>
              </div>
              <div>
                <div class="inline-flex items-center gap-2 mb-1">
                  <span class="text-xs uppercase tracking-wider font-semibold text-amber-700">Education Scholarships</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">Students</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900">Open Pathways to Education</h3>
              </div>
            </div>
            <ul class="space-y-3 text-gray-700 text-base md:text-lg leading-relaxed list-disc pl-6">
              <li>
                <span class="font-semibold">Donate to the scholarship fund:</span>
                You can donate to the ROCK Bridge Ministries scholarship fund by visiting their website or by sending a check to their mailing address.
                 Your donation will help to provide scholarships to students in Kenya who need financial assistance to afford quality education.
              </li>
              <li>
                <span class="font-semibold">Sponsor a student:</span>
                You can sponsor a student through ROCK Bridge Ministries by making a monthly donation. 
                Your sponsorship will help to cover the student’s tuition, fees, and living expenses.
              </li>
              <li>
                <span class="font-semibold">Volunteer to tutor or mentor:</span>
                You can volunteer your time to tutor or mentor students through ROCK Bridge Ministries. 
                This is a great way to help students succeed in school and to share your faith with them.
              </li>
            </ul>
          </section>
          </div>
          
          <!-- Social Enterprises Card - Full Width -->
          <section class="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shadow-inner">
                <svg class="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" />
                </svg>
              </div>
              <div>
                <div class="inline-flex items-center gap-2 mb-1">
                  <span class="text-xs uppercase tracking-wider font-semibold text-amber-700">Social Enterprises</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">Sustainability</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900">Build Sustainable Impact</h3>
              </div>
            </div>
            <p class="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              ROCK Bridge Ministries operates several social enterprises that generate income to support its other programs.<br><br>
              These enterprises include:
            </p>
            <div class="grid md:grid-cols-3 gap-6">
              <!-- Clean Water -->
              <div class="rounded-2xl border border-slate-200 p-5 bg-amber-50/40">
                <div class="flex items-center gap-2 mb-2">
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                    <svg class="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3C8 8 6 11 6 13a6 6 0 0012 0c0-2-2-5-6-10z"/></svg>
                  </span>
                  <span class="font-semibold text-slate-900">Clean Water Initiative</span>
                </div>
                <p class="text-gray-700 text-sm md:text-base"> These initiatives provide clean water to communities in need, which helps to improve health and sanitation. The surplus from these initiative is used to fund the organization’s other programs,
                   including scholarships and meeting ministry’s operating costs.</p>
              </div>
              <!-- Holiday Homes -->
              <div class="rounded-2xl border border-slate-200 p-5 bg-amber-50/40">
                <div class="flex items-center gap-2 mb-2">
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                    <svg class="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-7 9 7v7a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                  </span>
                  <span class="font-semibold text-slate-900">Holiday Homes</span>
                </div>
                <p class="text-gray-700 text-sm md:text-base">These homes provide lodging for local and international guests visiting Nakuru. The revenue generated from these homes is used to offer scholarships to students in higher education,
                   ensuring effective transition from secondary to universities/colleges and tertiary institutions. </p>
              </div>
              <!-- Lish AI Labs -->
              <div class="rounded-2xl border border-slate-200 p-5 bg-amber-50/40">
                <div class="flex items-center gap-2 mb-2">
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                    <svg class="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                  </span>
                  <span class="font-semibold text-slate-900">Lish AI Labs</span>
                </div>
                <p class="text-gray-700 text-sm md:text-base">This is a digital skills training and job aggregator firm that offers youths training and online jobs opportunities in AI and machine learning. The goal of this enterprise is to create 
                  jobs for young people and help them develop in the digital space.</p>
              </div>
            </div>
          </section>
        </div>

        <!-- CTA -->
        <div class="mt-14 text-center  text-gray-900 rounded-3xl p-10">
          <h3 class="text-2xl md:text-3xl font-bold mb-3">Ready to Partner?</h3>
          <div class="flex items-center justify-center gap-3">
            <router-link to="/get-involved/fund-our-programs"><button class="px-6 py-3 rounded-lg bg-gray-900 border border-white text-white hover:bg-amber-500 transition-colors">Fund Our Programs</button></router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// Partner With Us page content per screenshot, styled to match site.
</script>


