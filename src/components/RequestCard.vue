<template>
  <div class="request-card">
    <div class="card-top">
      <div>
        <h3>{{ request.product }}</h3>
        <span class="category">{{ request.category }}</span>
      </div>

      <span
        v-if="request.priority === 'Urgent'"
        class="urgent-badge"
      >
        URGENT
      </span>
    </div>

    <div class="request-info">
      <p>
        <strong>Quantity:</strong>
        {{ request.quantity }}
      </p>

      <p>
        <strong>Location:</strong>
        {{ request.location }}
      </p>

      <p>
        <strong>Date:</strong>
        {{ request.date }}
      </p>
    </div>

    <div class="card-bottom">
      <RequestStatus :status="request.status" />

      <button @click="$emit('view', request)">
        View Details
      </button>
    </div>
  </div>
</template>

<script setup>
import RequestStatus from './RequestStatus.vue'

defineProps({
  request: {
    type: Object,
    required: true
  }
})

defineEmits(['view'])
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
