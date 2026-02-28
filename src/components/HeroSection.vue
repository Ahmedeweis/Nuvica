<template>
    <section class="relative pt-28 pb-10 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
        style="background: linear-gradient(155deg, #C8DCF0 0%, #D8EAF7 35%, #E8F3FA 65%, #F5F9FC 100%);">
        <!-- Soft radial glow -->
        <div class="absolute inset-0 pointer-events-none"
            style="background: radial-gradient(ellipse 80% 60% at 65% 30%, rgba(255,255,255,0.55) 0%, transparent 70%);">
        </div>

        <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

            <!-- ════ TOP GRID: Text | Doctor | Lungs ════ -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">

                <!-- ── Left Column: Content ── -->
                <div class="lg:col-span-4 flex flex-col items-start z-20 pb-8">

                    <!-- Fast Treatment Badge -->
                    <div
                        class="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg shadow-sm mb-7 border border-gray-100">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2.5">
                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke-linejoin="round" />
                        </svg>
                        <span class="text-[13px] font-bold text-[#1E3A5F]">Fast Treatment</span>
                    </div>

                    <!-- Headline -->
                    <h1 class="font-black leading-[0.88] tracking-tight mb-7 relative"
                        style="font-size: clamp(68px, 8vw, 96px);">
                        <span class="block text-[#1E3A5F]">QUICK</span>
                        <span class="block text-[#1E3A5F] relative">
                            SMART
                            <!-- Stethoscope watermark behind "S" -->
                            <span
                                class="absolute -left-3 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none"
                                style="font-size: 3rem;">🩺</span>
                        </span>
                        <span class="block text-[#1E3A5F]">MEDIC</span>
                    </h1>

                    <!-- Body Text -->
                    <p class="text-[#5A7A94] font-medium text-[15px] mb-9 max-w-[88%] leading-relaxed">
                        <strong class="text-[#1E3A5F] font-bold">Nuvica</strong> is your destination for world-class
                        treatments,
                        <strong class="text-[#1E3A5F] font-bold">compassionate doctors</strong>, and precise diagnostics
                        all
                        under one roof.
                    </p>

                    <!-- CTA Button -->
                    <a href="#"
                        class="group flex items-center gap-4 bg-[#1E3A5F] text-white px-6 py-3.5 rounded-full hover:bg-[#0A2D55] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold text-[15px]">
                        Explore More
                        <span
                            class="w-8 h-8 bg-white text-[#1E3A5F] rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:rotate-45 transition-transform duration-300 shadow-sm">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 17L17 7M17 7H9M17 7v8" />
                            </svg>
                        </span>
                    </a>
                </div>

                <!-- ── Middle Column: Doctor + floating stats ── -->
                <div class="lg:col-span-5 relative flex justify-center z-10">

                    <!-- Stats row top-right of this column -->
                    <div class="absolute top-0 right-0 flex flex-col gap-2 z-30">
                        <!-- 490 Awards -->
                        <div
                            class="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-gray-100">
                            <div class="bg-[#F0F7FF] p-2 rounded-xl">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB"
                                    stroke-width="2">
                                    <path
                                        d="M8 21h8M12 17v4M7 4h10M5 4h14a1 1 0 011 1v4a6 6 0 01-6 6H10a6 6 0 01-6-6V5a1 1 0 011-1z"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[16px] font-black text-[#1E3A5F] leading-tight">490</span>
                                <span
                                    class="text-[10px] font-semibold text-[#5A7A94] uppercase tracking-wide">awards</span>
                            </div>
                        </div>

                        <!-- 22 Years -->
                        <div
                            class="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-gray-100">
                            <div class="bg-[#F0F7FF] p-2 rounded-xl">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB"
                                    stroke-width="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[14px] font-black text-[#1E3A5F] leading-tight">22 Years</span>
                                <span class="text-[10px] font-medium text-[#5A7A94]">Medical Excellence</span>
                            </div>
                        </div>

                        <!-- 6700 Healed Lungs -->
                        <div
                            class="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-gray-100">
                            <div class="bg-[#F0F7FF] p-2 rounded-xl">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB"
                                    stroke-width="2">
                                    <path d="M15.5 12a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                                    <path d="M8.5 12a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                                    <path
                                        d="M12 3v9M12 8c2.5-3 6.5-4 8-1s-1 10-4.5 9c-2-1-2.5-4-3.5-4S9 19 7 20s-6-6-4.5-9 5.5-2 8 1"
                                        stroke-linecap="round" />
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[14px] font-black text-[#1E3A5F] leading-tight">6700</span>
                                <span class="text-[10px] font-medium text-[#5A7A94]">Healed Lungs</span>
                            </div>
                        </div>
                    </div>

                    <!-- Doctor Portrait -->
                    <div class="relative w-[300px] h-[420px] lg:w-[360px] lg:h-[500px] rounded-t-full rounded-b-[120px] overflow-hidden border-4 border-white shadow-2xl mx-auto"
                        style="background: linear-gradient(180deg, #B8D6F0 0%, #D6EAF8 60%, #EEF6FB 100%);">
                        <img src="/images/doctor_portrait.png" alt="Doctor Portrait"
                            class="w-full h-full object-cover object-top scale-105 origin-top" />
                    </div>

                    <!-- Bottom floating stats -->
                    <div
                        class="absolute bottom-4 left-[5%] bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-gray-100 z-30">
                        <div class="bg-[#F0F7FF] p-2 rounded-xl text-[#2563EB]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <span class="block text-[14px] font-black text-[#1E3A5F]">120+</span>
                            <span class="block text-[10px] font-medium text-[#5A7A94]">Expert Doctors</span>
                        </div>
                    </div>

                    <div
                        class="absolute bottom-4 right-[5%] bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-gray-100 z-30">
                        <div class="bg-[#F0F7FF] p-2 rounded-xl text-[#2563EB]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" stroke-linecap="round" />
                            </svg>
                        </div>
                        <div>
                            <span class="block text-[14px] font-black text-[#1E3A5F]">24/7</span>
                            <span class="block text-[10px] font-medium text-[#5A7A94]">Emergency Care</span>
                        </div>
                    </div>
                </div>

                <!-- ── Right Column: Lungs Image ── -->
                <div class="lg:col-span-3 relative flex justify-end items-end z-0 pb-16">
                    <div
                        class="relative w-[230px] h-[340px] lg:w-[270px] lg:h-[380px] rounded-t-full rounded-b-3xl overflow-hidden bg-white shadow-xl border-4 border-white">
                        <img src="/images/lungs_3d.png" alt="3D Lungs Illustration"
                            class="w-full h-full object-cover object-center scale-110 mix-blend-multiply opacity-95" />
                    </div>
                </div>

            </div><!-- /top grid -->

        </div><!-- /container -->

        <!-- ════ SERVICE CARDS ════ -->
        <div class="max-w-7xl mx-auto px-6 lg:px-12 mt-16 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">

                <!-- Brain Health Check -->
                <a href="#"
                    class="group bg-white rounded-3xl p-6 flex flex-row items-center justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden min-h-[130px] border border-gray-100/60">
                    <img src="/images/brain_3d.png" alt="Brain Check"
                        class="w-[140px] h-[140px] object-contain mix-blend-multiply absolute -left-5 bottom-0 z-10" />
                    <div class="flex flex-col items-end w-full pl-28 z-20 text-right gap-2">
                        <div
                            class="w-10 h-10 rounded-full bg-[#3AE079] flex items-center justify-center shadow-md ml-auto">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 17L17 7M17 7H9M17 7v8" />
                            </svg>
                        </div>
                        <h3 class="text-[18px] font-black text-[#1E3A5F] leading-tight mt-1">Brain Health<br />Check
                        </h3>
                    </div>
                </a>

                <!-- Liver Function Test -->
                <a href="#"
                    class="group bg-white rounded-3xl p-6 flex flex-row items-center justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden min-h-[130px] border border-gray-100/60">
                    <img src="/images/liver_3d.png" alt="Liver Function"
                        class="w-[150px] h-[150px] object-contain mix-blend-multiply absolute -left-8 bottom-0 z-10" />
                    <div class="flex flex-col items-end w-full pl-28 z-20 text-right gap-2">
                        <div
                            class="w-10 h-10 rounded-full bg-[#3AE079] flex items-center justify-center shadow-md ml-auto">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 17L17 7M17 7H9M17 7v8" />
                            </svg>
                        </div>
                        <h3 class="text-[18px] font-black text-[#1E3A5F] leading-tight mt-1">Liver Function<br />Test
                        </h3>
                    </div>
                </a>

                <!-- Kidney Health Scan (dark card) -->
                <a href="#"
                    class="group rounded-3xl p-6 flex flex-row items-center justify-between shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden min-h-[130px]"
                    style="background: linear-gradient(135deg, #1E4A7A 0%, #2E6BA3 100%);">
                    <img src="/images/kidney_3d.png" alt="Kidney Health"
                        class="w-[130px] h-[130px] object-contain mix-blend-screen opacity-95 absolute -left-2 bottom-0 z-10" />
                    <div class="flex flex-col items-end w-full pl-24 z-20 text-right gap-2">
                        <div
                            class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md ml-auto transform group-hover:rotate-45 transition-transform duration-300">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1E3A5F"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 17L17 7M17 7H9M17 7v8" />
                            </svg>
                        </div>
                        <h3 class="text-[18px] font-black text-white leading-tight mt-1">Kidney Health<br />Scan</h3>
                    </div>
                </a>

            </div>
        </div>
    </section>
</template>

<script setup>
</script>
