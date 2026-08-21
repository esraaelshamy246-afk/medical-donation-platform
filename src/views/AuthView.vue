<template>
      <div class="auth-page">
          <div class="wrapper" :class="{ active: isRegister }">
                <span class="bg-animate"></span>
                      <span class="bg-animate2"></span>

                            <div class="form-box login">
                                    <h2>Login</h2>
                                            <LoginForm @switchToRegister="isRegister = true" />
                                                  </div>

                                                        <div class="info-text login">
                                                                <h2>Welcome Back!</h2>
                                                                        <p>We are glad to see you again at Ata'a platform to support medical donations.</p>
                                                                              </div>

                                                                                    <div class="form-box register">
                                                                                            <h2>Sign Up</h2>
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
                                                                                                                                            import { ref } from 'vue';
                                                                                                                                            import LoginForm from '@/components/auth/LoginForm.vue';
                                                                                                                                            import RegisterForm from '@/components/auth/RegisterForm.vue';

                                                                                                                                            const isRegister = ref(false);
                                                                                                                                            </script>

                                                                                                                                            <style scoped>
                                                                                                                                            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

                                                                                                                                            .auth-page {
                                                                                                                                              display: flex;
                                                                                                                                                justify-content: center;
                                                                                                                                                  align-items: center;
                                                                                                                                                    min-height: 100vh;
                                                                                                                                                      background: #081b29;
                                                                                                                                                      }

                                                                                                                                                      .wrapper {
                                                                                                                                                        position: relative;
                                                                                                                                                          width: 750px;
                                                                                                                                                            height: 520px;
                                                                                                                                                              background: transparent;
                                                                                                                                                                border: 2px solid #0ef;
                                                                                                                                                                  box-shadow: 0 0 25px #0ef;
                                                                                                                                                                    overflow: hidden;
                                                                                                                                                                      border-radius: 10px;
                                                                                                                                                                      }

                                                                                                                                                                      .wrapper .bg-animate {
                                                                                                                                                                        position: absolute;
                                                                                                                                                                          top: -4px;
                                                                                                                                                                            right: 0;
                                                                                                                                                                              width: 850px;
                                                                                                                                                                                height: 600px;
                                                                                                                                                                                  background: linear-gradient(45deg, #081b29, #0ef);
                                                                                                                                                                                    border-bottom: 3px solid #0ef;
                                                                                                                                                                                      transform: rotate(10deg) skewY(40deg);
                                                                                                                                                                                        transform-origin: bottom right;
                                                                                                                                                                                          transition: 1.5s ease;
                                                                                                                                                                                          }

                                                                                                                                                                                          .wrapper.active .bg-animate {
                                                                                                                                                                                            transform: rotate(0deg) skewY(0deg);
                                                                                                                                                                                              transition-delay: .5s;
                                                                                                                                                                                              }

                                                                                                                                                                                              .wrapper .bg-animate2 {
                                                                                                                                                                                                position: absolute;
                                                                                                                                                                                                  top: 100%;
                                                                                                                                                                                                    left: 250px;
                                                                                                                                                                                                      width: 850px;
                                                                                                                                                                                                        height: 700px;
                                                                                                                                                                                                          background: #081b29;
                                                                                                                                                                                                            border-top: 3px solid #0ef;
                                                                                                                                                                                                              transform: rotate(0deg) skewY(0deg);
                                                                                                                                                                                                                transform-origin: bottom left;
                                                                                                                                                                                                                  transition: 1.5s ease;
                                                                                                                                                                                                                    transition-delay: .5s;
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
                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                      .wrapper .form-box.login {
                                                                                                                                                                                                                                        left: 0;
                                                                                                                                                                                                                                          padding: 0 40px;
                                                                                                                                                                                                                                            transition: .6s ease;
                                                                                                                                                                                                                                              transition-delay: .7s;
                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              .wrapper.active .form-box.login {
                                                                                                                                                                                                                                                transition-delay: 0s;
                                                                                                                                                                                                                                                  transform: translateX(-100%);
                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                  .wrapper .form-box.register {
                                                                                                                                                                                                                                                    position: absolute;
                                                                                                                                                                                                                                                      right: 0;
                                                                                                                                                                                                                                                        padding: 0 40px;
                                                                                                                                                                                                                                                          transition: .6s ease;
                                                                                                                                                                                                                                                            transition-delay: 0s;
                                                                                                                                                                                                                                                              transform: translateX(100%);
                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                              .wrapper.active .form-box.register {
                                                                                                                                                                                                                                                                transition-delay: .7s;
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
                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                .wrapper .info-text.login {
                                                                                                                                                                                                                                                                                  right: 0;
                                                                                                                                                                                                                                                                                    text-align: right;
                                                                                                                                                                                                                                                                                      padding: 0 40px 60px 150px;
                                                                                                                                                                                                                                                                                        transition: .6s ease;
                                                                                                                                                                                                                                                                                          transition-delay: 1.2s;
                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                          .wrapper.active .info-text.login {
                                                                                                                                                                                                                                                                                            transition-delay: 0s;
                                                                                                                                                                                                                                                                                              transform: translateX(100%);
                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                              .wrapper .info-text.register {
                                                                                                                                                                                                                                                                                                left: 0;
                                                                                                                                                                                                                                                                                                  text-align: left;
                                                                                                                                                                                                                                                                                                    padding: 0 150px 60px 40px;
                                                                                                                                                                                                                                                                                                      transform: translateX(-100%);
                                                                                                                                                                                                                                                                                                        transition: .6s ease;
                                                                                                                                                                                                                                                                                                          transition-delay: 0s;
                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                          .wrapper.active .info-text.register {
                                                                                                                                                                                                                                                                                                            transition-delay: 1.2s;
                                                                                                                                                                                                                                                                                                              transform: translateX(0);
                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                              .form-box h2, .info-text h2 {
                                                                                                                                                                                                                                                                                                                color: #fff;
                                                                                                                                                                                                                                                                                                                  font-size: 32px;
                                                                                                                                                                                                                                                                                                                    text-align: center;
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                    </style>
                                                                                                                                                                                                                                                                                                                    