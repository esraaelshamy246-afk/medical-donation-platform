<template>
  <div class="requests-page">

    <div class="page-header">
      <div>
        <h1>Requests</h1>
        <p>Find and manage medicine and medical supply requests.</p>
      </div>

      <button class="create-button" @click="showCreateModal = true">
        + Create Request
      </button>
    </div>

    <!-- Urgent Requests -->
    <section v-if="urgentRequests.length" class="urgent-section">
      <div class="section-title">
        <h2>Urgent Requests</h2>
        <span>{{ urgentRequests.length }} urgent</span>
      </div>

      <div class="urgent-list">
        <UrgentRequestCard
          v-for="request in urgentRequests"
          :key="request.id"
          :request="request"
          @view="selectedRequest = $event"
        />
      </div>
    </section>

    <!-- Filters -->
    <RequestFilter
      :filters="filters"
      @update:filters="filters = $event"
    />

    <!-- All Requests -->
    <section class="all-requests">
      <div class="section-title">
        <h2>All Requests</h2>
        <span>{{ filteredRequests.length }} requests</span>
      </div>

      <div v-if="filteredRequests.length" class="requests-grid">
        <RequestCard
          v-for="request in filteredRequests"
          :key="request.id"
          :request="request"
          @view="selectedRequest = $event"
        />
      </div>

      <div v-else class="empty-state">
        <h3>No requests found</h3>
        <p>Try changing your search or filter options.</p>
      </div>
    </section>

    <!-- Create Request Modal -->
    <CreateRequestModal
      v-if="showCreateModal"
      @close="showCreateModal = false"
      @submit="addRequest"
    />

    <!-- Request Details Modal -->
    <RequestDetails
      v-if="selectedRequest"
      :request="selectedRequest"
      @close="selectedRequest = null"
      @donate="offerDonation"
    />

  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

import RequestCard from '../components/RequestCard.vue'
import UrgentRequestCard from '../components/UrgentRequestCard.vue'
import RequestFilter from '../components/RequestFilter.vue'
import RequestDetails from '../components/RequestDetails.vue'
import CreateRequestModal from '../components/CreateRequestModal.vue'

const showCreateModal = ref(false)
const selectedRequest = ref(null)

const filters = ref({
  product: '',
  category: '',
  location: '',
  priority: '',
  status: ''
})

const requests = ref([
  {
    id: 1,
    product: 'Paracetamol',
    category: 'Medicine',
    quantity: 50,
    location: 'Cairo',
    date: '20/08/2026',
    priority: 'Normal',
    status: 'Pending',
    description: 'Needed for patients in the medical center.'
  },
  {
    id: 2,
    product: 'Medical Supplies',
    category: 'Medical Supplies',
    quantity: 10,
    location: 'Mansoura',
    date: '20/08/2026',
    priority: 'Urgent',
    status: 'Under Review',
    description: 'Required urgently for the medical team.'
  },
  {
    id: 3,
    product: 'Blood Pressure Monitor',
    category: 'Equipment',
    quantity: 3,
    location: 'Alexandria',
    date: '19/08/2026',
    priority: 'Normal',
    status: 'Matched',
    description: 'Needed for regular patient checkups.'
  },
  {
    id: 4,
    product: 'Insulin',
    category: 'Medicine',
    quantity: 20,
    location: 'Giza',
    date: '18/08/2026',
    priority: 'Urgent',
    status: 'Pending',
    description: 'Needed for patients who require regular insulin.'
  }
])

const urgentRequests = computed(() => {
  return requests.value.filter(request => request.priority === 'Urgent')
})

const filteredRequests = computed(() => {
  return requests.value.filter(request => {
    const productMatch = request.product
      .toLowerCase()
      .includes(filters.value.product.toLowerCase())

    const categoryMatch =
      !filters.value.category || request.category === filters.value.category

    const locationMatch = request.location
      .toLowerCase()
      .includes(filters.value.location.toLowerCase())

    const priorityMatch =
      !filters.value.priority || request.priority === filters.value.priority

    const statusMatch =
      !filters.value.status || request.status === filters.value.status

    return (
      productMatch &&
      categoryMatch &&
      locationMatch &&
      priorityMatch &&
      statusMatch
    )
  })
})

const addRequest = (newRequest) => {
  requests.value.unshift({
    id: Date.now(),
    ...newRequest
  })
  showCreateModal.value = false
}

const offerDonation = (request) => {
  alert(`Your donation offer was sent for ${request.product}.`)
}
</script>

<style scoped>
.requests-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 35px;
  background: #f8f9fa;
  min-height: 100vh;
  box-sizing: border-box;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}

.page-header h1 {
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: #264653;
}

.page-header p {
  color: #6c757d;
  margin-top: 8px;
  font-size: 15px;
}

.create-button {
  border: none;
  background: #2a9d8f;
  color: white;
  padding: 12px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.create-button:hover {
  background: #238377;
}

.urgent-section {
  margin-bottom: 35px;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.section-title h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #264653;
}

.section-title span {
  color: #6c757d;
  font-size: 14px;
}

.urgent-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.requests-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.empty-state {
  text-align: center;
  background: white;
  padding: 50px;
  border-radius: 12px;
  border: 1px solid #eef2f5;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.empty-state h3 {
  margin: 0 0 8px;
  color: #264653;
}

.empty-state p {
  color: #6c757d;
  margin: 0;
}

/* Deep Styles for Child Components */
:deep(.request-card) {
  background: white;
  border: 1px solid #eef2f5;
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

:deep(.request-card:hover) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

:deep(.card-top) {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

:deep(.request-card h3) {
  margin: 0 0 5px;
  color: #264653;
  font-size: 18px;
}

:deep(.category) {
  color: #2a9d8f;
  background-color: #e8f5f3;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

:deep(.request-info p) {
  color: #555;
  margin: 9px 0;
  font-size: 14px;
}

:deep(.card-bottom) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

:deep(.card-bottom button),
:deep(.urgent-card button) {
  border: none;
  background: #2a9d8f;
  color: white;
  padding: 9px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: background-color 0.2s ease;
}

:deep(.card-bottom button:hover),
:deep(.urgent-card button:hover) {
  background: #238377;
}

:deep(.urgent-badge) {
  color: #e76f51;
  background: #fdf0ed;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
}

:deep(.status) {
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

:deep(.pending) {
  background: #fff3cd;
  color: #856404;
}

:deep(.under-review) {
  background: #e0f2fe;
  color: #0369a1;
}

:deep(.matched) {
  background: #d1fae5;
  color: #065f46;
}

:deep(.completed) {
  background: #f3f4f6;
  color: #374151;
}

:deep(.urgent-card) {
  background: #fffafa;
  border: 1px solid #fce8e6;
  border-left: 5px solid #e76f51;
  border-radius: 10px;
  padding: 22px;
  box-shadow: 0 4px 15px rgba(231, 111, 81, 0.05);
}

:deep(.urgent-title) {
  color: #e76f51;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

:deep(.urgent-info p) {
  margin: 8px 0;
  color: #555;
  font-size: 14px;
}

:deep(.filter-box) {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  background: white;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #eef2f5;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

:deep(.filter-box input),
:deep(.filter-box select) {
  border: 1px solid #e2e8f0;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  color: #264653;
  outline: none;
  background-color: #fff;
}

:deep(.filter-box input:focus),
:deep(.filter-box select:focus) {
  border-color: #2a9d8f;
}

:deep(.modal-overlay),
:deep(.details-overlay) {
  position: fixed;
  inset: 0;
  background: rgba(38, 70, 83, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

:deep(.request-modal),
:deep(.details-modal) {
  position: relative;
  background: white;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

:deep(.close-button) {
  position: absolute;
  right: 20px;
  top: 18px;
  border: none;
  background: none;
  font-size: 24px;
  color: #8d99ae;
  cursor: pointer;
}

:deep(.close-button:hover) {
  color: #264653;
}

:deep(.modal-subtitle) {
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 20px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

:deep(.form-group) {
  margin-top: 15px;
}

:deep(.form-group label) {
  display: block;
  margin-bottom: 7px;
  font-weight: 600;
  font-size: 14px;
  color: #264653;
}

:deep(.form-group input),
:deep(.form-group select),
:deep(.form-group textarea) {
  width: 100%;
  box-sizing: border-box;
  padding: 11px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
}

:deep(.form-group input:focus),
:deep(.form-group select:focus),
:deep(.form-group textarea:focus) {
  border-color: #2a9d8f;
}

:deep(.priority-options) {
  display: flex;
  gap: 25px;
}

:deep(.submit-button),
:deep(.donate-button) {
  width: 100%;
  border: none;
  background: #2a9d8f;
  color: white;
  padding: 12px;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  transition: background-color 0.2s ease;
}

:deep(.submit-button:hover),
:deep(.donate-button:hover) {
  background: #238377;
}

:deep(.details-header) {
  display: flex;
  justify-content: space-between;
}

:deep(.details-category) {
  color: #2a9d8f;
  font-size: 13px;
  font-weight: 600;
}

:deep(.details-grid) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 25px;
}

:deep(.detail-item) {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #eef2f5;
}

:deep(.detail-item span) {
  display: block;
  color: #8d99ae;
  font-size: 12px;
  margin-bottom: 5px;
}

:deep(.description) {
  margin-top: 25px;
}

:deep(.description p) {
  color: #555;
  line-height: 1.6;
}

@media (max-width: 800px) {
  .requests-page {
    padding: 20px;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .requests-grid,
  .urgent-list {
    grid-template-columns: 1fr;
  }

  :deep(.filter-box) {
    grid-template-columns: 1fr;
  }
}
</style>
