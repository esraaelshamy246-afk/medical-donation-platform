<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="request-modal">
      <button class="close-button" @click="$emit('close')">×</button>

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
            <option value="Medical Supplies">Medical Supplies</option>
            <option value="Equipment">Equipment</option>
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
            rows="3"
          ></textarea>
        </div>

        <div class="form-group">
          <label>Priority</label>
          <div class="priority-options">
            <label class="radio-label" :class="{ active: form.priority === 'Normal' }">
              <input v-model="form.priority" type="radio" value="Normal" />
              Normal
            </label>
            <label class="radio-label urgent" :class="{ active: form.priority === 'Urgent' }">
              <input v-model="form.priority" type="radio" value="Urgent" />
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

<style scoped>
.modal-overlay {
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

.request-modal {
  background: #ffffff;
  width: 100%;
  max-width: 500px;
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

h2 {
  color: #264653;
  margin: 0 0 6px 0;
  font-size: 22px;
  font-weight: 700;
}

.modal-subtitle {
  color: #6c757d;
  font-size: 14px;
  margin: 0 0 20px 0;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #264653;
  margin-bottom: 6px;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #2a9d8f;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.15);
}

.form-group textarea {
  resize: vertical;
}

.priority-options {
  display: flex;
  gap: 15px;
  margin-top: 6px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #555;
  cursor: pointer;
  transition: all 0.2s ease;
}

.radio-label input {
  accent-color: #2a9d8f;
}

.radio-label.active {
  border-color: #2a9d8f;
  background: #e8f5f3;
  color: #2a9d8f;
}

.radio-label.urgent.active {
  border-color: #e76f51;
  background: #fdf2f0;
  color: #e76f51;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background: #2a9d8f;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

.submit-button:hover {
  background: #238377;
}

.submit-button:active {
  transform: scale(0.99);
}
</style>
