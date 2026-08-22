<template>
  <div class="requests-page">

    <div class="page-header">

      <div>
        <h1>Requests</h1>
        <p>
          Find and manage medicine and medical supply requests.
        </p>
      </div>

      <button
        class="create-button"
        @click="showCreateModal = true"
      >
        + Create Request
      </button>

    </div>

    <!-- Urgent Requests -->

    <section
      v-if="urgentRequests.length"
      class="urgent-section"
    >

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

    <!-- Requests -->

    <section class="all-requests">

      <div class="section-title">
        <h2>All Requests</h2>
        <span>{{ filteredRequests.length }} requests</span>
      </div>

      <div
        v-if="filteredRequests.length"
        class="requests-grid"
      >

        <RequestCard
          v-for="request in filteredRequests"
          :key="request.id"
          :request="request"
          @view="selectedRequest = $event"
        />

      </div>

      <div
        v-else
        class="empty-state"
      >
        <h3>No requests found</h3>
        <p>
          Try changing your search or filter options.
        </p>
      </div>

    </section>

    <!-- Create Request -->

    <CreateRequestModal
      v-if="showCreateModal"
      @close="showCreateModal = false"
      @submit="addRequest"
    />

    <!-- Request Details -->

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
    description:
      'Needed for patients in the medical center.'
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
    description:
      'Required urgently for the medical team.'
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
    description:
      'Needed for regular patient checkups.'
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
    description:
      'Needed for patients who require regular insulin.'
  }
])

const urgentRequests = computed(() => {
  return requests.value.filter(
    request => request.priority === 'Urgent'
  )
})

const filteredRequests = computed(() => {
  return requests.value.filter(request => {

    const productMatch =
      request.product
        .toLowerCase()
        .includes(
          filters.value.product.toLowerCase()
        )

    const categoryMatch =
      !filters.value.category ||
      request.category === filters.value.category

    const locationMatch =
      request.location
        .toLowerCase()
        .includes(
          filters.value.location.toLowerCase()
        )

    const priorityMatch =
      !filters.value.priority ||
      request.priority === filters.value.priority

    const statusMatch =
      !filters.value.status ||
      request.status === filters.value.status

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
  alert(
    `Your donation offer was sent for ${request.product}.`
  )
}
</script>

<style scoped>
.requests-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 35px;
  background: #f8faf9;
  min-height: 100vh;
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
}

.page-header p {
  color: #777;
  margin-top: 8px;
}

.create-button {
  border: none;
  background: #2f7d5a;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
}

.urgent-section {
  margin-bottom: 35px;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.section-title h2 {
  margin: 0;
}

.section-title span {
  color: #777;
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
  border-radius: 10px;
}

.empty-state p {
  color: #777;
}

:deep(.request-card) {
  background: white;
  border: 1px solid #e4e8e5;
  border-radius: 10px;
  padding: 20px;
}

:deep(.card-top) {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

:deep(.request-card h3) {
  margin: 0 0 5px;
}

:deep(.category) {
  color: #777;
  font-size: 13px;
}

:deep(.request-info p) {
  color: #555;
  margin: 9px 0;
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
  background: #2f7d5a;
  color: white;
  padding: 9px 14px;
  border-radius: 6px;
  cursor: pointer;
}

:deep(.urgent-badge) {
  color: #c62828;
  background: #fdeaea;
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: bold;
}

:deep(.status) {
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 12px;
  background: #eee;
}

:deep(.pending) {
  background: #fff3cd;
}

:deep(.under-review) {
  background: #dbeafe;
}

:deep(.matched) {
  background: #d1fae5;
}

:deep(.completed) {
  background: #e5e7eb;
}

:deep(.urgent-card) {
  background: #fff8f8;
  border: 1px solid #f1c1c1;
  border-left: 5px solid #d32f2f;
  border-radius: 8px;
  padding: 20px;
}

:deep(.urgent-title) {
  color: #c62828;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
}

:deep(.urgent-info p) {
  margin: 8px 0;
  color: #555;
}

:deep(.filter-box) {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  background: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
}

:deep(.filter-box input),
:deep(.filter-box select) {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 6px;
}

:deep(.modal-overlay),
:deep(.details-overlay) {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
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
  border-radius: 12px;
}

:deep(.close-button) {
  position: absolute;
  right: 18px;
  top: 12px;
  border: none;
  background: none;
  font-size: 28px;
  cursor: pointer;
}

:deep(.modal-subtitle) {
  color: #777;
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
  font-weight: 500;
}

:deep(.form-group input),
:deep(.form-group select),
:deep(.form-group textarea) {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

:deep(.priority-options) {
  display: flex;
  gap: 25px;
}

:deep(.submit-button),
:deep(.donate-button) {
  width: 100%;
  border: none;
  background: #2f7d5a;
  color: white;
  padding: 12px;
  border-radius: 7px;
  margin-top: 20px;
  cursor: pointer;
}

:deep(.details-header) {
  display: flex;
  justify-content: space-between;
}

:deep(.details-category) {
  color: #777;
  font-size: 13px;
}

:deep(.details-grid) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 25px;
}

:deep(.detail-item) {
  background: #f6f7f7;
  padding: 15px;
  border-radius: 7px;
}

:deep(.detail-item span) {
  display: block;
  color: #777;
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
