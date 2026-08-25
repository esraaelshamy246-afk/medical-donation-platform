<script setup>
import { ref } from "vue";
import StatusPill from "./StatusPill.vue";

const props = defineProps({
  medicine: { type: Object, required: true },
  isLoggedIn: { type: Boolean, default: false },
});
const emit = defineEmits(["back", "request-login"]);

const requested = ref(false);

function handleRequest() {
  if (!props.isLoggedIn) {
    emit("request-login");
    return;
  }

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!user.id) {
    emit("request-login");
    return;
  }

  const requests = JSON.parse(
    localStorage.getItem("user_requests") || "[]"
  );

  const newRequest = {
    id: `r${Date.now()}`,
    requesterId: user.id,
    donationId: props.medicine.id,
    productName: props.medicine.name,
    category: props.medicine.category,
    quantity: props.medicine.quantity,
    location: props.medicine.location,
    status: "Pending",
    requestedOn: new Date().toISOString().slice(0, 10),
  };

  requests.push(newRequest);

  localStorage.setItem(
    "user_requests",
    JSON.stringify(requests)
  );

  requested.value = true;
}
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-10">
    <button @click="$emit('back')" class="mb-6 flex items-center gap-1.5 text-[13px] font-semibold text-[#0F5B4C] hover:underline">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
        <path d="M15 18l-6-6 6-6" />
      </svg>
      Back to Medicines
    </button>

    <div class="overflow-hidden rounded-3xl border border-[#0F5B4C]/10 bg-white shadow-[0_1px_2px_rgba(15,91,76,0.06)] md:flex">
      <div class="relative h-64 md:h-auto md:w-2/5">
        <img :src="medicine.image" :alt="medicine.name" class="h-full w-full object-cover" />
      </div>

      <div class="flex flex-1 flex-col gap-4 p-8">
        <div class="flex items-start justify-between gap-3">
          <div>
            <span class="rounded-full bg-[#1F3A5F]/8 px-2.5 py-0.5 text-[11px] font-semibold text-[#1F3A5F]">
              {{ medicine.category }}
            </span>
            <h1 class="mt-2 font-serif text-[28px] leading-tight text-[#1C2B27]">{{ medicine.name }}</h1>
          </div>
          <StatusPill :status="medicine.status" />
        </div>

        <p class="text-[14px] leading-relaxed text-[#1C2B27]/70">{{ medicine.description }}</p>

        <dl class="mt-2 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#0F5B4C]/10 pt-5 text-[13px]">
          <div>
            <dt class="text-[10px] font-semibold uppercase tracking-wider text-[#1C2B27]/40">Quantity</dt>
            <dd class="mt-1 font-medium text-[#1C2B27]">{{ medicine.quantity }} {{ medicine.unit }}</dd>
          </div>
          <div>
            <dt class="text-[10px] font-semibold uppercase tracking-wider text-[#1C2B27]/40">Expiry Date</dt>
            <dd class="mt-1 font-medium text-[#1C2B27]">{{ medicine.expiry }}</dd>
          </div>
          <div>
            <dt class="text-[10px] font-semibold uppercase tracking-wider text-[#1C2B27]/40">Packaging Condition</dt>
            <dd class="mt-1 font-medium text-[#1C2B27]">{{ medicine.condition }}</dd>
          </div>
          <div>
            <dt class="text-[10px] font-semibold uppercase tracking-wider text-[#1C2B27]/40">Location</dt>
            <dd class="mt-1 font-medium text-[#1C2B27]">{{ medicine.location }}</dd>
          </div>
        </dl>

        <div class="mt-4">
          <div
            v-if="requested"
            class="flex items-center gap-2 rounded-full border border-[#0F5B4C]/25 bg-[#0F5B4C]/10 px-5 py-3 text-[13px] font-semibold text-[#0F5B4C]"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Request sent — the donor will be notified.
          </div>
          <button
            v-else
            @click="handleRequest"
            class="w-full rounded-full bg-[#0F5B4C] py-3.5 text-[14px] font-semibold text-[#F7F3E8] transition hover:bg-[#0C4A3E] md:w-auto md:px-8"
          >
            Request This Donation
          </button>

          <p v-if="!isLoggedIn && !requested" class="mt-2 flex items-center gap-1.5 text-[12px] text-[#1C2B27]/45">
            <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
            </svg>
            You'll be asked to sign in first.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
