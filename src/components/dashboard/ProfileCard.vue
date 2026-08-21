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
                                                                                                                                                                            background: rgba(8, 27, 41, 0.8);
                                                                                                                                                                              border: 1px solid #0ef;
                                                                                                                                                                                border-radius: 12px;
                                                                                                                                                                                  padding: 25px;
                                                                                                                                                                                    max-width: 500px;
                                                                                                                                                                                      margin: 0 auto;
                                                                                                                                                                                        color: #fff;
                                                                                                                                                                                        }

                                                                                                                                                                                        .avatar-container {
                                                                                                                                                                                          text-align: center;
                                                                                                                                                                                            margin-bottom: 20px;
                                                                                                                                                                                            }

                                                                                                                                                                                            .avatar {
                                                                                                                                                                                              width: 90px;
                                                                                                                                                                                                height: 90px;
                                                                                                                                                                                                  border-radius: 50%;
                                                                                                                                                                                                    border: 2px solid #0ef;
                                                                                                                                                                                                      object-fit: cover;
                                                                                                                                                                                                      }

                                                                                                                                                                                                      .field {
                                                                                                                                                                                                        margin-bottom: 15px;
                                                                                                                                                                                                        }

                                                                                                                                                                                                        .field label {
                                                                                                                                                                                                          display: block;
                                                                                                                                                                                                            margin-bottom: 5px;
                                                                                                                                                                                                              font-size: 14px;
                                                                                                                                                                                                                color: #aaa;
                                                                                                                                                                                                                }

                                                                                                                                                                                                                .field input {
                                                                                                                                                                                                                  width: 100%;
                                                                                                                                                                                                                    padding: 10px;
                                                                                                                                                                                                                      background: rgba(255, 255, 255, 0.05);
                                                                                                                                                                                                                        border: 1px solid rgba(255, 255, 255, 0.2);
                                                                                                                                                                                                                          border-radius: 6px;
                                                                                                                                                                                                                            color: #fff;
                                                                                                                                                                                                                              outline: none;
                                                                                                                                                                                                                              }

                                                                                                                                                                                                                              .field input:focus {
                                                                                                                                                                                                                                border-color: #0ef;
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                .btn {
                                                                                                                                                                                                                                  width: 100%;
                                                                                                                                                                                                                                    padding: 10px;
                                                                                                                                                                                                                                      background: transparent;
                                                                                                                                                                                                                                        border: 2px solid #0ef;
                                                                                                                                                                                                                                          color: #fff;
                                                                                                                                                                                                                                            border-radius: 25px;
                                                                                                                                                                                                                                              cursor: pointer;
                                                                                                                                                                                                                                                font-weight: 600;
                                                                                                                                                                                                                                                  transition: 0.3s;
                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                  .btn:hover {
                                                                                                                                                                                                                                                    background: #0ef;
                                                                                                                                                                                                                                                      color: #081b29;
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                      </style>
                                                                                                                                                                                                                                                      