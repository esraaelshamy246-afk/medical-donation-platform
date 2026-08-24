<template>
  <aside class="sidebar">
    <div class="brand">
      <h3><span>Ata'a</span> Admin</h3>
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
  width: 250px;
  background: #ffffff;
  border-right: 1px solid #eef2f5;
  min-height: 100vh;
  padding: 25px 15px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.03);
}

.brand h3 {
  color: #264653;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 35px;
  text-align: center;
}

.brand h3 span {
  color: #2a9d8f;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;
  color: #555;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease;
}

.nav-item i {
  font-size: 20px;
  color: #777;
  transition: color 0.3s ease;
}

.nav-item:hover {
  background: #f4f9f8;
  color: #2a9d8f;
}

.nav-item:hover i {
  color: #2a9d8f;
}

.nav-item.router-link-active {
  background: #e8f5f3;
  color: #2a9d8f;
  font-weight: 600;
  border-left: 4px solid #2a9d8f;
}

.nav-item.router-link-active i {
  color: #2a9d8f;
}
</style>

                                                                                                                                                        