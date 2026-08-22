<template>
  <nav class="navbar">
    <div class="logo">
      <span>Ataa</span>
    </div>

    <div class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About Us</RouterLink>
      <RouterLink to="/medicines">Medicines</RouterLink>
      <RouterLink to="/donate">Donate</RouterLink>
      <RouterLink to="/requests">Requests</RouterLink>
      <RouterLink to="/contact">Contact Us</RouterLink>
    </div>

   <div class="auth-buttons">
  <template v-if="!isLoggedIn">
    <RouterLink to="/auth" class="login-btn">
      Login
    </RouterLink>

    <RouterLink to="/auth" class="register-btn">
      Register
    </RouterLink>
  </template>

  <template v-else>
    <RouterLink to="/dashboard" class="login-btn">
      Dashboard
    </RouterLink>

    <button class="register-btn" @click="logout">
      Logout
    </button>
  </template>
</div>
  </nav>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoggedIn = ref(false)

const checkLogin = () => {
  isLoggedIn.value = !!localStorage.getItem('user')
}

onMounted(() => {
  checkLogin()
})

watch(
  () => route.path,
  () => {
    checkLogin()
  }
)

const logout = () => {
  localStorage.removeItem('user')
  isLoggedIn.value = false
}
</script>


<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 50px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.logo {
  font-size: 28px;
  font-weight: bold;
}

.logo span {
  color: #2a9d8f;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-links a:hover {
  color: #2a9d8f;
}

.nav-links a.router-link-active {
  color: #2a9d8f;
  font-weight: bold;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.auth-buttons a {
  text-decoration: none;
  padding: 9px 16px;
  border-radius: 8px;
}

.login-btn {
  color: #2a9d8f;
  border: 1px solid #2a9d8f;
}

.register-btn {
  background-color: #2a9d8f;
  color: white;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  .nav-links {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .auth-buttons {
    justify-content: center;
  }
}

</style>