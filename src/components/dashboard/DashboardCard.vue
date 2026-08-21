<template>
      <div class="dashboard-card" :style="{ borderColor: color }">
          <div class="card-icon" :style="{ background: color }">
                <i :class="icon"></i>
                    </div>
                        <div class="card-info">
                              <h3>{{ value }}</h3>
                                    <p>{{ title }}</p>
                                        </div>
                                          </div>
                                          </template>

                                          <script setup>
                                          defineProps({
                                            title: String,
                                              value: [Number, String],
                                                icon: String,
                                                  color: {
                                                      type: String,
                                                          default: '#0ef'
                                                            }
                                                            });
                                                            </script>

                                                            <style scoped>
                                                            .dashboard-card {
                                                              background: rgba(8, 27, 41, 0.8);
                                                                border: 2px solid;
                                                                  border-radius: 12px;
                                                                    padding: 20px;
                                                                      display: flex;
                                                                        align-items: center;
                                                                          gap: 15px;
                                                                            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                                                                              color: #fff;
                                                                              }

                                                                              .card-icon {
                                                                                width: 50px;
                                                                                  height: 50px;
                                                                                    border-radius: 50%;
                                                                                      display: flex;
                                                                                        align-items: center;
                                                                                          justify-content: center;
                                                                                            font-size: 24px;
                                                                                              color: #081b29;
                                                                                              }

                                                                                              .card-info h3 {
                                                                                                font-size: 24px;
                                                                                                  margin: 0;
                                                                                                  }

                                                                                                  .card-info p {
                                                                                                    font-size: 14px;
                                                                                                      margin: 0;
                                                                                                        color: #aaa;
                                                                                                        }
                                                                                                        </style>
                                                                                                        