<script setup>
defineProps({
  modelValue: { type: String, default: "" },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="relative w-full">
    <svg
      class="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#8A6317]/60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search medicines by name — e.g. Paracetamol"
      class="w-full rounded-full border border-[#0F5B4C]/15 bg-white/90 py-3.5 pl-11 pr-4 text-[15px] text-[#1C2B27] placeholder:text-[#1C2B27]/40 shadow-sm outline-none transition focus:border-[#0F5B4C]/50 focus:ring-4 focus:ring-[#0F5B4C]/10"
    />
  </div>
</template>
