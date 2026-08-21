<template>
      <div class="table-container">
          <table class="custom-table">
                <thead>
                        <tr>
                                  <th>Product</th>
                                            <th>Quantity</th>
                                                      <th>Date Requested</th>
                                                                <th>Status</th>
                                                                        </tr>
                                                                              </thead>
                                                                                    <tbody>
                                                                                            <tr v-for="request in requests" :key="request.id">
                                                                                                      <td>{{ request.product }}</td>
                                                                                                                <td>{{ request.quantity }}</td>
                                                                                                                          <td>{{ request.requestedDate }}</td>
                                                                                                                                    <td>
                                                                                                                                                <span :class="['badge', request.status]">
                                                                                                                                                              {{ request.status }}
                                                                                                                                                                          </span>
                                                                                                                                                                                    </td>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                                  </tbody>
                                                                                                                                                                                                      </table>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                        </template>

                                                                                                                                                                                                        <script setup>
                                                                                                                                                                                                        defineProps({
                                                                                                                                                                                                          requests: {
                                                                                                                                                                                                              type: Array,
                                                                                                                                                                                                                  required: true
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    });
                                                                                                                                                                                                                    </script>

                                                                                                                                                                                                                    <style scoped>
                                                                                                                                                                                                                    .table-container {
                                                                                                                                                                                                                      overflow-x: auto;
                                                                                                                                                                                                                      }

                                                                                                                                                                                                                      .custom-table {
                                                                                                                                                                                                                        width: 100%;
                                                                                                                                                                                                                          border-collapse: collapse;
                                                                                                                                                                                                                            margin-top: 10px;
                                                                                                                                                                                                                            }

                                                                                                                                                                                                                            .custom-table th,
                                                                                                                                                                                                                            .custom-table td {
                                                                                                                                                                                                                              padding: 12px 15px;
                                                                                                                                                                                                                                text-align: left;
                                                                                                                                                                                                                                  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                  .custom-table th {
                                                                                                                                                                                                                                    color: #0ef;
                                                                                                                                                                                                                                      font-weight: 600;
                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                      .badge {
                                                                                                                                                                                                                                        padding: 4px 10px;
                                                                                                                                                                                                                                          border-radius: 20px;
                                                                                                                                                                                                                                            font-size: 12px;
                                                                                                                                                                                                                                              text-transform: capitalize;
                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              .badge.pending { background: #ffaa00; color: #000; }
                                                                                                                                                                                                                                              .badge.under_review { background: #e67e22; color: #fff; }
                                                                                                                                                                                                                                              .badge.matched { background: #9b59b6; color: #fff; }
                                                                                                                                                                                                                                              .badge.completed { background: #00ff88; color: #000; }
                                                                                                                                                                                                                                              </style>
                                                                                                                                                                                                                                              