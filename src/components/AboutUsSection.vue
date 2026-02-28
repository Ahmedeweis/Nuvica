<template>
    <section id="about" class="pt-24 pb-0 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">

            <!-- ════ Top Row: Image + Content ════ -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

                <!-- Left: Hospital Image + Floating Card -->
                <div class="relative z-10">
                    <!-- Image Container -->
                    <div class="relative w-full h-[400px] lg:h-[480px] rounded-[36px] overflow-hidden shadow-xl">
                        <img src="/images/hospital_building.png" alt="Nuvica Hospital Building"
                            class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/30 via-transparent to-transparent">
                        </div>
                    </div>

                    <!-- Floating Info Card — overlaps right edge -->
                    <div
                        class="absolute right-[-20px] lg:right-[-40px] top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-7 py-8 rounded-[28px] shadow-2xl border border-gray-100/80 w-[220px] lg:w-[240px]">
                        <!-- Logo row -->
                        <div class="flex items-center gap-2.5 mb-7">
                            <div
                                class="bg-[#1E3A5F] w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                                +
                            </div>
                            <span
                                class="font-black text-[#1E3A5F] tracking-[0.15em] uppercase text-[13px]">Nuvica</span>
                        </div>

                        <!-- Est Date -->
                        <div class="mb-5">
                            <span
                                class="block text-[#1E3A5F] font-black text-[18px] uppercase leading-none tracking-wide">FROM</span>
                            <span class="block text-[#5A7A94] font-semibold text-[13px] mt-1">28/10/2003</span>
                        </div>

                        <!-- Text -->
                        <p class="text-[#1E3A5F] font-bold text-[13px] leading-snug">
                            Committed to your health and well-being.
                        </p>
                    </div>
                </div>

                <!-- Right: Text Content -->
                <div class="flex flex-col items-start justify-center z-10 lg:pl-4">

                    <!-- About Us Tag -->
                    <div
                        class="bg-[#3AE079] text-white text-[11px] font-black uppercase tracking-[0.15em] px-5 py-2 rounded-full mb-7 shadow-sm">
                        About Us
                    </div>

                    <!-- Headline -->
                    <h2
                        class="text-[36px] lg:text-[44px] font-black text-[#1E3A5F] leading-[1.05] uppercase mb-6 tracking-tight">
                        Your Nuvica Medical Hospital
                    </h2>

                    <!-- Paragraph -->
                    <p class="text-[#5A7A94] font-medium text-[16px] leading-relaxed mb-10 max-w-[92%]">
                        We Combine Clinical Expertise, Innovative Technology, And A
                        Patient-First Approach To Ensure Accurate Diagnosis And Effective
                        Treatment.
                    </p>

                    <!-- CTA Row -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">

                        <!-- Learn More -->
                        <a href="#"
                            class="group flex items-center gap-3 bg-[#1E3A5F] text-white px-6 py-3.5 rounded-full hover:bg-[#0A2D55] transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-bold text-[15px]">
                            Learn More
                            <span
                                class="w-8 h-8 bg-white text-[#1E3A5F] rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:rotate-45 transition-transform duration-300">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 17L17 7M17 7H9M17 7v8" />
                                </svg>
                            </span>
                        </a>

                        <!-- Phone Contact -->
                        <div class="flex items-center gap-3.5">
                            <div class="bg-gray-100 p-3.5 rounded-full text-[#5A7A94] shadow-sm flex-shrink-0">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[#1E3A5F] font-bold text-[13px]">For Any Questions</span>
                                <span class="text-[#5A7A94] font-medium text-[13px]">+8801616876080</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div><!-- /container -->

        <!-- ════ Stats Bar ════ -->
        <div class="bg-[#F5F9FC] py-12 border-t border-gray-100">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-200/70 text-center">

                    <div class="flex flex-col items-center justify-center py-4 px-6">
                        <span
                            class="text-[40px] lg:text-[52px] font-black text-[#1E3A5F] leading-none mb-2">$250M</span>
                        <span class="text-[#5A7A94] font-medium text-[13px] leading-snug">In
                            Healthcare<br />Funding</span>
                    </div>

                    <div class="flex flex-col items-center justify-center py-4 px-6">
                        <span class="text-[40px] lg:text-[52px] font-black text-[#1E3A5F] leading-none mb-2">20M+</span>
                        <span class="text-[#5A7A94] font-medium text-[13px] leading-snug">Patients
                            Served<br />Globally</span>
                    </div>

                    <div class="flex flex-col items-center justify-center py-4 px-6">
                        <span class="text-[40px] lg:text-[52px] font-black text-[#1E3A5F] leading-none mb-2">95%</span>
                        <span class="text-[#5A7A94] font-medium text-[13px] leading-snug">Patient
                            Satisfaction<br />Rate</span>
                    </div>

                    <div class="flex flex-col items-center justify-center py-4 px-6">
                        <span class="text-[40px] lg:text-[52px] font-black text-[#1E3A5F] leading-none mb-2">200+</span>
                        <span
                            class="text-[#5A7A94] font-medium text-[13px] leading-snug">Medical<br />Professionals</span>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>
