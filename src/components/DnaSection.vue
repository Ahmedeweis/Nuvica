<template>
    <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16 bg-[#F8FAFC]">

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <!-- Primary DNA Hero Card (Spans 2 columns on desktop) -->
            <div
                class="lg:col-span-2 relative rounded-[32px] overflow-hidden bg-white shadow-sm flex flex-col min-h-[460px] group">
                <!-- Background Image -->
                <img src="/images/big_dna_helix.png" alt="DNA Testing"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <!-- Header Text -->
                <div class="relative z-10 w-fit">
                    <div class="bg-white rounded-br-[32px] rounded-tl-[32px] pr-12 pb-6 pt-6 pl-8">
                        <h2
                            class="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#1E3A5F] leading-[1.1] uppercase tracking-tight max-w-sm">
                            WE OFFER PRO DNA<br />TESTING
                        </h2>
                    </div>
                    <!-- Corner curve illusion -->
                    <div class="absolute w-8 h-8 bg-transparent bottom-0 -right-8"
                        style="box-shadow: -15px 15px 0 0 white; border-bottom-left-radius: 20px;"></div>
                    <div class="absolute w-8 h-8 bg-transparent -bottom-8 left-0"
                        style="box-shadow: -15px -15px 0 0 white; border-top-left-radius: 20px;"></div>
                </div>

                <div class="flex-grow"></div>

                <!-- Bottom Controls -->
                <div
                    class="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end p-6 w-full gap-4">

                    <!-- Reports Badge -->
                    <div
                        class="bg-white rounded-full pl-6 pr-2 py-2 flex items-center justify-between shadow-md gap-4 min-w-[200px]">
                        <span class="text-[#1E3A5F] font-semibold text-sm">DNA Reports: 5.5K</span>
                        <div class="bg-[#0D3866] rounded-full w-9 h-9 flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path
                                    d="M12 4c-2.4 0-4.4 2-4.4 4.4 0 2.4 2 4.4 4.4 4.4s4.4-2 4.4-4.4C16.4 6 14.4 4 12 4z" />
                                <path d="M6 14c-1.5 2-3 3-3 5 0 1.5 1.5 3 3 3s5-1.5 5-3v-5" />
                                <path d="M18 14c1.5 2 3 3 3 5 0 1.5-1.5 3-3 3s-5-1.5-5-3v-5" />
                            </svg>
                        </div>
                    </div>

                    <!-- Get Started Button -->
                    <button
                        class="bg-white rounded-full pl-6 pr-2 py-2 flex items-center justify-between shadow-md gap-6 hover:shadow-lg transition-shadow group/btn">
                        <span class="text-[#1E3A5F] font-bold text-sm">Get Started</span>
                        <div
                            class="bg-[#3AE079] rounded-full w-9 h-9 flex items-center justify-center text-white transform group-hover/btn:-translate-y-1 transition-transform">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M5 19L19 5M19 5V15M19 5H9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

            <!-- Right Column Stack -->
            <div class="flex flex-col gap-6">

                <!-- Trusted & Secure Card -->
                <div
                    class="relative bg-gradient-to-br from-[#E8F1FC] to-[#D5E1F4] rounded-[32px] p-8 min-h-[220px] overflow-hidden group shadow-sm">
                    <div class="relative z-10 w-[60%]">
                        <h3 class="text-[#1E3A5F] text-[26px] leading-[1.1] font-bold">Trusted<br />& Secure</h3>
                        <span class="text-[#3A86FF] text-[26px] leading-[1.1] font-bold block mt-1">Testing</span>
                    </div>
                    <!-- Doctor Image -->
                    <img src="/images/doctor_white_bg.png" alt="Doctor"
                        class="absolute -right-4 bottom-0 w-[55%] object-cover object-top h-[110%] transition-transform duration-500 group-hover:scale-105" />
                </div>

                <!-- Accuracy Card -->
                <div
                    class="relative bg-gradient-to-br from-[#4E8AA0] to-[#255C86] rounded-[32px] p-8 min-h-[220px] overflow-hidden group shadow-sm flex flex-col justify-between">
                    <img src="/images/small_dna.png" alt="DNA Strand"
                        class="absolute -left-8 inset-y-0 h-full object-cover mix-blend-screen opacity-70 transition-transform duration-700 group-hover:scale-110" />

                    <div class="relative z-10 flex flex-col items-end text-right w-full">
                        <div class="flex items-start">
                            <span class="text-white text-[42px] font-light leading-none">99.9</span>
                            <span class="text-white text-[24px] font-medium leading-none mt-1">%</span>
                        </div>
                        <span class="text-white/90 text-xl font-medium tracking-wide">Accuracy</span>
                    </div>

                    <div class="relative z-10 w-full text-right mt-auto pt-8">
                        <span class="text-white font-medium text-sm block leading-tight">DNA Matching<br />Rate</span>
                    </div>
                </div>

            </div>

        </div>

    </section>
</template>

<script setup>
</script>
