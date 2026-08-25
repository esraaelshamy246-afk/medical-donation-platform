<script setup>
import { reactive, ref } from "vue";
import options from "../data/options.json";
import FormField from "./FormField.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const emit = defineEmits(["submit", "back"]);

const form = reactive({
  productName: "",
  category: options.categories[0],
  quantity: "",
  expiry: "",
  location: options.locations[0],
  condition: options.conditions[0],
  description: "",
  imageName: "",
});

const submitted = ref(false);

function handleFileChange(e) {
  form.imageName = e.target.files?.[0]?.name || "";
}

function handleSubmit() {
  if (!form.productName || !form.quantity) return;

  // No backend yet: we just build the object locally and pass it up.
  // The parent adds it to the in-memory donations array (mock data),
  // it always starts as "Pending" until reviewed.
  emit("submit", {
    id: `d${Date.now()}`,
    productName: form.productName,
    category: form.category,
    quantity: Number(form.quantity) || 1,
    location: form.location,
    submittedOn: new Date().toISOString().slice(0, 10),
    status: "Pending",
  });

  submitted.value = true;
}
</script>

<template>
  <!-- Confirmation state -->
  <div v-if="submitted" class="mx-auto max-w-lg px-6 py-24 text-center">
    <div class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#B5842A]/10">
      <svg class="h-[26px] w-[26px] text-[#B5842A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    </div>
    <h2 class="font-serif text-[26px] text-[#1C2B27]">Donation submitted</h2>
    <p class="mt-2 text-[14px] text-[#1C2B27]/60">
      Your donation is now <span class="font-semibold text-[#8A6317]">Pending</span> review.
      You'll be notified once it's approved and published.
    </p>
    <button
  @click="router.push('/medicines')"
  class="mt-8 rounded-full bg-[#0F5B4C] px-6 py-3 text-[13px] font-semibold text-[#F7F3E8] hover:bg-[#0C4A3E]"
>
  Back to Medicines
</button>
  </div>

  <!-- Form state -->
  <div v-else class="mx-auto max-w-2xl px-6 py-10">
    <button
  @click="router.push('/medicines')"
  class="mb-6 flex items-center gap-1.5 text-[13px] font-semibold text-[#0F5B4C] hover:underline"
>
 Back
 </button>

    <div class="mb-3 flex items-center gap-3">
      <svg class="h-[14px] w-[14px] text-[#B5842A]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a1 1 0 011 1v8h8a1 1 0 110 2h-8v8a1 1 0 11-2 0v-8H3a1 1 0 110-2h8V3a1 1 0 011-1z" />
      </svg>
      <span class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A6317]">
        Give what you no longer need
      </span>
    </div>
    <h1 class="font-serif text-[30px] text-[#1C2B27]">Donate Medical Surplus</h1>
    <p class="mb-8 mt-2 text-[14px] text-[#1C2B27]/60">
      Every submission is reviewed before it appears publicly, to keep the platform safe and
      trustworthy for everyone.
    </p>

    <form @submit.prevent="handleSubmit" class="flex flex-col gap-5 rounded-3xl border border-[#0F5B4C]/10 bg-white p-8 shadow-[0_1px_2px_rgba(15,91,76,0.06)]">
      <FormField label="Product Name" required>
        <input v-model="form.productName" placeholder="e.g. Paracetamol 500mg" class="input-field" required />
      </FormField>

      <div class="grid grid-cols-2 gap-5">
        <FormField label="Category">
          <select v-model="form.category" class="input-field">
            <option v-for="c in options.categories" :key="c">{{ c }}</option>
          </select>
        </FormField>
        <FormField label="Quantity" required>
          <input v-model="form.quantity" type="number" min="1" placeholder="e.g. 20" class="input-field" required />
        </FormField>
      </div>

      <div class="grid grid-cols-2 gap-5">
        <FormField label="Expiry Date">
          <input v-model="form.expiry" type="date" class="input-field" />
        </FormField>
        <FormField label="Location">
          <select v-model="form.location" class="input-field">
            <option v-for="l in options.locations" :key="l">{{ l }}</option>
          </select>
        </FormField>
      </div>

      <FormField label="Condition">
        <select v-model="form.condition" class="input-field">
          <option v-for="c in options.conditions" :key="c">{{ c }}</option>
        </select>
      </FormField>

      <FormField label="Image">
        <label class="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-[#0F5B4C]/25 bg-[#FBF8F1] px-4 py-4 text-[13px] text-[#1C2B27]/50 transition hover:border-[#0F5B4C]/50">
          <svg class="h-[17px] w-[17px] text-[#0F5B4C]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="M21 15l-5-5L5 21M16 8h4M18 6v4" />
          </svg>
          {{ form.imageName || "Click to attach a photo of the item" }}
          <input type="file" accept="image/*" class="hidden" @change="handleFileChange" />
        </label>
      </FormField>

      <FormField label="Description">
        <textarea
          v-model="form.description"
          placeholder="Packaging state, storage conditions, anything the recipient should know..."
          rows="4"
          class="input-field resize-none"
        ></textarea>
      </FormField>

      <button type="submit" class="mt-2 rounded-full bg-[#B5842A] py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#9C7020]">
        Submit Donation
      </button>
    </form>
  </div>
</template>
