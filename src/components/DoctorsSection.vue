<template>
    <section class="py-24 bg-[#F8FAFC]">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">

            <!-- Section Header -->
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
                <div class="max-w-xl">
                    <!-- Tag -->
                    <div
                        class="inline-block bg-[#3AE079] text-[#0A2D55] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                        DOCTORS
                    </div>
                    <!-- Headline -->
                    <h2 class="text-4xl lg:text-5xl font-black text-[#1E3A5F] leading-tight uppercase tracking-tight">
                        MEET OUR SPECIALIZED<br />MEDICAL TEAM
                    </h2>
                </div>

                <!-- Description -->
                <p class="text-[#4A6581] font-semibold text-base lg:text-lg max-w-sm lg:text-right">
                    From General Practitioners To Top Specialists, Our Doctors Are Dedicated To Your Health.
                </p>
            </div>

            <!-- Doctors Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">

                <!-- Doctor 1 (Partial visibility / out of bound style) -->
                <div
                    class="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-between pb-8">
                    <div
                        class="w-full h-[280px] bg-[#D6E4F0] relative overflow-hidden flex items-end justify-center rounded-3xl m-2 mb-6">
                        <img src="/images/doctor_male_1.png" alt="Doctor"
                            class="h-[110%] object-cover object-bottom transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    <div class="text-center px-4">
                        <h3 class="text-[#1E3A5F] text-xl font-bold mb-1">Dr. Alex Rivera</h3>
                        <p class="text-[#4A6581] text-sm font-medium mb-6">Pediatrician</p>

                        <!-- Social Icons -->
                        <div class="flex items-center justify-center gap-2">
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Doctor 2 (Cardiology) -->
                <div
                    class="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-between pb-8">
                    <div
                        class="w-full h-[280px] bg-[#D6E4F0] relative overflow-hidden flex items-end justify-center rounded-[24px] rounded-b-[40px] m-2 mb-6">
                        <img src="/images/doctor_male_1.png" alt="Dr. Mehidi Hasan"
                            class="h-[115%] object-cover object-bottom transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    <div class="text-center px-4">
                        <h3 class="text-[#1E3A5F] text-xl font-bold mb-1">Mehidi Hasan</h3>
                        <p class="text-[#4A6581] text-sm font-medium mb-6">Heart Sergeant</p>

                        <div class="flex items-center justify-center gap-2">
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-[#1E3A5F] bg-[#1E3A5F] flex items-center justify-center text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Doctor 3 (Highlighted / Center of Focus) -->
                <div
                    class="relative bg-gradient-to-br from-[#1E3A5F]/5 to-[#1E3A5F]/20 rounded-[32px] overflow-hidden shadow-lg lg:-translate-y-8 flex flex-col items-center group">
                    <div class="w-full h-[400px] relative overflow-hidden flex items-end justify-center rounded-[32px]">
                        <img src="/images/doctor_female_1.png" alt="Dr. Hamida Jannat"
                            class="h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    <!-- Floating Info Card for Highlighted Doctor -->
                    <div
                        class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-[24px] pt-6 pb-8 px-6 text-center shadow-xl border border-white/50">
                        <h3 class="text-[#1E3A5F] text-[22px] font-bold mb-1">Hamida Jannat</h3>
                        <p class="text-[#4A6581] text-sm font-medium mb-6">Cardiologiest & Medicine</p>

                        <div class="flex items-center justify-center gap-2">
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-[#1E3A5F] bg-[#1E3A5F] flex items-center justify-center text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Doctor 4 -->
                <div
                    class="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-between pb-8">
                    <div
                        class="w-full h-[280px] bg-[#D6E4F0] relative overflow-hidden flex items-end justify-center rounded-[24px] m-2 mb-6">
                        <img src="/images/doctor_male_2.png" alt="Dr. Haseeb Hossain"
                            class="h-[105%] object-cover object-bottom transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    <div class="text-center px-4">
                        <h3 class="text-[#1E3A5F] text-xl font-bold mb-1">Haseeb Hossain</h3>
                        <p class="text-[#4A6581] text-sm font-medium mb-6">Neurologist</p>

                        <div class="flex items-center justify-center gap-2">
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-[#1E3A5F] bg-[#1E3A5F] flex items-center justify-center text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>
