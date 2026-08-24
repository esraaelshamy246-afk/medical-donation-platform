<script setup>
import StatusPill from "./StatusPill.vue";

defineProps({
  donations: { type: Array, required: true },
});
defineEmits(["back"]);
</script>

<template>
  <div class="mx-auto max-w-3xl px-6 py-10">
    <button @click="$emit('back')" class="mb-6 flex items-center gap-1.5 text-[13px] font-semibold text-[#0F5B4C] hover:underline">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
        <path d="M15 18l-6-6 6-6" />
      </svg>
      Back to Medicines
    </button>

    <div class="mb-3 flex items-center gap-3">
      <svg class="h-[14px] w-[14px] text-[#B5842A]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a1 1 0 011 1v8h8a1 1 0 110 2h-8v8a1 1 0 11-2 0v-8H3a1 1 0 110-2h8V3a1 1 0 011-1z" />
      </svg>
      <span class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A6317]">
        Track Your Contributions
      </span>
    </div>
    <h1 class="mb-8 font-serif text-[30px] text-[#1C2B27]">My Donations</h1>

    <div class="flex flex-col gap-4">
      <div
        v-for="d in donations"
        :key="d.id"
        class="flex flex-col gap-3 rounded-2xl border border-[#0F5B4C]/10 bg-white p-5 shadow-[0_1px_2px_rgba(15,91,76,0.06)] sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p class="font-serif text-[17px] text-[#1C2B27]">{{ d.productName }}</p>
          <p class="mt-0.5 text-[12px] text-[#1C2B27]/50">
            {{ d.category }} · {{ d.quantity }} units · {{ d.location }} · Submitted {{ d.submittedOn }}
          </p>
        </div>
        <StatusPill :status="d.status" />
      </div>

      <div v-if="donations.length === 0" class="rounded-2xl border border-dashed border-[#0F5B4C]/20 py-16 text-center text-[14px] text-[#1C2B27]/50">
        You haven't submitted any donations yet.
      </div>
    </div>
  </div>
</template>
