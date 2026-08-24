                                                                                                                                                                                                                                    <template>
  <div class="table-container">
    <table class="custom-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Expiry Date</th>
          <th>Date Added</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in donations" :key="item.id">
          <td class="product-name">{{ item.product }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.expiryDate }}</td>
          <td>{{ item.addedDate }}</td>
          <td>
            <span :class="['badge', item.status]">
              {{ item.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  donations: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
  border: 1px solid #eef2f5;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.custom-table th {
  background-color: #f8f9fa;
  color: #264653;
  font-weight: 600;
  font-size: 14px;
  padding: 16px 20px;
  border-bottom: 2px solid #eef2f5;
}

.custom-table td {
  padding: 14px 20px;
  color: #555;
  font-size: 14px;
  border-bottom: 1px solid #eef2f5;
  transition: background-color 0.2s ease;
}

.product-name {
  font-weight: 600;
  color: #264653;
}

.custom-table tbody tr:hover td {
  background-color: #f4f9f8;
}

.custom-table tbody tr:last-child td {
  border-bottom: none;
}

/* Badges Styling */
.badge {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
}

.badge.pending {
  background-color: #fff3cd;
  color: #856404;
}

.badge.approved {
  background-color: #e8f5f3;
  color: #2a9d8f;
}

.badge.rejected {
  background-color: #f8d7da;
  color: #721c24;
}

.badge.completed {
  background-color: #d1ecf1;
  color: #0c5460;
}
</style>
