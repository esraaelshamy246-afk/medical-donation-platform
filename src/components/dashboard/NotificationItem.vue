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
  padding: 14px 16px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #eef2f5;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.notification-item.unread {
  border-left: 4px solid #2a9d8f;
  background: #f4f9f8;
}

.icon {
  font-size: 22px;
  color: #2a9d8f;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: #e8f5f3;
  border-radius: 50%;
  flex-shrink: 0;
}

.content {
  flex-grow: 1;
}

.message {
  margin: 0 0 4px 0;
  font-size: 14px;
  color: #264653;
  font-weight: 500;
  line-height: 1.4;
}

.time {
  font-size: 12px;
  color: #8d99ae;
  font-weight: 400;
}
</style>
