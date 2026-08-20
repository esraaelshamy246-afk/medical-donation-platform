<template>
  <div class="card card-custom h-100 border-0 p-2" :class="{ 'urgent-card': request.isUrgent }">
    <div class="card-body d-flex flex-column">
      <!-- Urgent Badge -->
      <div v-if="request.isUrgent" class="align-self-end mb-2">
        <span class="badge badge-urgent px-3 py-1.5 rounded-pill fs-7">
          🔥 Urgent Case
        </span>
      </div>

      <h5 class="card-title fw-bold text-dark mb-1">{{ request.product || request.medicineName }}</h5>
      <p class="text-muted small mb-3">
        Patient: <span class="fw-semibold text-primary-blue">{{ request.patientName || 'Reem Mohamed' }}</span>
      </p>

      <p class="card-text text-secondary mb-4 flex-grow-1">
        {{ request.description }}
      </p>

      <div class="d-flex flex-wrap gap-2 mb-3">
        <span class="badge bg-blue-light text-blue border border-blue-light px-3 py-1.5 rounded-pill">
          {{ request.category }}
        </span>
        <span 
          class="badge px-3 py-1.5 rounded-pill" 
          :class="request.status === 'Pending' ? 'bg-amber-light text-amber border border-amber-light' : 'bg-green-light text-green border border-green-light'"
        >
          {{ request.status === 'Pending' ? 'Pending' : 'Fulfilled' }}
        </span>
      </div>

      <div class="p-3 bg-blue-subtle-bg rounded-3 text-secondary small mb-3 border border-blue-subtle">
        <div class="d-flex justify-content-between mb-1">
          <span>📍 City:</span>
          <span class="fw-semibold text-dark">{{ request.location }}</span>
        </div>
        <div class="d-flex justify-content-between">
          <span>📞 Phone:</span>
          <span class="fw-semibold text-dark">{{ request.phone || '01098765432' }}</span>
        </div>
      </div>

      <button class="btn btn-blue-action w-100 fw-semibold rounded-3 py-2 mt-auto" @click="showDetails">
        View Details
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  request: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['details'])

function showDetails() {
  emit('details', props.request)
}
</script>

<style scoped>
.card-custom {
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card-custom:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.12);
}

.text-primary-blue {
  color: #1d4ed8;
}

.urgent-card {
  border: 1.5px solid #fca5a5 !important;
  background: linear-gradient(180deg, #fff5f5 0%, #ffffff 100%);
}

.badge-urgent {
  background-color: #fee2e2;
  color: #dc2626;
  border: 1px solid #fca5a5;
  font-weight: 600;
}
.bg-blue-light { background-color: #eff6ff; }
.text-blue { color: #1d4ed8; }
.border-blue-light { border-color: #dbeafe; }

.bg-blue-subtle-bg { background-color: #f8fafc; }
.border-blue-subtle { border-color: #e2e8f0; }

.bg-amber-light { background-color: #fef3c7; }
.text-amber { color: #d97706; }
.border-amber-light { border-color: #fde68a; }

.bg-green-light { background-color: #dcfce7; }
.text-green { color: #15803d; }
.border-green-light { border-color: #bbf7d0; }


.btn-blue-action {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #ffffff;
  border: none;
  transition: all 0.2s ease;
}

.btn-blue-action:hover {
  background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
  color: #ffffff;
}
</style>
