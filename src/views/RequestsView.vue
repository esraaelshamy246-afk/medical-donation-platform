<template>
  <div class="main-wrapper py-5 min-vh-100">
    <div class="container">
      <!-- Header Banner -->
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 p-4 header-card">
        <div>
          <h2 class="fw-bold text-dark mb-1">Medical Requests</h2>
          <p class="text-secondary mb-0">Browse and manage patient requests for medicine and supplies</p>
        </div>
        <button class="btn btn-add text-white px-4 py-2.5 rounded-3 fw-semibold shadow-sm" @click="openModal = true">
          + Add New Request
        </button>
      </div>

      <!-- Search & Filters Block -->
      <div class="p-4 mb-4 filter-card">
        <div class="row g-3">
          <div class="col-md-4">
            <input v-model="search" type="text" class="form-control form-control-custom" placeholder="Search by medicine or location..." />
          </div>

          <div class="col-md-3">
            <select v-model="selectedCategory" class="form-select form-control-custom">
              <option value="">All Categories</option>
              <option value="Medicines">Medicines</option>
              <option value="Medical Supplies">Medical Supplies</option>
              <option value="Medical Equipment">Medical Equipment</option>
            </select>
          </div>

          <div class="col-md-3">
            <select v-model="selectedStatus" class="form-select form-control-custom">
              <option value="">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Fulfilled">Fulfilled</option>
            </select>
          </div>

          <div class="col-md-2 d-flex align-items-center justify-content-md-end">
            <div class="form-check form-switch ms-1">
              <input v-model="onlyUrgent" class="form-check-input" type="checkbox" id="urgentOnly" />
              <label class="form-check-label text-danger fw-bold ms-1" for="urgentOnly">
                Urgent Only
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Requests Grid with Transition Animation -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-teal" role="status"></div>
        <p class="text-muted mt-2">Loading data...</p>
      </div>

      <TransitionGroup name="list" tag="div" class="row g-4" v-else>
        <div v-for="item in filteredRequests" :key="item.id" class="col-md-6 col-lg-4">
          <RequestCard :request="item" @details="handleDetails" />
        </div>
      </TransitionGroup>

      <div v-if="!loading && filteredRequests.length === 0" class="col-12 text-center py-5 empty-card mt-4">
        <p class="text-muted mb-0 fs-5">No matching requests found.</p>
      </div>

      <CreateRequestModal
        :is-open="openModal"
        @close="openModal = false"
        @created="onCreated"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import RequestCard from '../components/RequestCard.vue'
import CreateRequestModal from '../components/CreateRequestModal.vue'

const requests = ref([])
const loading = ref(false)
const openModal = ref(false)

const search = ref('')
const selectedCategory = ref('')
const selectedStatus = ref('')
const onlyUrgent = ref(false)

async function getRequests() {
  loading.value = true
  try {
    const res = await fetch('http://localhost:3000/requests')
    const data = await res.json()
    requests.value = data
  } catch (err) {
    console.log('Error fetching requests:', err)
  } finally {
    loading.value = false
  }
}

const filteredRequests = computed(() => {
  return requests.value.filter(item => {
    const matchSearch = !search.value || 
      item.medicineName?.toLowerCase().includes(search.value.toLowerCase()) ||
      item.location?.toLowerCase().includes(search.value.toLowerCase())

    const matchCategory = !selectedCategory.value || item.category === selectedCategory.value
    const matchStatus = !selectedStatus.value || item.status === selectedStatus.value
    const matchUrgent = !onlyUrgent.value || item.isUrgent === true

    return matchSearch && matchCategory && matchStatus && matchUrgent
  })
})

function onCreated(newItem) {
  requests.value.push(newItem)
}

function handleDetails(req) {
  alert(`Request: ${req.medicineName}\nPhone: ${req.phone}`)
}

onMounted(() => {
  getRequests()
})
</script>

<style scoped>
.main-wrapper {
  background-color: #f1f5f9;
}

.header-card, .filter-card, .empty-card {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.form-control-custom {
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background-color: #f8fafc;
}

.form-control-custom:focus {
  background-color: #ffffff;
  border-color: #0f766e;
  box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);
}

.btn-add {
  background-color: #0f766e;
  border: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-add:hover {
  background-color: #115e59;
  transform: translateY(-2px);
}

.text-teal {
  color: #0f766e;
}

/* Animations for Smooth Filtering */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>