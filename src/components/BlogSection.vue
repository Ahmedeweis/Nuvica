<template>
    <section class="py-24 bg-[#F4F7FB] font-['Plus_Jakarta_Sans',sans-serif]">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">

            <!-- Section Header -->
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
                <div>
                    <div
                        class="inline-block bg-[#3AE079] text-[#0A2D55] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-sm">
                        BLOG
                    </div>
                    <h2 class="text-4xl lg:text-5xl font-black text-[#1E3A5F] leading-tight uppercase tracking-tight">
                        LATEST FROM MEDICAL<br />FRONTLINES
                    </h2>
                </div>
                <p class="text-[#4A6581] font-semibold text-base lg:text-lg max-w-sm lg:text-right">
                    Explore Our Latest Articles On Medical Breakthroughs, Smart Technologies, And Patient-First Care.
                    Stay Updated With Expert Tips.
                </p>
            </div>

            <!-- Blog Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                <!-- Card 1: AI Stethoscope -->
                <article class="group flex flex-col gap-5 cursor-pointer">
                    <div class="relative w-full h-64 rounded-[24px] overflow-hidden shadow-sm">
                        <img src="/images/blog_stethoscope.png" alt="AI Stethoscope"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <!-- Meta row -->
                    <div class="flex items-center justify-between gap-3">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span
                                class="bg-white border border-gray-200 text-[#1E3A5F] text-xs font-bold px-3 py-1 rounded-full shadow-sm">Medical
                                Devices</span>
                            <span
                                class="bg-white border border-gray-200 text-[#3AE079] text-xs font-bold px-3 py-1 rounded-full shadow-sm">Smart
                                Tools</span>
                        </div>
                        <span class="text-[#4A6581] text-xs font-semibold whitespace-nowrap">16 Feb 2025</span>
                    </div>
                    <!-- Excerpt -->
                    <h3
                        class="text-[#1E3A5F] font-bold text-base leading-snug group-hover:text-[#3AE079] transition-colors duration-300">
                        Discover How AI-Powered Stethoscopes And Diagnostic Tools Are Transforming Everyday Clinical
                        Assessments.
                    </h3>
                    <!-- Author -->
                    <div class="flex items-center gap-3 mt-auto pt-2">
                        <div class="w-8 h-8 rounded-full overflow-hidden bg-[#1E3A5F]/10 flex-shrink-0">
                            <img src="/images/doctor_female_1.png" alt="Hamida Jannat"
                                class="w-full h-full object-cover object-top" />
                        </div>
                        <span class="text-[#1E3A5F] font-semibold text-sm">Hamida Jannat</span>
                    </div>
                </article>

                <!-- Card 2: Genomics -->
                <article class="group flex flex-col gap-5 cursor-pointer">
                    <div class="relative w-full h-64 rounded-[24px] overflow-hidden shadow-sm">
                        <img src="/images/blog_dna_precision.png" alt="DNA Precision Medicine"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div class="flex items-center justify-between gap-3">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span
                                class="bg-white border border-gray-200 text-[#1E3A5F] text-xs font-bold px-3 py-1 rounded-full shadow-sm">Personalized
                                Medicine</span>
                            <span
                                class="bg-white border border-gray-200 text-[#3AE079] text-xs font-bold px-3 py-1 rounded-full shadow-sm">Genomics</span>
                        </div>
                        <span class="text-[#4A6581] text-xs font-semibold whitespace-nowrap">01 Jan 2025</span>
                    </div>
                    <h3
                        class="text-[#1E3A5F] font-bold text-base leading-snug group-hover:text-[#3AE079] transition-colors duration-300">
                        Explore The Role Of Precision Medicine And How Genomics Is Personalizing Patient Care Like Never
                        Before.
                    </h3>
                    <div class="flex items-center gap-3 mt-auto pt-2">
                        <div class="w-8 h-8 rounded-full overflow-hidden bg-[#1E3A5F]/10 flex-shrink-0">
                            <img src="/images/doctor_female_1.png" alt="Hamida Jannat"
                                class="w-full h-full object-cover object-top" />
                        </div>
                        <span class="text-[#1E3A5F] font-semibold text-sm">Hamida Jannat</span>
                    </div>
                </article>

                <!-- Card 3: Senior Care -->
                <article class="group flex flex-col gap-5 cursor-pointer">
                    <div class="relative w-full h-64 rounded-[24px] overflow-hidden shadow-sm">
                        <img src="/images/blog_senior_care.png" alt="Senior Compassionate Care"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div class="flex items-center justify-between gap-3">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span
                                class="bg-white border border-gray-200 text-[#1E3A5F] text-xs font-bold px-3 py-1 rounded-full shadow-sm">Compassionate
                                Care</span>
                            <span
                                class="bg-white border border-gray-200 text-[#3AE079] text-xs font-bold px-3 py-1 rounded-full shadow-sm">Patient</span>
                        </div>
                        <span class="text-[#4A6581] text-xs font-semibold whitespace-nowrap">24 Mar 2025</span>
                    </div>
                    <h3
                        class="text-[#1E3A5F] font-bold text-base leading-snug group-hover:text-[#3AE079] transition-colors duration-300">
                        See How Technology-Enabled Support Is Improving Life Quality For Seniors Through Seamless,
                        Dignified Care.
                    </h3>
                    <div class="flex items-center gap-3 mt-auto pt-2">
                        <div class="w-8 h-8 rounded-full overflow-hidden bg-[#1E3A5F]/10 flex-shrink-0">
                            <img src="/images/doctor_female_1.png" alt="Hamida Jannat"
                                class="w-full h-full object-cover object-top" />
                        </div>
                        <span class="text-[#1E3A5F] font-semibold text-sm">Hamida Jannat</span>
                    </div>
                </article>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>
