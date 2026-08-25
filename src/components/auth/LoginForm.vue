<template>
  <form @submit.prevent="handleSubmit" class="compact-form">
    <div v-if="errorMessage" class="error-msg">
      {{ errorMessage }}
    </div>

    <div class="input-box">
      <input type="email" v-model="email" placeholder="Email" required />
      <i class="bx bxs-envelope icon"></i>
    </div>

    <div class="input-box">
      <input type="password" v-model="password" placeholder="Password" required />
      <i class="bx bxs-lock-alt icon"></i>
    </div>

    <button type="submit" class="btn-submit">Login</button>

    <div class="register-link">
      <span>Don't have an account? </span>
      <a href="#" @click.prevent="$emit('switchToRegister')">Sign Up</a>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['switchToRegister'])
const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const handleSubmit = () => {
  errorMessage.value = ''

 const userSession = {
  id: email.value,
  email: email.value,
  fullName: email.value.split('@')[0],
  accountType: 'Individual'
}

  localStorage.setItem('user', JSON.stringify(userSession))

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

.error-msg {
  background-color: #f8d7da;
  color: #721c24;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 12px;
  margin-bottom: 12px;
  text-align: center;
}

.input-box {
  position: relative;
  margin-bottom: 15px;
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
  margin-top: 15px;
  position: relative;
  z-index: 20;
  pointer-events: auto;
}

.btn-submit:hover {
  background: #238377;
}

.register-link {
  text-align: center;
  font-size: 12px;
  margin-top: 12px;
  color: #6c757d;
  position: relative;
  z-index: 20;
}

.register-link a {
  color: #2a9d8f;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
