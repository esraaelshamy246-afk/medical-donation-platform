<script setup>
import options from "../data/options.json";

const props = defineProps({
  filters: {
    type: Object,
    required: true, // { category: '', location: '', status: '' }
  },
  sort: { type: String, default: "dateAdded" },
});
const emit = defineEmits(["update:filters", "update:sort"]);

function updateField(field, value) {
  emit("update:filters", { ...props.filters, [field]: value });
}
</script>

<template>
  <div class="flex flex-wrap items-end gap-4 rounded-2xl border border-[#0F5B4C]/10 bg-[#FBF8F1] p-4">
    <div class="flex items-center gap-2 pb-2 pr-1 text-[#0F5B4C]">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="M4 6h16M7 12h10M10 18h4" />
      </svg>
      <span class="text-[11px] font-bold uppercase tracking-wider">Refine</span>
    </div>

    <!-- Category -->
    <div class="flex min-w-[150px] flex-col gap-1.5">
      <label class="text-[10px] font-semibold uppercase tracking-wider text-[#1C2B27]/45">Category</label>
      <select
        :value="filters.category"
        @change="updateField('category', $event.target.value)"
        class="rounded-lg border border-[#0F5B4C]/15 bg-white px-3 py-2 text-sm text-[#1C2B27] outline-none focus:border-[#0F5B4C]/50 focus:ring-2 focus:ring-[#0F5B4C]/10"
      >
        <option value="">All</option>
        <option v-for="c in options.categories" :key="c" :value="c">{{ c }}</option>
      </select>
    </div>

    <!-- Location -->
    <div class="flex min-w-[150px] flex-col gap-1.5">
      <label class="text-[10px] font-semibold uppercase tracking-wider text-[#1C2B27]/45">Location</label>
      <select
        :value="filters.location"
        @change="updateField('location', $event.target.value)"
        class="rounded-lg border border-[#0F5B4C]/15 bg-white px-3 py-2 text-sm text-[#1C2B27] outline-none focus:border-[#0F5B4C]/50 focus:ring-2 focus:ring-[#0F5B4C]/10"
      >
        <option value="">All</option>
        <option v-for="l in options.locations" :key="l" :value="l">{{ l }}</option>
      </select>
    </div>

    <!-- Availability -->
    <div class="flex min-w-[150px] flex-col gap-1.5">
      <label class="text-[10px] font-semibold uppercase tracking-wider text-[#1C2B27]/45">Availability</label>
      <select
        :value="filters.status"
        @change="updateField('status', $event.target.value)"
        class="rounded-lg border border-[#0F5B4C]/15 bg-white px-3 py-2 text-sm text-[#1C2B27] outline-none focus:border-[#0F5B4C]/50 focus:ring-2 focus:ring-[#0F5B4C]/10"
      >
        <option value="">All</option>
        <option value="Available">Available</option>
        <option value="Reserved">Reserved</option>
      </select>
    </div>

    <!-- Sort -->
    <div class="flex min-w-[170px] flex-col gap-1.5">
      <label class="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#1C2B27]/45">
        <svg class="h-[11px] w-[11px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M7 4v16m0 0l-3-3m3 3l3-3M17 20V4m0 0l3 3m-3-3l-3 3" />
        </svg>
        Sort by
      </label>
      <select
        :value="sort"
        @change="$emit('update:sort', $event.target.value)"
        class="rounded-lg border border-[#0F5B4C]/15 bg-white px-3 py-2 text-sm text-[#1C2B27] outline-none focus:border-[#0F5B4C]/50 focus:ring-2 focus:ring-[#0F5B4C]/10"
      >
        <option value="dateAdded">Recently added</option>
        <option value="expiry">Expiry date</option>
      </select>
    </div>
  </div>
</template>
