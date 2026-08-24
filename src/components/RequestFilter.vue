<template>
  <div class="filter-box">
    <div class="filter-group">
      <input
        v-model="localFilters.product"
        type="text"
        placeholder="Search product..."
      />
    </div>

    <div class="filter-group">
      <select v-model="localFilters.category">
        <option value="">All Categories</option>
        <option value="Medicine">Medicine</option>
        <option value="Medical Supplies">Medical Supplies</option>
        <option value="Equipment">Equipment</option>
      </select>
    </div>

    <div class="filter-group">
      <input
        v-model="localFilters.location"
        type="text"
        placeholder="Location..."
      />
    </div>

    <div class="filter-group">
      <select v-model="localFilters.priority">
        <option value="">All Priorities</option>
        <option value="Normal">Normal</option>
        <option value="Urgent">Urgent</option>
      </select>
    </div>

    <div class="filter-group">
      <select v-model="localFilters.status">
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Under Review">Under Review</option>
        <option value="Matched">Matched</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
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

<style scoped>
.filter-box {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px 20px;
  border: 1px solid #eef2f5;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
}

.filter-group input,
.filter-group select {
  width: 100%;
  padding: 10px 14px;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  color: #264653;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

.filter-group input::placeholder {
  color: #8d99ae;
}

.filter-group input:focus,
.filter-group select:focus {
  border-color: #2a9d8f;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.15);
}
</style>

