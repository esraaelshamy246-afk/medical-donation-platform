                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <template>
  <div class="user-dashboard">
    <div class="header-info">
      <h2>Welcome, {{ currentUserInfo.fullName || 'User' }}</h2>
      <p class="user-type">Account Type: {{ currentUserInfo.accountType || 'Individual' }}</p>
    </div>
        
    <div class="stats-grid">
      <DashboardCard 
        title="Total Donations" 
        :value="myDonations.length" 
        icon="bx bxs-donate-blood" 
        color="#2a9d8f" 
      />
      <DashboardCard 
        title="Approved Donations" 
        :value="approvedCount" 
        icon="bx bx-check-circle" 
        color="#2a9d8f" 
      />
      <DashboardCard 
        title="My Requests" 
        :value="myRequests.length" 
        icon="bx bx-list-plus" 
        color="#e76f51" 
      />
    </div>

    <div class="section-box">
      <h3>Recent Donations</h3>
      <div v-if="myDonations.length > 0" class="table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in myDonations" :key="item.id">
              <td class="product-name">{{ item.productName }}</td>
              <td>
                <span class="category-badge">{{ item.category }}</span>
              </td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.expiryDate }}</td>
              <td>
                <span :class="['badge', item.status.toLowerCase().replace(' ', '_')]">
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else class="empty-msg">No donations found for your account yet.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import DashboardCard from '@/components/dashboard/DashboardCard.vue'

const myDonations = ref([])
const myRequests = ref([])
const currentUserInfo = ref({})

const approvedCount = computed(() => {
  return myDonations.value.filter(d => d.status === 'Approved').length
})

const fetchAndCombineData = async () => {
  try {
    const rawUrl = 'https://raw.githubusercontent.com/esraaelshamy246-afk/medical-donation-platform/1e59da960820c93cd04e517325623065eca2cba1/db.json'
    const res = await fetch(rawUrl)
    const remoteData = await res.json()

    const localUsers = JSON.parse(localStorage.getItem('registered_users') || '[]')
    const allUsers = [...(remoteData.users || []), ...localUsers]

    const loggedInSession = JSON.parse(localStorage.getItem('user') || '{}')

    if (loggedInSession && loggedInSession.email) {
      const foundUser = allUsers.find(u => u.email === loggedInSession.email)
      
      if (foundUser) {
        currentUserInfo.value = foundUser
      } else {
        currentUserInfo.value = loggedInSession
      }

      const localDonations = JSON.parse(localStorage.getItem('user_donations') || '[]')
      const allDonations = [...(remoteData.donations || []), ...localDonations]
      
      const localRequests = JSON.parse(localStorage.getItem('user_requests') || '[]')
      const allRequests = [...(remoteData.requests || []), ...localRequests]

      const userId = currentUserInfo.value.email || currentUserInfo.value.id
       myDonations.value = allDonations.filter(d => d.donorId === userId)
       myRequests.value = allRequests.filter(r => r.requesterId === userId)
    }
  } catch (error) {
    console.error('Error syncing dynamic data:', error)
  }
}

onMounted(() => {
  fetchAndCombineData()
})
</script>

<style scoped>
.user-dashboard {
  padding: 35px;
  color: #264653;
  background: #f8f9fa;
  min-height: 100vh;
  box-sizing: border-box;
}

.header-info {
  margin-bottom: 25px;
}

.header-info h2 {
  font-size: 28px;
  font-weight: 700;
  color: #264653;
  margin: 0 0 6px 0;
}

.user-type {
  color: #6c757d;
  font-size: 14px;
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin: 25px 0 35px 0;
}

.section-box {
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #eef2f5;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.section-box h3 {
  font-size: 18px;
  font-weight: 600;
  color: #264653;
  margin: 0 0 15px 0;
}

.table-container {
  overflow-x: auto;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  text-align: left;
}

.custom-table th {
  background-color: #264653;
  color: #ffffff;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
}

.custom-table td {
  padding: 14px 16px;
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

.badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
  text-transform: capitalize;
}

.badge.pending {
  background: #fff3cd;
  color: #856404;
}

.badge.approved {
  background: #d1fae5;
  color: #065f46;
}

.badge.rejected {
  background: #fdf0ed;
  color: #e76f51;
}

.empty-msg {
  margin-top: 15px;
  color: #8d99ae;
  font-style: italic;
  text-align: center;
  padding: 20px 0;
}
</style>
