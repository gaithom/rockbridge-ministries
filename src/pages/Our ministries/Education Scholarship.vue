<template>
  <!-- Hero section -->
  <section
    class="relative w-full h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      :src="churchImg"
      class="absolute inset-0 w-full h-full object-cover"
      alt="Church Background"
    />
    <div
      class="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40"
    >
      <hgroup data-aos="fade-up" data-aos-delay="500">
        <h1
          class="font-serif text-4xl text-white md:text-6xl lg:text-7xl text-center font-bold mb-6 animate-fade-up"
        >
          Reaching Out to Communities <br />
          in Kenya for Christ
        </h1>
        <p
          class="text-xl text-center md:text-2xl mb-8 text-white/90 animate-fade-up stagger-1"
        >
          -Come and See What God is Doing-
        </p>
      </hgroup>
    </div>
  </section>
  <!-- details -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div class="flex flex-col justify-center h-full">
          <p class="text-lg leading-relaxed">
            R.O.C.K. Bridge Ministries is a non-profit ministry that opens
            pathways for individuals to obtain access to education. We believe
            that education is the key to breaking the cycle of poverty and
            creating a better future for all. Through our scholarship program,
            we help students from needy backgrounds transition to higher
            education, colleges, universities, and TVETs. <br /> We also provide
            mentorship and support to help them succeed in their studies and
            achieve their educational goals. Education is not just about getting
            a good job. It is also about empowering people to reach their full
            potential and make a difference in their communities. When people
            have access to education, they are more likely to be employed, earn
            higher wages, and live healthier lives. They are also more likely to
            be involved in civic life and contribute to the development of their
            communities.
          </p>
        </div>
        <div class="relative group">
          <img
            src="/images/guy.jpg"
            alt="Tumaini Mission Center building"
            class="rounded-2xl shadow-2xl h-full"
          />
          <div
            class="absolute inset-0 bg-amber-100 rounded-2xl opacity-20 duration-500 group-hover:opacity-10"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import churchImg from "../../assets/images/Church.png";
</script>
