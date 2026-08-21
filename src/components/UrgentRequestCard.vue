<template>
  <div class="urgent-card">
    <div class="urgent-title">
      🔴 URGENT REQUEST
    </div>

    <h3>{{ request.product }}</h3>

    <div class="urgent-info">
      <p>
        <strong>Category:</strong>
        {{ request.category }}
      </p>

      <p>
        <strong>Quantity:</strong>
        {{ request.quantity }}
      </p>

      <p>
        <strong>Location:</strong>
        {{ request.location }}
      </p>
    </div>

    <button @click="$emit('view', request)">
      View Request
    </button>
  </div>
</template>

<script setup>
defineProps({
  request: {
    type: Object,
    required: true
  }
})

defineEmits(['view'])
</script>
