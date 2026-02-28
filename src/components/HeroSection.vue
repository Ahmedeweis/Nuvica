<template>
    <section
        class="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-nuvica-bg-start/30 via-nuvica-bg-start/10 to-white font-['Plus_Jakarta_Sans',sans-serif]">
        <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

            <!-- Top Grid: Text + Doctor + Lungs -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                <!-- Left Column: Content (Cols 1-5) -->
                <div class="lg:col-span-4 flex flex-col items-start z-20">

                    <!-- Fast Treatment Badge -->
                    <div
                        class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md shadow-sm mb-6 border border-gray-50">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2">
                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke-linejoin="round" />
                        </svg>
                        <span class="text-xs font-bold text-nuvica-navy">Fast Treatment</span>
                    </div>

                    <!-- Headline -->
                    <h1
                        class="text-[64px] lg:text-[76px] xl:text-[88px] font-black leading-[0.9] text-white tracking-tight drop-shadow-sm flex flex-col relative w-full mb-6">
                        <span class="text-white drop-shadow-md z-10">QUICK</span>
                        <!-- Simulated stethoscope overlapping "U" or "S" -->
                        <div
                            class="absolute top-[20%] left-[8%] text-[#A8C7DB]/50 pointer-events-none -z-10 rotate-12 scale-150">
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5">
                                <path d="M6 3v4a6 6 0 0 0 12 0V3m-6 10v4m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span class="text-nuvica-navy">SMART</span>
                        <span class="text-white drop-shadow-md">MEDIC</span>
                    </h1>

                    <!-- Body Text -->
                    <p class="text-nuvica-gray font-medium text-base mb-8 max-w-[90%] leading-relaxed">
                        <strong class="text-nuvica-navy">Nuvica</strong> is your destination for world-class treatments,
                        <strong class="text-nuvica-navy">compassionate doctors</strong>, and precise diagnostics all
                        under one roof.
                    </p>

                    <!-- Explore More Button -->
                    <a href="#"
                        class="group flex items-center gap-4 bg-nuvica-navy text-white px-6 py-3 rounded-full hover:bg-[#0A2D55] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold">
                        Explore More
                        <div
                            class="bg-white text-nuvica-navy p-1.5 rounded-full transform group-hover:rotate-45 transition-transform duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5">
                                <path d="M5 19L19 5M19 5V15M19 5H9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </a>
                </div>

                <!-- Middle Column: Doctor Image (Cols 5-9) -->
                <div class="lg:col-span-5 relative flex justify-center z-10">
                    <!-- Main Image Shape -->
                    <div
                        class="relative w-[340px] h-[480px] lg:w-[400px] lg:h-[560px] rounded-t-full rounded-b-[180px] overflow-hidden bg-gradient-to-b from-[#E5F0F9] to-transparent shadow-2xl border-4 border-white">
                        <img src="/images/doctor_portrait.png" alt="Doctor Portrait"
                            class="w-full h-full object-cover mix-blend-multiply scale-105 origin-top" />
                    </div>

                    <!-- Floating Badge: 490 Awards -->
                    <div
                        class="absolute top-[5%] -right-4 bg-white px-4 py-2 rounded-xl shadow-lg flex flex-col items-center border border-gray-100 animate-float-slow">
                        <span class="text-lg font-bold text-nuvica-navy leading-tight">490</span>
                        <span class="text-[10px] font-bold text-nuvica-gray uppercase tracking-wider">Awards</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="mt-1" stroke="#3AE079"
                            stroke-width="2">
                            <path
                                d="M8 21h8M12 17v4M7 4h10M5 4h14a1 1 0 011 1v4a6 6 0 01-6 6H10a6 6 0 01-6-6V5a1 1 0 011-1z"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <!-- Floating Badge: 120+ Expert Doctors -->
                    <div
                        class="absolute bottom-[-10px] left-[10%] bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-gray-100 z-30">
                        <div class="bg-[#F0F7FF] p-2 rounded-full text-nuvica-navy">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm font-bold text-nuvica-navy">120+</span>
                            <span class="text-[11px] font-medium text-nuvica-gray">Expert Doctors</span>
                        </div>
                    </div>

                    <!-- Floating Badge: 24/7 Emergency Care -->
                    <div
                        class="absolute bottom-[-10px] right-[5%] bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-gray-100 z-30 translate-y-4">
                        <div class="bg-[#F0F7FF] p-2 rounded-full text-nuvica-navy">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 6v6l4 2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm font-bold text-nuvica-navy">24/7</span>
                            <span class="text-[11px] font-medium text-nuvica-gray">Emergency Care</span>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Lungs Image (Cols 9-12) -->
                <div class="lg:col-span-3 relative flex justify-center lg:justify-end mt-12 lg:mt-0 z-0">
                    <!-- Main Image Shape -->
                    <div
                        class="relative w-[280px] h-[380px] lg:w-[320px] lg:h-[420px] rounded-t-full rounded-b-3xl overflow-hidden bg-white shadow-xl border-4 border-white">
                        <img src="/images/lungs_3d.png" alt="3D Lungs Illustration"
                            class="w-full h-full object-cover mix-blend-multiply opacity-90 scale-110 object-center" />
                    </div>

                    <!-- Floating Badge: 22 Years -->
                    <div
                        class="absolute -top-6 -left-12 lg:-left-20 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-gray-100 z-20">
                        <div class="bg-blue-50 p-2 rounded-lg text-nuvica-navy">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm font-bold text-nuvica-navy">22 Years</span>
                            <span class="text-[11px] font-medium text-nuvica-gray">Medical Excellence</span>
                        </div>
                    </div>

                    <!-- Floating Badge: 6700 Healed Lungs -->
                    <div
                        class="absolute top-12 -left-12 lg:-left-20 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-gray-100 z-20">
                        <div class="bg-blue-50 p-2 rounded-lg text-nuvica-navy">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M15.5 12a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                                <path d="M8.5 12a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                                <path
                                    d="M12 3v9M12 8c2.5-3 6.5-4 8-1s-1 10-4.5 9c-2-1-2.5-4-3.5-4S9 19 7 20s-6-6-4.5-9 5.5-2 8 1" />
                            </svg>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm font-bold text-nuvica-navy">6700</span>
                            <span class="text-[11px] font-medium text-nuvica-gray">Healed Lungs</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Grid: Health Check Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">

                <!-- Card 1: Brain Health Check -->
                <a href="#"
                    class="group bg-[#F4F8FA] rounded-2xl p-6 flex flex-row items-center justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    <img src="/images/brain_3d.png" alt="Brain Check"
                        class="w-32 h-32 object-contain mix-blend-multiply absolute -left-4 z-10 scale-125" />
                    <div class="flex flex-col items-end w-full pl-24 z-20 text-right space-y-2">
                        <div
                            class="w-10 h-10 rounded-full bg-nuvica-green flex items-center justify-center text-white mr-0 ml-auto shadow-md">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M5 19L19 5M19 5V15M19 5H9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-nuvica-navy leading-tight mt-2">Brain Health<br />Check</h3>
                    </div>
                </a>

                <!-- Card 2: Liver Function Test -->
                <a href="#"
                    class="group bg-[#F4F8FA] rounded-2xl p-6 flex flex-row items-center justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    <img src="/images/liver_3d.png" alt="Liver Function"
                        class="w-36 h-36 object-contain mix-blend-multiply absolute -left-8 z-10 scale-110" />
                    <div class="flex flex-col items-end w-full pl-24 z-20 text-right space-y-2">
                        <div
                            class="w-10 h-10 rounded-full bg-nuvica-green flex items-center justify-center text-white mr-0 ml-auto shadow-md">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M5 19L19 5M19 5V15M19 5H9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-nuvica-navy leading-tight mt-2">Liver Function<br />Test</h3>
                    </div>
                </a>

                <!-- Card 3: Kidney Health Scan -->
                <a href="#"
                    class="group bg-gradient-to-br from-[#4E88C0] to-[#254F7A] rounded-2xl p-6 flex flex-row items-center justify-between shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden text-white">
                    <img src="/images/kidney_3d.png" alt="Kidney Health"
                        class="w-32 h-32 object-contain mix-blend-screen opacity-90 absolute -left-2 z-10 scale-110" />
                    <div class="flex flex-col items-end w-full pl-24 z-20 text-right space-y-2">
                        <div
                            class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-nuvica-navy mr-0 ml-auto shadow-md transform group-hover:rotate-45 transition-transform duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M5 19L19 5M19 5V15M19 5H9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-white leading-tight mt-2 drop-shadow-sm">Kidney
                            Health<br />Scan</h3>
                    </div>
                </a>

            </div>
        </div>
    </section>
</template>

<script setup>
</script>
