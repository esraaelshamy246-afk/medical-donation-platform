<template>
  <div class="filter-box">

    <input
      v-model="localFilters.product"
      type="text"
      placeholder="Search product..."
    />

    <select v-model="localFilters.category">
      <option value="">All Categories</option>
      <option value="Medicine">Medicine</option>
      <option value="Medical Supplies">Medical Supplies</option>
      <option value="Equipment">Equipment</option>
    </select>

    <input
      v-model="localFilters.location"
      type="text"
      placeholder="Location..."
    />

    <select v-model="localFilters.priority">
      <option value="">All Priorities</option>
      <option value="Normal">Normal</option>
      <option value="Urgent">Urgent</option>
    </select>

    <select v-model="localFilters.status">
      <option value="">All Status</option>
      <option value="Pending">Pending</option>
      <option value="Under Review">Under Review</option>
      <option value="Matched">Matched</option>
      <option value="Completed">Completed</option>
    </select>

  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  filters: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:filters'])

const localFilters = reactive({
  product: props.filters.product,
  category: props.filters.category,
  location: props.filters.location,
  priority: props.filters.priority,
  status: props.filters.status
})

watch(
  localFilters,
  () => {
    emit('update:filters', { ...localFilters })
  },
  { deep: true }
)
</script>
