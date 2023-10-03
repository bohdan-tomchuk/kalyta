<script setup lang="ts">
import AppHeader from '@/components/App/AppHeader.vue'
</script>

<template>
  <el-container direction="vertical">
    <AppHeader />
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>