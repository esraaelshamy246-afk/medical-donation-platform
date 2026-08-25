<script setup>
import { ref, computed } from "vue";
import medicinesData from "../data/medicines.json";
import SearchBar from "./SearchBar.vue";
import Filter from "./Filter.vue";
import MedicineCard from "./MedicineCard.vue";

const emit = defineEmits(["view", "go-donate", "go-status"]);
function handleView(medicine) {
  console.log("MEDICINE LIST RECEIVED:", medicine);
  emit("view", medicine);
}

// In a real app this would come from an API call; for now it's the local JSON file.
const medicines = ref(medicinesData);

const query = ref("");
const filters = ref({ category: "", location: "", status: "" });
const sort = ref("dateAdded");

const results = computed(() => {
  let list = medicines.value.filter((m) => {
    const matchesQuery = m.name.toLowerCase().includes(query.value.trim().toLowerCase());
    const matchesCategory = !filters.value.category || m.category === filters.value.category;
    const matchesLocation = !filters.value.location || m.location === filters.value.location;
    const matchesStatus = !filters.value.status || m.status === filters.value.status;
    return matchesQuery && matchesCategory && matchesLocation && matchesStatus;
  });

  function handleView(medicine) {
  console.log("MEDICINE LIST RECEIVED:", medicine);
  emit("view", medicine);
  }

  list = [...list].sort((a, b) => {
    if (sort.value === "expiry") {
      if (a.expiry === "—") return 1;
      if (b.expiry === "—") return -1;
      return new Date(a.expiry) - new Date(b.expiry);
    }
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  });

  return list;
});
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-10">
    <header class="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div class="mb-3 flex items-center gap-3">
          <svg class="h-[14px] w-[14px] text-[#B5842A]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a1 1 0 011 1v8h8a1 1 0 110 2h-8v8a1 1 0 11-2 0v-8H3a1 1 0 110-2h8V3a1 1 0 011-1z" />
          </svg>
          <span class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A6317]">
            Available Medical Surplus
          </span>
        </div>
        <h1 class="font-serif text-[34px] leading-[1.1] text-[#1C2B27]">Medicines &amp; Supplies</h1>
        <p class="mt-2 max-w-lg text-[14px] text-[#1C2B27]/60">
          Browse verified donations of unused medicine and medical supplies, shared by people and
          organizations near you.
        </p>
      </div>
      <div class="flex gap-3">
        <button
          @click="$emit('go-status')"
          class="rounded-full border border-[#0F5B4C]/20 bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0F5B4C] transition hover:bg-[#0F5B4C]/5"
        >
          My Donations
        </button>
        <button
          @click="$emit('go-donate')"
          class="flex items-center gap-1.5 rounded-full bg-[#B5842A] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#9C7020]"
        >
          <svg class="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Donate Surplus
        </button>
      </div>
    </header>

    <div class="mb-6 flex flex-col gap-4">
      <SearchBar v-model="query" />
      <Filter v-model:filters="filters" v-model:sort="sort" />
    </div>

    <p class="mb-4 text-[12px] font-medium uppercase tracking-wider text-[#1C2B27]/40">
      {{ results.length }} {{ results.length === 1 ? "item" : "items" }} found
    </p>

    <div v-if="results.length === 0" class="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-[#0F5B4C]/20 py-20 text-center">
      <svg class="h-[26px] w-[26px] text-[#0F5B4C]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <p class="text-[15px] font-medium text-[#1C2B27]/60">No medicines match your search.</p>
      <p class="text-[13px] text-[#1C2B27]/40">Try a different name or clear your filters.</p>
    </div>

    <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <MedicineCard
        v-for="m in results"
        :key="m.id"
        :medicine="m"
        @view="handleView"
      />
    </div>
  </div>
</template>
