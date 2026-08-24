<template>
  <div class="dashboard-card" :style="{ borderLeftColor: color }">
    <div class="card-icon" :style="{ backgroundColor: color }">
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
    default: '#2a9d8f'
  }
});
</script>

<style scoped>
.dashboard-card {
  background: #ffffff;
  border: 1px solid #eef2f5;
  border-left: 5px solid #2a9d8f;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dashboard-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #ffffff;
  flex-shrink: 0;
}

.card-info h3 {
  font-size: 24px;
  font-weight: 700;
  color: #264653;
  margin: 0 0 4px 0;
}

.card-info p {
  font-size: 14px;
  margin: 0;
  color: #6c757d;
  font-weight: 500;
}
</style>
                                                                                    