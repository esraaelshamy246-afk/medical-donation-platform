<script setup>
import { ref } from "vue";
import donationsData from "./data/donations.json";

import MedicineList from "./components/MedicineList.vue";
import MedicineDetails from "./components/MedicineDetails.vue";
import DonationForm from "./components/DonationForm.vue";
import DonationStatus from "./components/DonationStatus.vue";
import LoginPrompt from "./components/LoginPrompt.vue";

// view: 'list' | 'details' | 'donate' | 'status'
const view = ref("list");
const selectedMedicine = ref(null);

// Donations mock data - lives in memory, seeded from the JSON file.
// New submissions get pushed here (not written back to the .json file,
// since that requires a real backend).
const donations = ref([...donationsData]);

const isLoggedIn = ref(false);
const showLogin = ref(false);

function goDetails(medicine) {
  selectedMedicine.value = medicine;
  view.value = "details";
}

function handleNewDonation(donation) {
  donations.value = [donation, ...donations.value];
}
</script>

<template>
  <div class="min-h-screen w-full bg-[#F7F3E8] font-sans">
    <!-- Top bar -->
    <div class="sticky top-0 z-40 border-b border-[#0F5B4C]/10 bg-[#F7F3E8]/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F5B4C]">
            <svg class="h-[15px] w-[15px] text-[#F7F3E8]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a1 1 0 011 1v8h8a1 1 0 110 2h-8v8a1 1 0 11-2 0v-8H3a1 1 0 110-2h8V3a1 1 0 011-1z" />
            </svg>
          </div>
          <span class="font-serif text-[19px] text-[#1C2B27]">ATAA</span>
        </div>
        <button
          @click="isLoggedIn = !isLoggedIn"
          class="rounded-full px-4 py-2 text-[12px] font-semibold transition"
          :class="isLoggedIn
            ? 'border border-[#0F5B4C]/20 text-[#0F5B4C]'
            : 'bg-[#1F3A5F] text-white hover:bg-[#16283F]'"
        >
          {{ isLoggedIn ? "Signed in ✓ (demo)" : "Sign In (demo)" }}
        </button>
      </div>
    </div>

    <MedicineList
      v-if="view === 'list'"
      @view="goDetails"
      @go-donate="view = 'donate'"
      @go-status="view = 'status'"
    />

    <MedicineDetails
      v-else-if="view === 'details' && selectedMedicine"
      :medicine="selectedMedicine"
      :is-logged-in="isLoggedIn"
      @back="view = 'list'"
      @request-login="showLogin = true"
    />

    <DonationForm
      v-else-if="view === 'donate'"
      @submit="handleNewDonation"
      @back="view = 'list'"
    />

    <DonationStatus
      v-else-if="view === 'status'"
      :donations="donations"
      @back="view = 'list'"
    />

    <LoginPrompt
      v-if="showLogin"
      @close="showLogin = false"
      @login="isLoggedIn = true; showLogin = false"
    />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');

.font-serif { font-family: 'Fraunces', serif; }
.font-sans { font-family: 'Inter', sans-serif; }

.input-field {
  border: 1px solid rgba(15, 91, 76, 0.15);
  border-radius: 0.75rem;
  padding: 0.7rem 0.9rem;
  font-size: 14px;
  color: #1C2B27;
  background: white;
  outline: none;
  transition: 0.15s;
}
.input-field:focus {
  border-color: rgba(15, 91, 76, 0.5);
  box-shadow: 0 0 0 4px rgba(15, 91, 76, 0.1);
}
</style>
