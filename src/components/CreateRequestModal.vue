<template>
  <div v-if="isOpen" class="modal fade show d-block modal-backdrop-custom">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg modal-radius overflow-hidden">
        <div class="modal-header modal-header-custom p-4 text-white">
          <h5 class="modal-title fw-bold">Create New Request</h5>
          <button type="button" class="btn-close btn-close-white" @click="close"></button>
        </div>
        <div class="modal-body p-4 bg-white">
          <form @submit.prevent="submit">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label fw-medium text-secondary">Medicine / Equipment</label>
                <input v-model="medicineName" type="text" class="form-control form-control-custom" placeholder="e.g. Insulin Glargine" required />
              </div>

              <div class="col-md-6">
                <label class="form-label fw-medium text-secondary">Category</label>
                <select v-model="category" class="form-select form-control-custom">
                  <option value="Medicines">Medicines</option>
                  <option value="Medical Supplies">Medical Supplies</option>
                  <option value="Medical Equipment">Medical Equipment</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label fw-medium text-secondary">Patient Name</label>
                <input v-model="patientName" type="text" class="form-control form-control-custom" placeholder="Full Name" required />
              </div>

              <div class="col-md-6">
                <label class="form-label fw-medium text-secondary">City / Location</label>
                <input v-model="location" type="text" class="form-control form-control-custom" placeholder="e.g. Cairo" required />
              </div>

              <div class="col-md-6">
                <label class="form-label fw-medium text-secondary">Phone Number</label>
                <input v-model="phone" type="text" class="form-control form-control-custom" placeholder="01xxxxxxxxx" required />
              </div>

              <div class="col-md-6 d-flex align-items-center pt-3">
                <div class="form-check form-switch">
                  <input v-model="isUrgent" class="form-check-input" type="checkbox" id="urgentCheck" />
                  <label class="form-check-label text-danger fw-bold ms-2" for="urgentCheck">
                    Is Urgent Case? ⚡
                  </label>
                </div>
              </div>

              <div class="col-12">
                <label class="form-label fw-medium text-secondary">Details / Notes</label>
                <textarea v-model="description" class="form-control form-control-custom" rows="3" placeholder="Write any additional details..." required></textarea>
              </div>
            </div>

            <div class="mt-4 pt-3 border-top d-flex justify-content-end gap-2">
              <button type="button" class="btn btn-light px-4 rounded-3 border" @click="close">Cancel</button>
              <button type="submit" class="btn btn-submit px-4 rounded-3 text-white fw-semibold" :disabled="loading">
                Save Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close', 'created'])

const medicineName = ref('')
const category = ref('Medicines')
const patientName = ref('')
const location = ref('')
const phone = ref('')
const isUrgent = ref(false)
const description = ref('')
const loading = ref(false)

function close() {
  emit('close')
}

async function submit() {
  loading.value = true
  const newRequest = {
    medicineName: medicineName.value,
    category: category.value,
    patientName: patientName.value,
    location: location.value,
    phone: phone.value,
    isUrgent: isUrgent.value,
    description: description.value,
    status: 'Pending',
    createdAt: new Date().toISOString().split('T')[0]
  }

  try {
    const res = await fetch('http://localhost:3000/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRequest)
    })
    
    if (res.ok) {
      const data = await res.json()
      emit('created', data)
      close()
      medicineName.value = ''
      patientName.value = ''
      location.value = ''
      phone.value = ''
      description.value = ''
      isUrgent.value = false
    }
  } catch (error) {
    console.log('Error:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.modal-backdrop-custom {
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(4px);
}

.modal-radius {
  border-radius: 20px;
}

.modal-header-custom {
  background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);
}

.form-control-custom {
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  padding: 10px 14px;
}

.form-control-custom:focus {
  border-color: #0f766e;
  box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);
}

.btn-submit {
  background-color: #0f766e;
  border: none;
}

.btn-submit:hover {
  background-color: #115e59;
}
</style>