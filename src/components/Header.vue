<template>
  <header class="w-full fixed top-0 left-0 z-50 transition-all duration-500" :class="scrolled
    ? 'bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
    : 'bg-transparent'">
    <div class="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[76px]">

      <!-- ── Logo ─────────────────────────────────── -->
      <a href="#" aria-label="Nuvica Home" class="flex items-center gap-2 flex-shrink-0 group">
        <img src="/logo.webp" alt="Nuvica"
          class="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" loading="eager"
          fetchpriority="high" />
      </a>

      <!-- ── Desktop Nav ─────────────────────────── -->
      <nav class="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">

        <!-- Home -->
        <a href="#" @click.prevent="scrollToSection('#', 'home')"
          class="relative text-[15px] font-semibold transition-colors duration-200 py-1 group"
          :class="activeSection === 'home' ? 'text-[#1E3A5F]' : 'text-[#1E3A5F]/70 hover:text-[#1E3A5F]'">
          Home
          <span class="absolute bottom-[-3px] left-0 h-[2px] rounded-full bg-[#1E3A5F] transition-all duration-300"
            :class="activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
        </a>

        <!-- About -->
        <a href="#about" @click.prevent="scrollToSection('#about', 'about')"
          class="relative text-[15px] font-semibold transition-colors duration-200 py-1 group"
          :class="activeSection === 'about' ? 'text-[#1E3A5F]' : 'text-[#1E3A5F]/70 hover:text-[#1E3A5F]'">
          About
          <span class="absolute bottom-[-3px] left-0 h-[2px] rounded-full bg-[#1E3A5F] transition-all duration-300"
            :class="activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
        </a>

        <!-- Departments (with dropdown chevron) -->
        <div class="relative group/dept">
          <button
            class="flex items-center gap-1 text-[15px] font-semibold text-[#1E3A5F]/70 hover:text-[#1E3A5F] transition-colors duration-200 py-1"
            :class="activeSection === 'departments' ? '!text-[#1E3A5F]' : ''">
            Departments
            <svg class="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover/dept:rotate-180"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <!-- Dropdown -->
          <div
            class="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/dept:opacity-100 group-hover/dept:visible transition-all duration-200 translate-y-1 group-hover/dept:translate-y-0 py-2">
            <a href="#departments" @click.prevent="scrollToSection('#departments', 'departments')"
              class="block px-5 py-2.5 text-[14px] text-[#1E3A5F]/80 hover:text-[#1E3A5F] hover:bg-[#F0F7FF] font-medium transition-colors">Cardiology</a>
            <a href="#departments" @click.prevent="scrollToSection('#departments', 'departments')"
              class="block px-5 py-2.5 text-[14px] text-[#1E3A5F]/80 hover:text-[#1E3A5F] hover:bg-[#F0F7FF] font-medium transition-colors">Neurology</a>
            <a href="#departments" @click.prevent="scrollToSection('#departments', 'departments')"
              class="block px-5 py-2.5 text-[14px] text-[#1E3A5F]/80 hover:text-[#1E3A5F] hover:bg-[#F0F7FF] font-medium transition-colors">Orthopedics</a>
            <a href="#departments" @click.prevent="scrollToSection('#departments', 'departments')"
              class="block px-5 py-2.5 text-[14px] text-[#1E3A5F]/80 hover:text-[#1E3A5F] hover:bg-[#F0F7FF] font-medium transition-colors">Pediatrics</a>
            <a href="#departments" @click.prevent="scrollToSection('#departments', 'departments')"
              class="block px-5 py-2.5 text-[14px] text-[#1E3A5F]/80 hover:text-[#1E3A5F] hover:bg-[#F0F7FF] font-medium transition-colors">All
              Departments</a>
          </div>
        </div>

        <!-- Doctors -->
        <a href="#doctors" @click.prevent="scrollToSection('#doctors', 'doctors')"
          class="relative text-[15px] font-semibold transition-colors duration-200 py-1 group"
          :class="activeSection === 'doctors' ? 'text-[#1E3A5F]' : 'text-[#1E3A5F]/70 hover:text-[#1E3A5F]'">
          Doctors
          <span class="absolute bottom-[-3px] left-0 h-[2px] rounded-full bg-[#1E3A5F] transition-all duration-300"
            :class="activeSection === 'doctors' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
        </a>

        <!-- Career -->
        <a href="#career" @click.prevent="scrollToSection('#career', 'career')"
          class="relative text-[15px] font-semibold transition-colors duration-200 py-1 group"
          :class="activeSection === 'career' ? 'text-[#1E3A5F]' : 'text-[#1E3A5F]/70 hover:text-[#1E3A5F]'">
          Career
          <span class="absolute bottom-[-3px] left-0 h-[2px] rounded-full bg-[#1E3A5F] transition-all duration-300"
            :class="activeSection === 'career' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
        </a>
      </nav>

      <!-- ── Desktop Right: Contact Us CTA ─────── -->
      <div class="hidden lg:flex items-center gap-4">
        <a href="#"
          class="flex items-center gap-2 border border-[#1E3A5F]/20 bg-white text-[#1E3A5F] text-[14px] font-semibold px-5 py-2 rounded-full hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
          Contact Us
          <span class="w-8 h-8 bg-[#3AE079] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round" class="w-4 h-4">
              <path d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </span>
        </a>
      </div>

      <!-- ── Mobile Hamburger ───────────────────── -->
      <button
        class="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#1E3A5F] hover:bg-gray-100 transition-colors duration-200"
        @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen" aria-controls="mobile-menu"
        aria-label="Toggle navigation menu">
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <!-- ── Mobile Drawer ──────────────────────────── -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="mobileOpen" id="mobile-menu" role="navigation" aria-label="Mobile navigation"
        class="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-xl">
        <div class="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-1">
          <a v-for="link in navLinks" :key="link.key" :href="link.href"
            class="flex items-center gap-3 text-[16px] font-medium text-[#1E3A5F]/80 hover:text-[#1E3A5F] hover:bg-[#F0F7FF] rounded-xl px-4 py-3 transition-all duration-200"
            :class="{ '!text-[#1E3A5F] bg-[#EDF4FB]': activeSection === link.key }"
            @click.prevent="mobileLinkClick(link.href, link.key)">
            <span class="w-1.5 h-1.5 rounded-full bg-[#1E3A5F] flex-shrink-0"
              :class="activeSection === link.key ? 'opacity-100' : 'opacity-30'"></span>
            {{ link.label }}
          </a>
          <div class="my-3 border-t border-gray-100"></div>
          <a href="#"
            class="flex items-center justify-center gap-2 bg-[#1E3A5F] text-white font-semibold px-5 py-3 rounded-full transition-all duration-200 hover:bg-[#0A2D55]">
            Contact Us
            <span class="w-7 h-7 bg-[#3AE079] rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" class="w-3.5 h-3.5">
                <path d="M7 17L17 7M17 7H9M17 7v8" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// ── State ──────────────────────────────────────────
const scrolled = ref(false);
const mobileOpen = ref(false);
const activeSection = ref('home');

// ── Nav Links ──────────────────────────────────────
const navLinks = [
  { key: 'home', label: 'Home', href: '#' },
  { key: 'about', label: 'About', href: '#about' },
  { key: 'departments', label: 'Departments', href: '#departments' },
  { key: 'doctors', label: 'Doctors', href: '#doctors' },
  { key: 'career', label: 'Career', href: '#career' },
];

// ── Scroll handler ─────────────────────────────────
const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
  const sections = navLinks.map(l => l.key).filter(k => k !== 'home');
  let current = 'home';
  for (const key of sections) {
    const el = document.getElementById(key);
    if (el) {
      const { top } = el.getBoundingClientRect();
      if (top <= 100) current = key;
    }
  }
  activeSection.value = current;
};

// ── Smooth scroll ───────────────────────────────────
const scrollToSection = (href, key) => {
  activeSection.value = key;
  if (href === '#' || !href.startsWith('#')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// ── Mobile link click ───────────────────────────────
const mobileLinkClick = (href, key) => {
  mobileOpen.value = false;
  scrollToSection(href, key);
};

// ── Close mobile menu on resize ─────────────────────
const handleResize = () => {
  if (window.innerWidth >= 1024) mobileOpen.value = false;
};

// ── Lifecycle ───────────────────────────────────────
onMounted(() => {
  // Ensure LTR for this English design
  document.documentElement.setAttribute('dir', 'ltr');
  document.documentElement.setAttribute('lang', 'en');
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>
