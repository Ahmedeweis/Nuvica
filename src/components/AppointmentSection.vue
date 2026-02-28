<template>
    <section class="py-24 bg-[#EBF0F9] font-['Plus_Jakarta_Sans',sans-serif]">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <!-- Left: Text Content -->
                <div class="flex flex-col items-start">
                    <div
                        class="inline-block bg-[#3AE079] text-[#0A2D55] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 shadow-sm">
                        APPOINTMENT
                    </div>
                    <h2
                        class="text-4xl lg:text-5xl font-black text-[#1E3A5F] leading-tight uppercase tracking-tight mb-6">
                        NUVICA MEDICAL<br />HOSPITAL
                    </h2>
                    <p class="text-[#4A6581] font-semibold text-base lg:text-lg max-w-sm leading-relaxed">
                        From Outpatient Services To Major Surgeries, Nuvica Ensures Expert Care With Minimal Wait Time.
                    </p>
                </div>

                <!-- Right: Form Card -->
                <div class="bg-white rounded-[32px] p-10 shadow-xl">
                    <h3 class="text-[#1E3A5F] text-3xl font-bold mb-2">Book An Appointment</h3>
                    <div class="h-px bg-gray-100 my-6"></div>

                    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">

                        <!-- Row 1: Department + Doctor -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div
                                class="relative flex items-center gap-3 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                                <div class="bg-[#1E3A5F] p-4 self-stretch flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"
                                        stroke-width="2">
                                        <path
                                            d="M9 12h6M12 9v6M8 21h8a5 5 0 0 0 5-5V10l-6-7H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5z"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <select v-model="form.department"
                                    class="flex-1 appearance-none bg-transparent text-[#4A6581] text-sm font-medium pr-8 py-4 focus:outline-none cursor-pointer">
                                    <option value="" disabled selected>Select Department</option>
                                    <option>Cardiology</option>
                                    <option>Neurology</option>
                                    <option>Orthopedics</option>
                                    <option>Gastroenterology</option>
                                    <option>Pediatrics</option>
                                    <option>Gynecology & Obstetrics</option>
                                    <option>Urology</option>
                                    <option>Radiology</option>
                                </select>
                                <svg class="absolute right-3 pointer-events-none text-[#4A6581]" width="14" height="14"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M6 9L12 15L18 9" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div
                                class="relative flex items-center gap-3 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                                <div class="bg-[#1E3A5F] p-4 self-stretch flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"
                                        stroke-width="2">
                                        <path d="M6 3v4a6 6 0 0 0 12 0V3M12 19v2M8 21h8" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <circle cx="12" cy="17" r="1" fill="white" />
                                    </svg>
                                </div>
                                <select v-model="form.doctor"
                                    class="flex-1 appearance-none bg-transparent text-[#4A6581] text-sm font-medium pr-8 py-4 focus:outline-none cursor-pointer">
                                    <option value="" disabled selected>Select Doctor</option>
                                    <option>Dr. Hamida Jannat</option>
                                    <option>Dr. Mehidi Hasan</option>
                                    <option>Dr. Haseeb Hossain</option>
                                    <option>Dr. Alex Rivera</option>
                                </select>
                                <svg class="absolute right-3 pointer-events-none text-[#4A6581]" width="14" height="14"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M6 9L12 15L18 9" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </div>

                        <!-- Row 2: Patient Name (full width) -->
                        <div
                            class="flex items-center gap-3 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                            <div class="bg-[#1E3A5F] p-4 self-stretch flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"
                                    stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <circle cx="12" cy="7" r="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <input v-model="form.name" type="text" placeholder="Patient Name"
                                class="flex-1 bg-transparent text-[#4A6581] text-sm font-medium py-4 focus:outline-none placeholder-[#4A6581]/60" />
                        </div>

                        <!-- Row 3: Contact + Email -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div
                                class="flex items-center gap-3 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                                <div class="bg-[#1E3A5F] p-4 self-stretch flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"
                                        stroke-width="2">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <input v-model="form.phone" type="tel" placeholder="Contact Number"
                                    class="flex-1 bg-transparent text-[#4A6581] text-sm font-medium py-4 focus:outline-none placeholder-[#4A6581]/60" />
                            </div>

                            <div
                                class="flex items-center gap-3 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                                <div class="bg-[#1E3A5F] p-4 self-stretch flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"
                                        stroke-width="2">
                                        <path
                                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <polyline points="22,6 12,13 2,6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <input v-model="form.email" type="email" placeholder="Email Address"
                                    class="flex-1 bg-transparent text-[#4A6581] text-sm font-medium py-4 focus:outline-none placeholder-[#4A6581]/60" />
                            </div>

                        </div>

                        <!-- Row 4: Date + Time -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div
                                class="relative flex items-center gap-3 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                                <div class="bg-[#1E3A5F] p-4 self-stretch flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"
                                        stroke-width="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <line x1="16" y1="2" x2="16" y2="6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <line x1="8" y1="2" x2="8" y2="6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <line x1="3" y1="10" x2="21" y2="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <select v-model="form.date"
                                    class="flex-1 appearance-none bg-transparent text-[#4A6581] text-sm font-medium pr-8 py-4 focus:outline-none cursor-pointer">
                                    <option value="" disabled selected>Select Date</option>
                                    <option v-for="d in availableDates" :key="d" :value="d">{{ d }}</option>
                                </select>
                                <svg class="absolute right-3 pointer-events-none text-[#4A6581]" width="14" height="14"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M6 9L12 15L18 9" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div
                                class="relative flex items-center gap-3 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                                <div class="bg-[#1E3A5F] p-4 self-stretch flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"
                                        stroke-width="2">
                                        <circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <polyline points="12 6 12 12 16 14" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <select v-model="form.time"
                                    class="flex-1 appearance-none bg-transparent text-[#4A6581] text-sm font-medium pr-8 py-4 focus:outline-none cursor-pointer">
                                    <option value="" disabled selected>Select Time</option>
                                    <option>09:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>01:00 PM</option>
                                    <option>02:00 PM</option>
                                    <option>03:00 PM</option>
                                    <option>04:00 PM</option>
                                </select>
                                <svg class="absolute right-3 pointer-events-none text-[#4A6581]" width="14" height="14"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M6 9L12 15L18 9" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </div>

                        <!-- Submit -->
                        <div class="mt-4 flex justify-center">
                            <button type="submit"
                                class="bg-[#1E3A5F] hover:bg-[#0A2D55] text-white font-bold uppercase tracking-widest text-sm px-14 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 focus:outline-none">
                                BOOK APPOINTMENT
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    department: '',
    doctor: '',
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
});

// Generate next 30 available dates
const availableDates = [];
const today = new Date();
for (let i = 1; i <= 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    availableDates.push(d.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }));
}

const handleSubmit = () => {
    console.log('Appointment booked:', form.value);
    // TODO: Connect to backend / send email
};
</script>
