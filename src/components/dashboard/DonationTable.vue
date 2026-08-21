<template>
      <div class="table-container">
          <table class="custom-table">
                <thead>
                        <tr>
                                  <th>Product</th>
                                            <th>Quantity</th>
                                                      <th>Expiry Date</th>
                                                                <th>Date Added</th>
                                                                          <th>Status</th>
                                                                                  </tr>
                                                                                        </thead>
                                                                                              <tbody>
                                                                                                      <tr v-for="item in donations" :key="item.id">
                                                                                                                <td>{{ item.product }}</td>
                                                                                                                          <td>{{ item.quantity }}</td>
                                                                                                                                    <td>{{ item.expiryDate }}</td>
                                                                                                                                              <td>{{ item.addedDate }}</td>
                                                                                                                                                        <td>
                                                                                                                                                                    <span :class="['badge', item.status]">
                                                                                                                                                                                  {{ item.status }}
                                                                                                                                                                                              </span>
                                                                                                                                                                                                        </td>
                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                                      </tbody>
                                                                                                                                                                                                                          </table>
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                            </template>

                                                                                                                                                                                                                            <script setup>
                                                                                                                                                                                                                            defineProps({
                                                                                                                                                                                                                              donations: {
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
                                                                                                                                                                                                                                                                  .badge.approved { background: #00ff88; color: #000; }
                                                                                                                                                                                                                                                                  .badge.rejected { background: #ff4d4d; color: #fff; }
                                                                                                                                                                                                                                                                  .badge.completed { background: #00bfff; color: #fff; }
                                                                                                                                                                                                                                                                  </style>
                                                                                                                                                                                                                                                                  