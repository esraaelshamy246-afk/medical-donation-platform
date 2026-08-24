<template>
    <div class="urgent-card">
        <div class="urgent-title">
              <i class="bx bx-error-circle"></i> URGENT REQUEST
                  </div>

                      <h3>{{ request.product }}</h3>

                          <div class="urgent-info">
                                <p>
                                        <strong>Category:</strong>
                                                {{ request.category }}
                                                      </p>

                                                            <p>
                                                                    <strong>Quantity:</strong>
                                                                            {{ request.quantity }}
                                                                                  </p>

                                                                                        <p>
                                                                                                <strong>Location:</strong>
                                                                                                        {{ request.location }}
                                                                                                              </p>
                                                                                                                  </div>

                                                                                                                      <button class="urgent-btn" @click="$emit('view', request)">
                                                                                                                            View Request
                                                                                                                                </button>
                                                                                                                                  </div>
                                                                                                                                  </template>

                                                                                                                                  <script setup>
                                                                                                                                  defineProps({
                                                                                                                                    request: {
                                                                                                                                        type: Object,
                                                                                                                                            required: true
                                                                                                                                              }
                                                                                                                                              })

                                                                                                                                              defineEmits(['view'])
                                                                                                                                              </script>

                                                                                                                                              <style scoped>
                                                                                                                                              .urgent-card {
                                                                                                                                                background: linear-gradient(180deg, #fff5f5 0%, #ffffff 100%);
                                                                                                                                                  border: 1px solid #fca5a5;
                                                                                                                                                    border-radius: 12px;
                                                                                                                                                      padding: 20px;
                                                                                                                                                        box-shadow: 0 4px 15px rgba(220, 38, 38, 0.05);
                                                                                                                                                          display: flex;
                                                                                                                                                            flex-direction: column;
                                                                                                                                                              gap: 12px;
                                                                                                                                                                transition: transform 0.25s ease, box-shadow 0.25s ease;
                                                                                                                                                                  position: relative;
                                                                                                                                                                  }

                                                                                                                                                                  .urgent-card:hover {
                                                                                                                                                                    transform: translateY(-4px);
                                                                                                                                                                      box-shadow: 0 8px 25px rgba(220, 38, 38, 0.12);
                                                                                                                                                                      }

                                                                                                                                                                      .urgent-title {
                                                                                                                                                                        display: inline-flex;
                                                                                                                                                                          align-items: center;
                                                                                                                                                                            gap: 6px;
                                                                                                                                                                              background-color: #fee2e2;
                                                                                                                                                                                color: #dc2626;
                                                                                                                                                                                  border: 1px solid #fca5a5;
                                                                                                                                                                                    font-size: 11px;
                                                                                                                                                                                      font-weight: 700;
                                                                                                                                                                                        padding: 4px 10px;
                                                                                                                                                                                          border-radius: 6px;
                                                                                                                                                                                            letter-spacing: 0.5px;
                                                                                                                                                                                              align-self: flex-start;
                                                                                                                                                                                              }

                                                                                                                                                                                              h3 {
                                                                                                                                                                                                color: #264653;
                                                                                                                                                                                                  font-size: 18px;
                                                                                                                                                                                                    font-weight: 700;
                                                                                                                                                                                                      margin: 0;
                                                                                                                                                                                                      }

                                                                                                                                                                                                      .urgent-info {
                                                                                                                                                                                                        display: flex;
                                                                                                                                                                                                          flex-direction: column;
                                                                                                                                                                                                            gap: 6px;
                                                                                                                                                                                                            }

                                                                                                                                                                                                            .urgent-info p {
                                                                                                                                                                                                              margin: 0;
                                                                                                                                                                                                                font-size: 14px;
                                                                                                                                                                                                                  color: #555;
                                                                                                                                                                                                                  }

                                                                                                                                                                                                                  .urgent-info strong {
                                                                                                                                                                                                                    color: #264653;
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                    .urgent-btn {
                                                                                                                                                                                                                      width: 100%;
                                                                                                                                                                                                                        margin-top: 5px;
                                                                                                                                                                                                                          padding: 10px;
                                                                                                                                                                                                                            background-color: #e76f51;
                                                                                                                                                                                                                              color: #ffffff;
                                                                                                                                                                                                                                border: none;
                                                                                                                                                                                                                                  border-radius: 8px;
                                                                                                                                                                                                                                    font-size: 14px;
                                                                                                                                                                                                                                      font-weight: 600;
                                                                                                                                                                                                                                        cursor: pointer;
                                                                                                                                                                                                                                          transition: background-color 0.2s ease, transform 0.1s ease;
                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                          .urgent-btn:hover {
                                                                                                                                                                                                                                            background-color: #d95d3f;
                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                            .urgent-btn:active {
                                                                                                                                                                                                                                              transform: scale(0.98);
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                              </style>

