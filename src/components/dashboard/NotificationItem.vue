<template>
      <div class="notification-item" :class="{ unread: !notification.isRead }">
          <div class="icon">
                <i class="bx bx-bell"></i>
                    </div>
                        <div class="content">
                              <p class="message">{{ notification.message }}</p>
                                    <span class="time">{{ notification.time }}</span>
                                        </div>
                                          </div>
                                          </template>

                                          <script setup>
                                          defineProps({
                                            notification: {
                                                type: Object,
                                                    required: true
                                                      }
                                                      });
                                                      </script>

                                                      <style scoped>
                                                      .notification-item {
                                                        display: flex;
                                                          align-items: center;
                                                            gap: 15px;
                                                              padding: 12px 15px;
                                                                border-radius: 8px;
                                                                  background: rgba(255, 255, 255, 0.03);
                                                                    border: 1px solid rgba(255, 255, 255, 0.08);
                                                                      margin-bottom: 10px;
                                                                      }

                                                                      .notification-item.unread {
                                                                        border-left: 4px solid #0ef;
                                                                          background: rgba(0, 238, 255, 0.05);
                                                                          }

                                                                          .icon {
                                                                            font-size: 20px;
                                                                              color: #0ef;
                                                                              }

                                                                              .message {
                                                                                margin: 0;
                                                                                  font-size: 14px;
                                                                                    color: #fff;
                                                                                    }

                                                                                    .time {
                                                                                      font-size: 12px;
                                                                                        color: #888;
                                                                                        }
                                                                                        </style>
                                                                                        