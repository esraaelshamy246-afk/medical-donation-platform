<template>
      <aside class="sidebar">
          <div class="brand">
                <h3>Ata'a Admin</h3>
                    </div>
                        <nav class="nav-menu">
                              <router-link to="/admin" class="nav-item">
                                      <i class="bx bx-grid-alt"></i> Dashboard
                                            </router-link>
                                                  <router-link to="/admin/users" class="nav-item">
                                                          <i class="bx bx-user"></i> Users
                                                                </router-link>
                                                                      <router-link to="/admin/donations" class="nav-item">
                                                                              <i class="bx bxs-donate-blood"></i> Donations
                                                                                    </router-link>
                                                                                          <router-link to="/admin/requests" class="nav-item">
                                                                                                  <i class="bx bx-list-ul"></i> Requests
                                                                                                        </router-link>
                                                                                                            </nav>
                                                                                                              </aside>
                                                                                                              </template>

                                                                                                              <script setup>
                                                                                                              </script>

                                                                                                              <style scoped>
                                                                                                              .sidebar {
                                                                                                                width: 240px;
                                                                                                                  background: #081b29;
                                                                                                                    border-right: 1px solid #0ef;
                                                                                                                      min-height: 100vh;
                                                                                                                        padding: 20px 15px;
                                                                                                                        }

                                                                                                                        .brand h3 {
                                                                                                                          color: #0ef;
                                                                                                                            margin-bottom: 30px;
                                                                                                                              text-align: center;
                                                                                                                              }

                                                                                                                              .nav-menu {
                                                                                                                                display: flex;
                                                                                                                                  flex-direction: column;
                                                                                                                                    gap: 10px;
                                                                                                                                    }

                                                                                                                                    .nav-item {
                                                                                                                                      display: flex;
                                                                                                                                        align-items: center;
                                                                                                                                          gap: 10px;
                                                                                                                                            padding: 12px 15px;
                                                                                                                                              color: #fff;
                                                                                                                                                text-decoration: none;
                                                                                                                                                  border-radius: 8px;
                                                                                                                                                    transition: 0.3s;
                                                                                                                                                    }

                                                                                                                                                    .nav-item:hover,
                                                                                                                                                    .nav-item.router-link-active {
                                                                                                                                                      background: rgba(0, 238, 255, 0.1);
                                                                                                                                                        color: #0ef;
                                                                                                                                                        }
                                                                                                                                                        </style>
                                                                                                                                                        