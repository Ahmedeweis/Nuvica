<template>
  <header
    class="w-full fixed top-0 left-0 z-50 transition-all duration-500"
    :class="scrolled
      ? 'bg-[#0A1228]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.35)]'
      : 'bg-transparent'"
  >
    <div class="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[80px]">

      <!-- ─── Logo ─────────────────────────────────── -->
      <a href="#" aria-label="Guarrent Home" class="flex items-center gap-3 flex-shrink-0 group">
        <img
          src="/logo.webp"
          alt="Guarrent"
          class="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          loading="eager"
          fetchpriority="high"
        />
      </a>

      <!-- ─── Desktop Nav ─────────────────────────── -->
      <nav class="hidden lg:flex items-center gap-8" role="navigation" :aria-label="t('nav.home')">
        <a
          v-for="link in navLinks"
          :key="link.key"
          :href="link.href"
          class="relative text-[15px] font-medium text-white/80 hover:text-white transition-colors duration-200 py-1 group"
          :class="{ '!text-white': activeSection === link.key }"
          @click.prevent="scrollToSection(link.href, link.key)"
        >
          {{ t(link.label) }}
          <!-- Active / hover underline -->
          <span
            class="absolute bottom-[-3px] left-0 h-[2px] rounded-full bg-blue-500 transition-all duration-300"
            :class="activeSection === link.key ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </a>
      </nav>

      <!-- ─── Desktop Right Actions ───────────────── -->
      <div class="hidden lg:flex items-center gap-4">

        <!-- Language Toggle -->
        <button
          @click="toggleLocale"
          class="flex items-center gap-1.5 text-white/70 hover:text-white text-[13px] font-semibold tracking-wide transition-colors duration-200 px-2 py-1 rounded"
          :aria-label="locale === 'en' ? 'Switch to Arabic' : 'Switch to English'"
        >
          <!-- Globe icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span>{{ locale === 'en' ? 'AR' : 'EN' }}</span>
        </button>

        <!-- Login -->
        <a
          href="#"
          class="text-[14px] font-semibold text-white/80 hover:text-white transition-colors duration-200 px-3 py-1.5"
        >
          {{ t('nav.login') }}
        </a>

        <!-- Join Us CTA -->
        <a
          href="#"
          class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] active:scale-[0.98]"
        >
          {{ t('nav.signup') }}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>

      <!-- ─── Mobile Hamburger ───────────────────── -->
      <button
        class="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
      >
        <!-- Hamburger icon -->
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6"  x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <!-- X Close icon -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="18" y1="6"  x2="6" y2="18"/>
          <line x1="6"  y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>

    <!-- ─── Mobile Drawer ──────────────────────────── -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        class="lg:hidden bg-[#0A1228]/98 backdrop-blur-md border-t border-white/10"
      >
        <div class="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-1">

          <!-- Nav links -->
          <a
            v-for="link in navLinks"
            :key="link.key"
            :href="link.href"
            class="flex items-center gap-3 text-[16px] font-medium text-white/75 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 transition-all duration-200"
            :class="{ '!text-white bg-blue-600/15': activeSection === link.key }"
            @click.prevent="mobileLinkClick(link.href, link.key)"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-70 flex-shrink-0" :class="activeSection === link.key ? 'opacity-100' : 'opacity-40'"></span>
            {{ t(link.label) }}
          </a>

          <!-- Divider -->
          <div class="my-3 border-t border-white/10"></div>

          <!-- Bottom actions -->
          <div class="flex items-center justify-between gap-4">
            <!-- Language -->
            <button
              @click="toggleLocale"
              class="flex items-center gap-2 text-white/70 hover:text-white text-[14px] font-semibold transition-colors duration-200 px-4 py-2.5 rounded-lg hover:bg-white/5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {{ locale === 'en' ? 'عربي' : 'English' }}
            </button>

            <div class="flex items-center gap-3">
              <!-- Login -->
              <a href="#" class="text-[14px] font-semibold text-white/80 hover:text-white transition-colors duration-200 px-3 py-2">
                {{ t('nav.login') }}
              </a>
              <!-- Join Us -->
              <a
                href="#"
                class="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95"
              >
                {{ t('nav.signup') }}
              </a>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// ── State ──────────────────────────────────────────
const scrolled      = ref(false);
const mobileOpen    = ref(false);
const activeSection = ref('home');

// ── Nav Links (driven by i18n) ─────────────────────
const navLinks = [
  { key: 'home',     label: 'nav.home',     href: '#'         },
  { key: 'projects', label: 'nav.projects',  href: '#projects' },
  { key: 'process',  label: 'nav.process',   href: '#process'  },
  { key: 'faq',      label: 'nav.faq',       href: '#faq'      },
  { key: 'blog',     label: 'nav.blog',      href: '#blog'     },
];

// ── Scroll handler ─────────────────────────────────
const handleScroll = () => {
  scrolled.value = window.scrollY > 20;

  // Update active section based on scroll position
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

// ── Language toggle ─────────────────────────────────
const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'ar' : 'en';
  document.documentElement.setAttribute('dir', locale.value === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', locale.value);
};

// ── Close mobile menu on resize ─────────────────────
const handleResize = () => {
  if (window.innerWidth >= 1024) mobileOpen.value = false;
};

// ── Lifecycle ───────────────────────────────────────
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize);
  handleScroll(); // run once on mount
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>
