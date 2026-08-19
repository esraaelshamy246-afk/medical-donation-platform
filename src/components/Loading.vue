<template>
  <div class="loading">
    <div class="spinner"></div>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.loading {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.spinner {
  width: 45px;
  height: 45px;
  border: 4px solid #ddd;
  border-top-color: #2a9d8f;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading p {
  margin: 0;
  color: #666;
  font-size: 16px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>