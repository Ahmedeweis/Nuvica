<template>
  <div>
    <Header />
    <HeroSection />
    <AboutUsSection />
    <DnaSection />
    <DoctorsSection />
    <DepartmentsSection />
    <BlogSection />
    <AppointmentSection />
    <FooterSection />
    <ScrollToTop />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutUsSection from '@/components/AboutUsSection.vue';
import DnaSection from '@/components/DnaSection.vue';
import DoctorsSection from '@/components/DoctorsSection.vue';
import DepartmentsSection from '@/components/DepartmentsSection.vue';
import BlogSection from '@/components/BlogSection.vue';
import AppointmentSection from '@/components/AppointmentSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
</script>

<style scoped>
/* Custom scrollbar for categories if needed */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
