<template>
  <div class="admin-dashboard">
    <h2>Admin Dashboard</h2>

    <div class="requests-review">
      <h3>Pending Donations Review</h3>

      <div class="table-container">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="pendingDonations.length === 0">
              <td colspan="5" class="empty-msg">No pending donations to review.</td>
            </tr>
            <tr v-for="donation in pendingDonations" :key="donation.id">
              <td class="product-name">{{ donation.productName }}</td>
              <td>
                <span class="category-badge">{{ donation.category }}</span>
              </td>
              <td>{{ donation.quantity }}</td>
              <td>{{ donation.location }}</td>
              <td>
                <div class="actions">
                  <button class="btn-approve" @click="updateStatus(donation.id, 'Approved')">Approve</button>
                  <button class="btn-reject" @click="updateStatus(donation.id, 'Rejected')">Reject</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pendingDonations = ref([])

const fetchPending = async () => {
  try {
    const rawUrl = 'https://raw.githubusercontent.com/esraaelshamy246-afk/medical-donation-platform/1e59da960820c93cd04e517325623065eca2cba1/db.json'
    const res = await fetch(rawUrl)
    const data = await res.json()
    
    pendingDonations.value = (data.donations || []).filter(d => d.status === 'Pending')
  } catch (error) {
    console.error('Error fetching pending donations:', error)
  }
}

const updateStatus = (id, newStatus) => {
  pendingDonations.value = pendingDonations.value.filter(d => d.id !== id)
}

onMounted(() => {
  fetchPending()
})
</script>

<style scoped>
.admin-dashboard {
  padding: 30px;
  background: #f8f9fa;
  color: #264653;
  min-height: 100vh;
  box-sizing: border-box;
}

h2 {
  font-size: 26px;
  font-weight: 700;
  color: #264653;
  margin-bottom: 20px;
}

.requests-review h3 {
  font-size: 18px;
  font-weight: 600;
  color: #2a9d8f;
  margin-bottom: 15px;
}

.table-container {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #eef2f5;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
  overflow-x: auto;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.admin-table th {
  background-color: #264653;
  color: #ffffff;
  padding: 14px 18px;
  font-size: 14px;
  font-weight: 600;
}

.admin-table td {
  padding: 14px 18px;
  border-bottom: 1px solid #eef2f5;
  font-size: 14px;
  color: #555;
}

.product-name {
  font-weight: 600;
  color: #264653;
}

.category-badge {
  display: inline-block;
  font-size: 12px;
  color: #2a9d8f;
  background-color: #e8f5f3;
  padding: 3px 8px;
  border-radius: 6px;
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 8px;
}

.btn-approve {
  background: #2a9d8f;
  color: #ffffff;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: background-color 0.2s ease;
}

.btn-approve:hover {
  background: #238377;
}

.btn-reject {
  background: #e76f51;
  color: #ffffff;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: background-color 0.2s ease;
}

.btn-reject:hover {
  background: #d95d3f;
}

.empty-msg {
  text-align: center;
  padding: 30px;
  color: #8d99ae;
  font-style: italic;
}
</style>
                                                                                                                                                                                                                                                                                                                                               