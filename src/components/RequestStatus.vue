<template>
  <span :class="['status-badge', statusClass]">
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
  return props.status.toLowerCase().replace(/\s+/g, '-')
})
</script>

<style scoped>
.status-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 0.3px;
}


.status-badge.pending {
  background-color: #fff3cd;
  color: #856404;
}


.status-badge.under-review {
  background-color: #ffe8cc;
  color: #d97706;
}


.status-badge.matched {
  background-color: #f3e8ff;
  color: #7e22ce;
}


.status-badge.completed {
  background-color: #e8f5f3;
  color: #2a9d8f;
}

.status-badge {
  background-color: #f1f3f5;
  color: #495057;
}
</style>

