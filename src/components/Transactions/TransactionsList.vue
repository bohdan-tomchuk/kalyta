<script setup lang="ts">
import { ref } from 'vue'
import mock from './mockTransactions'
import TransactionItem from './TransactionItem'

// const props = defineProps({
//   mode: {
//     type: String,
//     required: true
//   }
// })

const transactions = ref([...mock])
</script>

<template>
  <div class="transactions">
    <div class="transactions__header">
      <h2 class="transactions__title">Transactions</h2>
      <el-button type="primary" class="transactions__btn">+</el-button>
    </div>
    <div class="transactions__list">
      <template v-for="(item, idx) in transactions" :key="idx">
        <TransactionItem v-if="idx <= 9" :name="item.name" :value="item.value" :type="item.type" />
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.transactions {
  display: flex;
  flex-direction: column;
  background-color: #333333;
  border-radius: 8px;
  padding: 20px;

  &__header {
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h2 {
      margin: 0;
    }
  }

  &__list {
    margin-top: 20px;
    overflow: hidden;
  }
}

.transaction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  background-color: #525252;
  color: #fff;
  font-size: 16px;
  font-weight: 600;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &__name {
    margin: 0;
  }

  &__value {
    margin: 0;
  }
}
</style>