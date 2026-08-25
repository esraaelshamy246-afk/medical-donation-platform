<script setup>
defineEmits(["close", "login"]);
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#1C2B27]/50 p-6">
    <div class="w-full max-w-sm rounded-2xl bg-white p-7 text-center shadow-2xl">
      <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0F5B4C]/10">
        <svg class="h-[22px] w-[22px] text-[#0F5B4C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
        </svg>
      </div>
      <h3 class="font-serif text-[20px] text-[#1C2B27]">Sign in required</h3>
      <p class="mt-2 text-[13px] text-[#1C2B27]/60">
        Please sign in to your account to request this donation.
      </p>
      <div class="mt-6 flex gap-3">
        <button
          @click="$emit('close')"
          class="flex-1 rounded-full border border-[#0F5B4C]/20 py-2.5 text-[13px] font-semibold text-[#1C2B27]/60"
        >
          Cancel
        </button>
        <button
          @click="$emit('login')"
          class="flex-1 rounded-full bg-[#0F5B4C] py-2.5 text-[13px] font-semibold text-white hover:bg-[#0C4A3E]"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>
