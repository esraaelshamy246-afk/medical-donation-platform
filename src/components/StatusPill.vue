<script setup>
defineProps({
  status: { type: String, required: true },
});

const styles = {
  Available: "bg-[#0F5B4C]/10 text-[#0F5B4C] border-[#0F5B4C]/25",
  Reserved: "bg-[#B5842A]/10 text-[#8A6317] border-[#B5842A]/30",
  Pending: "bg-[#B5842A]/10 text-[#8A6317] border-[#B5842A]/30",
  Approved: "bg-[#0F5B4C]/10 text-[#0F5B4C] border-[#0F5B4C]/25",
  Rejected: "bg-[#9A3B34]/10 text-[#9A3B34] border-[#9A3B34]/25",
  Completed: "bg-[#1F3A5F]/10 text-[#1F3A5F] border-[#1F3A5F]/25",
};
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide"
    :class="styles[status]"
  >
    <!-- spinner only for Pending, static icon otherwise -->
    <svg
      v-if="status === 'Pending'"
      class="h-3 w-3 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
    <svg
      v-else-if="status === 'Rejected'"
      class="h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.4"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
    <svg
      v-else-if="status === 'Reserved'"
      class="h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.4"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
    <svg
      v-else
      class="h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.4"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
    {{ status }}
  </span>
</template>
