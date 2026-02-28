<template>
    <footer class="bg-[#EBF0F9] pt-12 pb-0 font-['Plus_Jakarta_Sans',sans-serif]">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">

            <!-- Footer Card -->
            <div class="bg-white rounded-[32px] overflow-hidden">

                <!-- Logo Row -->
                <div class="flex justify-center items-center py-12 px-8">
                    <a href="#" class="flex items-center gap-3" aria-label="Nuvica Home">
                        <!-- Heart + Plus SVG Logo -->
                        <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M40 70C40 70 10 52 10 30C10 20.06 18.06 12 28 12C33.52 12 38.46 14.56 40 17C41.54 14.56 46.48 12 52 12C61.94 12 70 20.06 70 30C70 52 40 70 40 70Z"
                                fill="#1E3A5F" />
                            <path d="M40 30V50M30 40H50" stroke="#3AE079" stroke-width="6" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span class="text-[60px] font-black text-[#1E3A5F] leading-none tracking-tight">Nuvica</span>
                    </a>
                </div>

                <div class="h-px bg-gray-100 mx-8"></div>

                <!-- Main Content Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 px-8 py-14">

                    <!-- Col 1: Newsletter + Social -->
                    <div class="lg:col-span-1 flex flex-col gap-8">
                        <!-- Subscribe Headline -->
                        <h4 class="text-[#1E3A5F] text-xl font-black uppercase leading-tight tracking-tight">
                            SUBSCRIBE TO GET THE LATEST UPDATES
                        </h4>

                        <!-- Email Input -->
                        <div
                            class="flex items-center rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-[#F4F7FB]">
                            <div class="bg-[#1E3A5F] p-3.5 self-stretch flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </div>
                            <input type="email" placeholder="Enter Your Email"
                                class="flex-1 bg-transparent text-[#4A6581] text-sm font-medium px-4 py-3.5 focus:outline-none placeholder-[#4A6581]/60" />
                        </div>

                        <!-- Social Icons -->
                        <div class="flex items-center gap-3">
                            <a href="#" aria-label="Facebook"
                                class="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white hover:bg-[#3AE079] transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram"
                                class="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white hover:bg-[#3AE079] transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn"
                                class="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white hover:bg-[#3AE079] transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="#" aria-label="YouTube"
                                class="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white hover:bg-[#3AE079] transition-colors duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"
                                        stroke="none" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Col 2: Company -->
                    <div class="flex flex-col gap-4">
                        <h5 class="text-[#1E3A5F] font-bold text-base mb-2">Company</h5>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">About
                            Us</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Careers</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Blog</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Press
                            & Media</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Contact
                            Us</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Privacy
                            Policy</a>
                    </div>

                    <!-- Col 3: Departments -->
                    <div class="flex flex-col gap-4">
                        <h5 class="text-[#1E3A5F] font-bold text-base mb-2">Departments</h5>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">General
                            Medicine</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Cardiology</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Neurology</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Pediatrics</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Orthopedics</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Emergency
                            Care</a>
                    </div>

                    <!-- Col 4: Patient Services -->
                    <div class="flex flex-col gap-4">
                        <h5 class="text-[#1E3A5F] font-bold text-base mb-2">Patient Services</h5>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Appointment
                            Booking</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Health
                            Check Packages</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Online
                            Reports</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Insurance
                            Support</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Patient
                            Portal</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">FAQs</a>
                    </div>

                    <!-- Col 5: Quick Links -->
                    <div class="flex flex-col gap-4">
                        <h5 class="text-[#1E3A5F] font-bold text-base mb-2">Quick Links</h5>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Book
                            An Appointment</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">View
                            Gallery</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Testimonials</a>
                        <a href="#"
                            class="text-[#4A6581] text-sm font-medium hover:text-[#3AE079] transition-colors duration-200">Medical
                            Articles</a>
                    </div>

                </div>

                <!-- Divider -->
                <div class="h-px bg-gray-100 mx-8"></div>

                <!-- Bottom Bar -->
                <div
                    class="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6 text-sm text-[#4A6581] font-medium">
                    <span>© Nuvica International Hospital Ltd. 2025</span>
                    <span>Design By Hamida Jannat</span>
                    <a href="#" class="hover:text-[#3AE079] transition-colors">Privacy Policy</a>
                </div>

            </div>

        </div>
    </footer>
</template>

<script setup>
</script>
