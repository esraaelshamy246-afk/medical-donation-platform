<script setup>
import StatusPill from "./StatusPill.vue";

defineProps({
  medicine: { type: Object, required: true },
});
defineEmits(["view"]);
</script>

<template>
  <div
    class="group flex flex-col overflow-hidden rounded-2xl border border-[#0F5B4C]/10 bg-white shadow-[0_1px_2px_rgba(15,91,76,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-14px_rgba(15,91,76,0.28)]"
  >
    <div class="relative h-44 w-full overflow-hidden bg-[#0F5B4C]/5">
      <img
        :src="medicine.image"
        :alt="medicine.name"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div class="absolute left-3 top-3">
        <StatusPill :status="medicine.status" />
      </div>
    </div>

    <div class="flex flex-1 flex-col gap-2.5 p-5">
      <h3 class="font-serif text-[17px] leading-tight text-[#1C2B27]">
        {{ medicine.name }}
      </h3>

      <span class="w-fit rounded-full bg-[#1F3A5F]/8 px-2.5 py-0.5 text-[11px] font-semibold text-[#1F3A5F]">
        {{ medicine.category }}
      </span>

      <div class="mt-1 grid grid-cols-2 gap-y-1.5 text-[13px] text-[#1C2B27]/70">
        <div class="flex items-center gap-1.5">
          <svg class="h-[13px] w-[13px] text-[#B5842A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />
          </svg>
          {{ medicine.quantity }} {{ medicine.unit }}
        </div>
        <div class="flex items-center gap-1.5">
          <svg class="h-[13px] w-[13px] text-[#B5842A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {{ medicine.location }}
        </div>
        <div class="col-span-2 flex items-center gap-1.5">
          <svg class="h-[13px] w-[13px] text-[#B5842A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Expires {{ medicine.expiry }}
        </div>
      </div>

      <button
        @click="$emit('view', medicine)"
        class="mt-3 w-full rounded-full bg-[#0F5B4C] py-2.5 text-[13px] font-semibold text-[#F7F3E8] transition hover:bg-[#0C4A3E]"
      >
        View Details
      </button>
    </div>
  </div>
</template>
