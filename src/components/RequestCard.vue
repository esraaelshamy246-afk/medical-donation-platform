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
