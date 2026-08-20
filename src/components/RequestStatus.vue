<template>
  <span :class="['status', statusClass]">
    {{ status }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    default: 'Pending'
  }
})

const statusClass = computed(() => {
  return props.status.toLowerCase().replace(' ', '-')
})
</script>
