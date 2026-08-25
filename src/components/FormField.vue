<script setup>
defineProps({
  label: { type: String, required: true },
  required: { type: Boolean, default: false },
});
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label class="text-[11px] font-semibold uppercase tracking-wider text-[#1C2B27]/45">
      {{ label }} <span v-if="required" class="text-[#9A3B34]">*</span>
    </label>
    <slot />
  </div>
</template>
