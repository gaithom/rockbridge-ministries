<template>
  <div class="bg-gray-50 min-h-screen antialiased text-gray-800">
    <!-- Hero section -->
    <section class="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img
        :src="churchImg"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Church Background"
      />
      <div class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
        <hgroup data-aos="fade-up" data-aos-delay="500">
          <h1 class="font-serif text-4xl text-white md:text-6xl lg:text-7xl text-center font-bold mb-6 animate-fade-up">
            EDUCATION
          </h1>
          <p
          class="text-xl text-center md:text-xl mb-8 text-white/90 animate-fade-up stagger-1"
        >
        “GIVE INSTRUCTION TO A WISE MAN, AND HE WILL BE STILL WISER; TEACH A RIGHTEOUS MAN, AND HE WILL INCREASE IN LEARNING. <br />
        THE FEAR OF THE LORD IS THE BEGINNING OF WISDOM, AND THE KNOWLEDGE OF THE HOLY ONE IS INSIGHT.”  -PROVERBS 9:9-10
        </p>
        </hgroup>
      </div>
    </section>
    <main class="relative z-20 -mt-16">
      <!-- Main content section -->
      <section class="py-16 md:py-24 bg-white rounded-t-3xl shadow-xl">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-5 items-start gap-12">
            <div class="md:col-span-3">
              <span class="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2">Opening Pathways to Education</h2>
              <div class="mt-6 space-y-6">
                <p class="text-lg leading-relaxed">
                  R.O.C.K. Bridge Ministries is a non-profit ministry that opens pathways for individuals to obtain access to education. We believe that education is the key to breaking the cycle of poverty and creating a better future for all.
                </p>
                <p class="text-lg leading-relaxed">
                  Through our scholarship program, we help students from needy backgrounds transition to higher education, colleges, universities, and TVETs. We also provide mentorship and support to help them succeed in their studies and achieve their educational goals.
                </p>
                <p class="text-lg leading-relaxed">
                  Education is not just about getting a good job. It is about empowering people to reach their full potential and make a difference in their communities. When people have access to education, they are more likely to be employed, earn higher wages, and live healthier lives.
                </p>
              </div>
            </div>
            <div class="md:col-span-2">
              <div class="relative group">
                <img 
                  src="/images/guy.jpg" 
                  alt="Student with scholarship" 
                  class="rounded-2xl shadow-2xl w-full h-auto"
                >
                <div class="absolute inset-0 bg-amber-100 rounded-2xl opacity-20 duration-500 group-hover:opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How You Can Help Section -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-5 items-start gap-12">
            <div class="md:col-span-2">
              <div class="relative group">
                <img 
                  src="/images/girl.png" 
                  alt="Student with scholarship" 
                  class="rounded-2xl shadow-2xl w-full h-auto"
                >
                <div class="absolute inset-0 bg-amber-100 rounded-2xl opacity-20 duration-500 group-hover:opacity-10"></div>
              </div>
            </div>
            <div class="md:col-span-3">
              <span class="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider">Get Involved</span>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2">How You Can Help</h2>
              <div class="mt-6 space-y-6">
                <p class="text-lg leading-relaxed">
                  There are many ways to support our scholarship program and help us open pathways to education for students in Kenya. Your contribution can make a lasting impact on someone's life and their community.
                </p>
                <div class="bg-white p-6 rounded-xl shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 mb-4">Ways to Support:</h3>
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">•</span>
                      <span>Make a one-time or recurring donation</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">•</span>
                      <span>Sponsor a student's education</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">•</span>
                      <span>Volunteer your time and skills</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">•</span>
                      <span>Spread awareness about our cause</span>
                    </li>
                  </ul>
                </div>
                <p class="text-lg leading-relaxed">
                  Every donation, no matter how small, makes a difference. Your support will help us provide scholarships to more students and help them achieve their educational goals.
                </p>
                <div class="pt-4">
                  <p class="font-medium">For more information, please contact:</p>
                  <p class="mt-2">Dick Mulloy at (404) 934-9728</p>
                  <p>Mary Cox at (404) 259-7735</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import churchImg from "../../assets/images/Church.png";
</script>

<style scoped>
/* Scoped styles for animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
