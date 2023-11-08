<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'

const { logout } = useUserStore()
</script>

<template>
  <el-header class="header">
    <span class="logo">KALYTA</span>
    <el-button type="default" @click="logout">Logout</el-button>
  </el-header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  border-radius: 8px;
  padding: 10px 20px !important;
  height: 64px;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  color: #fff;
}
</style>