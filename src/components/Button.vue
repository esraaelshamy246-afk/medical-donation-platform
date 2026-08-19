<template>
  <button class="custom-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.custom-button {
  padding: 12px 25px;
  border: 2px solid #2a9d8f;
  border-radius: 8px;
  background: #2a9d8f;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(42, 157, 143, 0.25);
}
</style>