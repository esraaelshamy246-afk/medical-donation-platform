<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>

<style scoped>
.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.section-title h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

.section-title p {
  color: #666;
  font-size: 17px;
  line-height: 1.6;
}
</style>