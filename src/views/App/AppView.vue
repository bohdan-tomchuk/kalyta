<script setup lang="ts">
import AppSummary from '@/components/App/AppSummary.vue'
import TransactionsList from '@/components/Transactions/TransactionsList.vue'
import { supabase } from '@/lib/supabase'
import { ref } from 'vue'

const account = ref('5b852e24-d667-4712-9feb-a4e4022cc626')

async function createAccount() {
  console.log('create account')
  
  const { data, error } = await supabase
    .from('accounts')
    .insert([
      {
        name: 'test account',
        balance: 200,
        currency: 'UAH',
      },
    ])
    .select()

  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
}

async function createTransaction() {
  console.log('create transaction')

  const { data, error } = await supabase
    .from('transactions')
    .insert([
      {
        name: 'groceries',
        amount: 100,
        account_id: account.value,
        description: 'some description',
      },
    ])
    .select()

  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
}
</script>

<template>
  <div class="app-layout">
    <AppSummary />
    <TransactionsList />
    <el-button @click="createAccount">create account</el-button>
    <el-button @click="createTransaction">create transaction</el-button>
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