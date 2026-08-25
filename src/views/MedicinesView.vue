<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import MedicineList from "../components/MedicineList.vue";
import MedicineDetails from "../components/MedicineDetails.vue";

const router = useRouter();

const selectedMedicine = ref(null);

const isLoggedIn = ref(!!localStorage.getItem("user"));

function refreshLogin() {
  isLoggedIn.value = !!localStorage.getItem("user");
}

function showDetails(medicine) {
  console.log("SELECTED MEDICINE IN VIEW:", medicine);
  selectedMedicine.value = medicine;
}

function backToMedicines() {
  selectedMedicine.value = null;
}

function goDonate() {
  router.push("/donate");
}

function goStatus() {
  router.push("/dashboard");
}

function requestLogin() {
  router.push("/auth");
}
</script>

<template>
  <MedicineDetails
    v-if="selectedMedicine"
    :medicine="selectedMedicine"
    :isLoggedIn="isLoggedIn"
    @back="backToMedicines"
    @request-login="requestLogin"
  />

  <MedicineList
    v-else
    @view="showDetails"
    @go-donate="goDonate"
    @go-status="goStatus"
  />
</template>