<template>
  <div class="auth-page">
    <div class="wrapper" :class="{ active: isRegister }">
      <span class="bg-animate"></span>
      <span class="bg-animate2"></span>

      <div class="form-box login">
        <h2>Sign In</h2>
        <LoginForm @switchToRegister="isRegister = true" />
      </div>

      <div class="info-text login">
        <h2>Welcome Back!</h2>
        <p>We are glad to see you again at Ata'a platform to support medical donations.</p>
      </div>

      <div class="form-box register">
        <h2>Create Account</h2>
        <RegisterForm @switchToLogin="isRegister = false" />
      </div>

      <div class="info-text register">
        <h2>Welcome!</h2>
        <p>Join Ata'a community to help reduce medical waste and support those in need.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

const isRegister = ref(false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;
}

.wrapper {
  position: relative;
  width: 780px;
  height: 480px;
  background: #ffffff;
  border: 1px solid #eef2f5;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border-radius: 16px;
}

.wrapper .bg-animate {
  position: absolute;
  top: -4px;
  right: 0;
  width: 850px;
  height: 600px;
  background: linear-gradient(45deg, #264653, #2a9d8f);
  border-bottom: 3px solid #2a9d8f;
  transform: rotate(10deg) skewY(40deg);
  transform-origin: bottom right;
  transition: 1.5s ease;
}

.wrapper.active .bg-animate {
  transform: rotate(0deg) skewY(0deg);
  transition-delay: 0.5s;
}

.wrapper .bg-animate2 {
  position: absolute;
  top: 100%;
  left: 250px;
  width: 850px;
  height: 700px;
  background: #ffffff;
  border-top: 3px solid #2a9d8f;
  transform: rotate(0deg) skewY(0deg);
  transform-origin: bottom left;
  transition: 1.5s ease;
  transition-delay: 0.5s;
}

.wrapper.active .bg-animate2 {
  transform: rotate(-11deg) skewY(-41deg);
  transition-delay: 1.2s;
}

.wrapper .form-box {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  box-sizing: border-box;
}

.wrapper .form-box.login {
  left: 0;
  padding: 0 30px;
  transition: 0.6s ease;
  transition-delay: 0.7s;
}

.wrapper.active .form-box.login {
  transition-delay: 0s;
  transform: translateX(-100%);
}

.wrapper .form-box.register {
  position: absolute;
  right: 0;
  padding: 0 30px;
  transition: 0.6s ease;
  transition-delay: 0s;
  transform: translateX(100%);
}

.wrapper.active .form-box.register {
  transition-delay: 0.7s;
  transform: translateX(0);
}

.wrapper .info-text {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  color: #ffffff;
  box-sizing: border-box;
}

.wrapper .info-text.login {
  right: 0;
  text-align: right;
  padding: 0 40px 40px 140px;
  transition: 0.6s ease;
  transition-delay: 1.2s;
}

.wrapper.active .info-text.login {
  transition-delay: 0s;
  transform: translateX(100%);
}

.wrapper .info-text.register {
  left: 0;
  text-align: left;
  padding: 0 140px 40px 40px;
  transform: translateX(-100%);
  transition: 0.6s ease;
  transition-delay: 0s;
}

.wrapper.active .info-text.register {
  transition-delay: 1.2s;
  transform: translateX(0);
}

.form-box h2 {
  color: #264653;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}

.info-text h2 {
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}

.info-text p {
  font-size: 13px;
  color: #e8f5f3;
  line-height: 1.5;
}
</style>
