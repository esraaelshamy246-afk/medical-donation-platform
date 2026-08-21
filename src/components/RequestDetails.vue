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
          <strong>{{ request.priority }}</strong>
        </div>

        <div class="detail-item">
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
