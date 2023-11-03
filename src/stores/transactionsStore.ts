//pinia store
import { defineStore } from 'pinia'
import type { ITransaction } from '@/types/Transaction'
import { supabase } from '@/lib/supabase'
import type { PostgrestError } from '@supabase/postgrest-js'
import { ElNotification } from 'element-plus'

export const useTransactionsStore = defineStore("transactions", {
  state: () => ({
    transactions: [] as ITransaction[],
    loading: false
  }),
  getters: {
    getTransactions: (state) => state.transactions
  },
  actions: {
    async removeTransaction (id: string, idx: number) {
      const { error } = await supabase
        .from('transactions')
        .delete()
        .eq('id', id)
      if (error) {
        ElNotification({
          title: 'Error',
          message: error.message,
          type: 'error'
        })
      } else {
        ElNotification({
          title: 'Success',
          message: 'Transaction deleted',
          type: 'success'
        })
        // delete item from transactions by idx
        this.transactions.splice(idx, 1)
      }
    },
    async createTransaction (data: ITransaction) {
      const { data: response, error } = await supabase.from('transactions').insert([data]).select()

      if (error) {
        ElNotification({
          title: 'Error',
          message: error.message,
          type: 'error'
        })
      } else {
        ElNotification({
          title: 'Success',
          message: 'Transaction created',
          type: 'success'
        })

        this.transactions.push(response[0])
      }
    },
    async editTransaction (data: ITransaction, id: string) {
      const { data: response, error } = await supabase
        .from('transactions')
        .update(data)
        .eq('id', id)
        .select()
      if (error) {
        ElNotification({
          title: 'Error',
          message: error.message,
          type: 'error'
        })
      } else {
        ElNotification({
          title: 'Success',
          message: 'Transaction updated',
          type: 'success'
        })
        const idx = this.transactions.findIndex((transaction) => transaction.id === id)
        this.transactions[idx] = response[0]
      }
    },
    async fetchTransactions () {
      const { data: transactionsList, error } = await supabase
        .from('transactions')
        .select('*')
        .order('date', { ascending: false })
      if (error) {
        ElNotification({
          title: 'Error',
          message: error.message,
          type: 'error'
        })
      } else {
        this.transactions = transactionsList as ITransaction[]
      }
    }
  }
})