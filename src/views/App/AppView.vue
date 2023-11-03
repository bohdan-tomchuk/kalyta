<script setup lang="ts">
import AppSummary from '@/components/App/AppSummary.vue'
import TransactionsList from '@/components/Transactions/TransactionsList.vue'
import { supabase } from '@/lib/supabase'
import { ref } from 'vue'

const account = ref('5b852e24-d667-4712-9feb-a4e4022cc626')


</script>

<template>
  <div class="app-layout">
    <AppSummary />
    <TransactionsList />
  </div>
</template>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  height: 100%;
}
</style>