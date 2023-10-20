<script setup lang="ts">
import { ref } from 'vue'
const total = ref(0)
</script>

<template>
  <div class="summary">
    <div class="summary__main">
      <h2 class="summary__title">Total</h2>
      <span class="summary__value">{{ total }}$</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  border-radius: 8px;
  padding: 20px;
  color: #fff;
  margin-bottom: 20px;

  &__main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    margin: 0;
  }

  &__value {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>