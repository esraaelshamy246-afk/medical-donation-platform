<template>
  <div class="modal-overlay" @click.self="$emit('close')">

    <div class="request-modal">

      <button
        class="close-button"
        @click="$emit('close')"
      >
        ×
      </button>

      <h2>Create Request</h2>
      <p class="modal-subtitle">
        Add the medicine or medical supplies you need.
      </p>

      <form @submit.prevent="submitRequest">

        <div class="form-group">
          <label>Product Name</label>

          <input
            v-model="form.product"
            type="text"
            placeholder="Enter product name"
            required
          />
        </div>

        <div class="form-group">
          <label>Category</label>

          <select v-model="form.category" required>
            <option value="">Select category</option>
            <option value="Medicine">Medicine</option>
            <option value="Medical Supplies">
              Medical Supplies
            </option>
            <option value="Equipment">
              Equipment
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Quantity</label>

          <input
            v-model.number="form.quantity"
            type="number"
            min="1"
            placeholder="Enter quantity"
            required
          />
        </div>

        <div class="form-group">
          <label>Location</label>

          <input
            v-model="form.location"
            type="text"
            placeholder="Enter location"
            required
          />
        </div>

        <div class="form-group">
          <label>Description</label>

          <textarea
            v-model="form.description"
            placeholder="Explain why you need this request..."
            rows="4"
          ></textarea>
        </div>

        <div class="form-group">
          <label>Priority</label>

          <div class="priority-options">

            <label>
              <input
                v-model="form.priority"
                type="radio"
                value="Normal"
              />
              Normal
            </label>

            <label>
              <input
                v-model="form.priority"
                type="radio"
                value="Urgent"
              />
              Urgent
            </label>

          </div>
        </div>

        <button class="submit-button" type="submit">
          Create Request
        </button>

      </form>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['close', 'submit'])

const form = reactive({
  product: '',
  category: '',
  quantity: '',
  location: '',
  description: '',
  priority: 'Normal'
})

const submitRequest = () => {
  emit('submit', {
    ...form,
    status: 'Pending',
    date: new Date().toLocaleDateString()
  })
}
</script>
