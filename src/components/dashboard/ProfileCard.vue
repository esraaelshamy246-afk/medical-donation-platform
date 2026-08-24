                                                                                                                                                                                                                                    <template>
  <div class="profile-card">
    <div class="avatar-container">
      <img :src="profile.avatar || 'https://via.placeholder.com/100'" alt="Profile Avatar" class="avatar">
    </div>
    <form @submit.prevent="updateProfile">
      <div class="field">
        <label>Full Name</label>
        <input type="text" v-model="form.fullName">
      </div>
      <div class="field">
        <label>Email</label>
        <input type="email" v-model="form.email" disabled>
      </div>
      <div class="field">
        <label>Phone</label>
        <input type="text" v-model="form.phone">
      </div>
      <div class="field">
        <label>Location</label>
        <input type="text" v-model="form.location">
      </div>
      <button type="submit" class="btn">Save Changes</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps({
  profile: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update']);

const form = reactive({
  fullName: props.profile.fullName || '',
  email: props.profile.email || '',
  phone: props.profile.phone || '',
  location: props.profile.location || ''
});

const updateProfile = () => {
  emit('update', { ...form });
};
</script>

<style scoped>
.profile-card {
  background: #ffffff;
  border: 1px solid #eef2f5;
  border-radius: 12px;
  padding: 30px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
}

.avatar-container {
  text-align: center;
  margin-bottom: 25px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #2a9d8f;
  object-fit: cover;
  padding: 2px;
  background-color: #f8f9fa;
}

.field {
  margin-bottom: 18px;
}

.field label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #264653;
}

.field input {
  width: 100%;
  padding: 10px 14px;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.field input:focus {
  border-color: #2a9d8f;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.15);
}

.field input:disabled {
  background: #e9ecef;
  color: #6c757d;
  cursor: not-allowed;
}

.btn {
  width: 100%;
  padding: 12px;
  background: #2a9d8f;
  border: none;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

.btn:hover {
  background: #238377;
}

.btn:active {
  transform: scale(0.99);
}
</style>
