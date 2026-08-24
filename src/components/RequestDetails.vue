<template>
  <div class="details-overlay" @click.self="$emit('close')">
    <div class="details-modal">
      <button
        class="close-button"
        @click="$emit('close')"
      >
        ×
      </button>

      <div class="details-header">
        <div>
          <span class="details-category">
            {{ request.category }}
          </span>
          <h2>{{ request.product }}</h2>
        </div>

        <span
          v-if="request.priority === 'Urgent'"
          class="urgent-badge"
        >
          URGENT
        </span>
      </div>

      <div class="details-grid">
        <div class="detail-item">
          <span>Quantity</span>
          <strong>{{ request.quantity }}</strong>
        </div>

        <div class="detail-item">
          <span>Location</span>
          <strong>{{ request.location }}</strong>
        </div>

        <div class="detail-item">
          <span>Request Date</span>
          <strong>{{ request.date }}</strong>
        </div>

        <div class="detail-item">
          <span>Priority</span>
          <strong :class="{ 'urgent-text': request.priority === 'Urgent' }">
            {{ request.priority }}
          </strong>
        </div>

        <div class="detail-item full-width">
          <span>Status</span>
          <RequestStatus :status="request.status" />
        </div>
      </div>

      <div class="description">
        <h3>Description</h3>
        <p>
          {{ request.description || 'No description provided.' }}
        </p>
      </div>

      <button
        class="donate-button"
        @click="$emit('donate', request)"
      >
        Offer Donation
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

defineEmits(['close', 'donate'])
</script>

<style scoped>
.details-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(38, 70, 83, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.details-modal {
  background: #ffffff;
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  padding: 30px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid #eef2f5;
  max-height: 90vh;
  overflow-y: auto;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 26px;
  color: #777;
  cursor: pointer;
  transition: color 0.2s;
}

.close-button:hover {
  color: #264653;
}

.details-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
}

.details-category {
  display: inline-block;
  font-size: 12px;
  color: #2a9d8f;
  background-color: #e8f5f3;
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 600;
  margin-bottom: 6px;
}

h2 {
  color: #264653;
  margin: 0;
  font-size: 22px;
  font-weight: 700;
}

.urgent-badge {
  background-color: #fee2e2;
  color: #dc2626;
  border: 1px solid #fca5a5;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

.detail-item {
  background: #f8f9fa;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #eef2f5;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-item.full-width {
  grid-column: span 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.detail-item span {
  font-size: 12px;
  color: #6c757d;
  font-weight: 500;
}

.detail-item strong {
  font-size: 14px;
  color: #264653;
}

.urgent-text {
  color: #dc2626 !important;
}

.description {
  margin-bottom: 25px;
  background: #f8f9fa;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #eef2f5;
}

.description h3 {
  margin: 0 0 6px 0;
  font-size: 14px;
  color: #264653;
  font-weight: 600;
}

.description p {
  margin: 0;
  font-size: 14px;
  color: #555;
  line-height: 1.5;
}

.donate-button {
  width: 100%;
  padding: 12px;
  background: #2a9d8f;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

.donate-button:hover {
  background: #238377;
}

.donate-button:active {
  transform: scale(0.99);
}
</style>

