<template>
  <div class="empty-state">
    <div class="empty-icon">📦</div>

    <h3>{{ title }}</h3>

    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Nothing Found'
  },
  message: {
    type: String,
    default: 'There is no data available at the moment.'
  }
})
</script>

<style scoped>
.empty-state {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
}

.empty-icon {
  font-size: 55px;
  margin-bottom: 15px;
}

.empty-state h3 {
  margin: 0 0 10px;
  font-size: 24px;
}

.empty-state p {
  margin: 0;
  max-width: 450px;
  color: #666;
  line-height: 1.6;
}
</style>