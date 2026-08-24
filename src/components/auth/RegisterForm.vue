<template>
  <form @submit.prevent="handleSubmit" class="compact-form">
    <div class="input-box">
      <input type="text" v-model="fullName" placeholder="Full Name" required />
      <i class="bx bxs-user icon"></i>
    </div>

    <div class="input-box">
      <input type="email" v-model="email" placeholder="Email" required />
      <i class="bx bxs-envelope icon"></i>
    </div>

    <div class="input-box">
      <input type="password" v-model="password" placeholder="Password" required />
      <i class="bx bxs-lock-alt icon"></i>
    </div>

    <div class="select-box">
      <label class="select-label">Account Type</label>
      <select v-model="accountType">
        <option value="Individual">Individual</option>
        <option value="Organization">Organization</option>
      </select>
    </div>

    <button type="submit" class="btn-submit">Sign Up</button>

    <div class="login-link">
      <span>Already have an account? </span>
      <a href="#" @click.prevent="$emit('switchToLogin')">Login</a>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['switchToLogin'])
const router = useRouter()

const fullName = ref('')
const email = ref('')
const password = ref('')
const accountType = ref('Individual')

const handleSubmit = () => {
  const newUser = {
    id: Date.now(),
    fullName: fullName.value,
    email: email.value,
    password: password.value,
    accountType: accountType.value,
    role: 'user'
  }

  const existingUsers = JSON.parse(localStorage.getItem('registered_users') || '[]')
  existingUsers.push(newUser)
  localStorage.setItem('registered_users', JSON.stringify(existingUsers))

  localStorage.setItem('user', JSON.stringify(newUser))

  if (router) {
    router.push('/dashboard')
  } else {
    window.location.href = '/dashboard'
  }
}
</script>

<style scoped>
.compact-form {
  width: 100%;
  position: relative;
  z-index: 10;
}

.input-box {
  position: relative;
  margin-bottom: 10px;
}

.input-box input {
  width: 100%;
  height: 38px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 0 30px 0 5px;
  font-size: 13px;
  color: #264653;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

.input-box input:focus {
  border-bottom-color: #2a9d8f;
}

.input-box .icon {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #8d99ae;
}

.select-box {
  margin-bottom: 12px;
}

.select-label {
  display: block;
  font-size: 11px;
  color: #2a9d8f;
  font-weight: 600;
  margin-bottom: 4px;
}

.select-box select {
  width: 100%;
  height: 36px;
  background: #f8f9fa;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0 10px;
  font-size: 13px;
  color: #264653;
  outline: none;
  cursor: pointer;
}

.btn-submit {
  width: 100%;
  height: 38px;
  background: #2a9d8f;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 4px;
  position: relative;
  z-index: 20;
  pointer-events: auto;
}

.btn-submit:hover {
  background: #238377;
}

.login-link {
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  color: #6c757d;
  position: relative;
  z-index: 20;
}

.login-link a {
  color: #2a9d8f;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
