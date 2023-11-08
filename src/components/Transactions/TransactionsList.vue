<script lang="ts">
import TransactionItem from './TransactionItem'
import { useTransactionsStore } from '@/stores/transactionsStore'
import { defineComponent, ref } from 'vue'
import FormDirector from '@/components/Form/FormDirector'
import FormBuilder from '@/components/Form/FormBuilder'

export default defineComponent({
  name: 'TransactionsList',
  components: {
    TransactionItem,
    CreateTransactionForm: new FormDirector(new FormBuilder()).makeTransactionForm('create')
  },
  setup() {
    const modal = ref(false)

    const store = useTransactionsStore()

    store.fetchTransactions()

    return {
      modal,
      store,
    }
  },
})

</script>

<template>
  <div class="transactions">
    <div class="transactions__header">
      <h2 class="transactions__title">Transactions</h2>
      <el-button @click="modal = true" type="primary" class="transactions__btn">+</el-button>
    </div>
    <div class="transactions__list">
      <template v-for="(item, idx) in store.transactions" :key="idx">
        <TransactionItem v-if="idx <= 9" :name="item.name" :value="item.amount" :type="item.type" :id="item.id" :index="idx" />
      </template>
    </div>
    <el-dialog
      v-model="modal"
      width="30%"
    >
      <CreateTransactionForm :submitMethod="store.createTransaction" />
    </el-dialog>
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
  align-items: center;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #525252;
  color: #fff;
  font-size: 16px;
  font-weight: 600;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &__name {
    margin: 0 auto 0 0;
  }

  &__value {
    margin: 0 20px 0 0;
  }
}
</style>