<template>
    <section class="py-24 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Top Row: Hospital Image + Content -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

                <!-- Left: Image & Floating Card -->
                <div class="relative z-10">
                    <div
                        class="relative w-full h-[400px] lg:h-[500px] rounded-[40px] overflow-hidden shadow-xl bg-gray-100">
                        <img src="/images/hospital_building.png" alt="Nuvica Hospital Building"
                            class="w-full h-full object-cover" />
                        <!-- Overlay to match design tone -->
                        <div class="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                    </div>

                    <!-- Floating Info Card -->
                    <div
                        class="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-8 py-10 rounded-[32px] shadow-2xl border border-white max-w-[280px]">

                        <!-- Logo row -->
                        <div class="flex items-center gap-3 mb-8">
                            <div
                                class="bg-nuvica-navy w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl pb-1 shadow-md">
                                +</div>
                            <span class="font-bold text-nuvica-navy tracking-widest uppercase text-sm">Nuvica</span>
                        </div>

                        <!-- Est Date -->
                        <div class="mb-6">
                            <span class="block text-nuvica-navy font-bold text-xl uppercase leading-none">From</span>
                            <span class="block text-nuvica-gray font-semibold text-sm mt-1">28/10/2003</span>
                        </div>

                        <!-- Text -->
                        <p class="text-nuvica-navy font-bold text-sm leading-snug">
                            Committed to your health and well-being.
                        </p>
                    </div>
                </div>

                <!-- Right: Text Content -->
                <div class="flex flex-col items-start z-10 justify-center">
                    <!-- Tag -->
                    <div
                        class="bg-nuvica-green text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-sm">
                        About Us
                    </div>

                    <!-- Headline -->
                    <h2
                        class="text-4xl lg:text-[42px] font-black text-nuvica-navy leading-tight uppercase mb-6 tracking-tight">
                        Your Nuvica Medical Hospital
                    </h2>

                    <!-- Paragraph -->
                    <p class="text-nuvica-gray font-medium text-lg leading-relaxed mb-10 max-w-[90%]">
                        We Combine Clinical Expertise, Innovative Technology, And A Patient-First Approach To Ensure
                        Accurate Diagnosis And Effective Treatment.
                    </p>

                    <!-- CTA Row -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">

                        <!-- Learn More Button -->
                        <a href="#"
                            class="group flex items-center gap-4 bg-nuvica-navy text-white px-6 py-3.5 rounded-full hover:bg-[#0A2D55] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold">
                            Learn More
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5"
                                class="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                <path d="M5 19L19 5M19 5V15M19 5H9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>

                        <!-- Contact Info -->
                        <div class="flex items-center gap-4">
                            <div class="bg-gray-100 p-3.5 rounded-full text-nuvica-gray shadow-sm">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-nuvica-navy font-bold text-sm">For Any Questions</span>
                                <span class="text-nuvica-gray font-medium text-sm">+8801616876080</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <!-- Bottom Row: Stats -->
        <div class="bg-[#F8FBFC] py-16 mt-12 border-t border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200/60">

                    <div class="flex flex-col items-center justify-center px-4">
                        <span class="text-4xl lg:text-5xl font-black text-nuvica-navy mb-2 tracking-tight">$250M</span>
                        <span class="text-nuvica-gray font-medium text-sm">In Healthcare<br />Funding</span>
                    </div>

                    <div class="flex flex-col items-center justify-center px-4">
                        <span class="text-4xl lg:text-5xl font-black text-nuvica-navy mb-2 tracking-tight">20M+</span>
                        <span class="text-nuvica-gray font-medium text-sm">Patients Served<br />Globally</span>
                    </div>

                    <div class="flex flex-col items-center justify-center px-4">
                        <span class="text-4xl lg:text-5xl font-black text-nuvica-navy mb-2 tracking-tight">95%</span>
                        <span class="text-nuvica-gray font-medium text-sm">Patient Satisfaction<br />Rate</span>
                    </div>

                    <div class="flex flex-col items-center justify-center px-4">
                        <span class="text-4xl lg:text-5xl font-black text-nuvica-navy mb-2 tracking-tight">200+</span>
                        <span class="text-nuvica-gray font-medium text-sm">Medical<br />Professionals</span>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>
