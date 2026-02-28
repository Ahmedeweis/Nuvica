<template>
    <!-- <div class="app-wrapper relative"> -->
    <!-- Full-page loader -->
    <div class="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center transition-opacity duration-300"
        :class="isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">
        <div class="w-16 h-16 border-4 border-white/20 border-t-brand-primary rounded-full animate-spin"></div>
    </div>

    <div class="app-content min-h-screen flex flex-col" :class="`lang-${locale}`">
        <main class="flex-grow flex flex-col">
            <router-view />
        </main>

    </div>
    <!-- </div> -->
    <ScrollToTop />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
// import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const { locale } = useI18n()
const isLoading = ref(false)

// Watch for locale changes to trigger the loader
watch(locale, () => {
    isLoading.value = true
    // Hide loader after a short delay (e.g., 600ms) to allow DOM updates and give a smooth feel
    setTimeout(() => {
        isLoading.value = false
    }, 600)
})
</script>

<style>
@import url(assets/css/normalize.css);
</style>
