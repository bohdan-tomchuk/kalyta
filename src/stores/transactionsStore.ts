//pinia store
import { defineStore } from 'pinia'
import type { Transaction, TransactionInsert, TransactionUpdate } from '@/types/Transaction'
import { supabase } from '@/lib/supabase'
import { ElNotification } from 'element-plus'

export const useTransactionsStore = defineStore("transactions", {
  state: () => ({
    transactions: [] as Transaction[],
    loading: false
  }),
  actions: {
    async removeTransaction (id: string, idx: number) {
      try {
        const { error } = await supabase
          .from('transactions')
          .delete()
          .eq('id', id)

        if (error) throw error

        ElNotification({
          title: 'Success',
          message: 'Transaction deleted',
          type: 'success'
        })
        this.transactions.splice(idx, 1)
      } catch (error) {
        if (error instanceof Error) {
          ElNotification({
            title: 'Error',
            message: error.message,
            type: 'error'
          })
        } else {
          console.log(error)
        }
      }
    },
    async createTransaction (data: TransactionInsert) {
      try {
        const { data: response, error } = await supabase.from('transactions').insert([data]).select()

        if (error) throw error
        ElNotification({
          title: 'Success',
          message: 'Transaction created',
          type: 'success'
        })

        this.transactions.push(response[0])
      } catch (error) {
        if (error instanceof Error) {
          ElNotification({
            title: 'Error',
            message: error.message,
            type: 'error'
          })
        } else {
          console.log(error)
        }
      }
    },
    async editTransaction (data: TransactionUpdate): Promise<void> {
      const { id } = data
      if (typeof id === 'undefined') throw new Error('id is undefined')
      try {
        const { data: response, error } = await supabase
          .from('transactions')
          .update(data)
          .eq('id', id)
          .select()
        
        if (error) throw error

        ElNotification({
          title: 'Success',
          message: 'Transaction updated',
          type: 'success'
        })
        const idx = this.transactions.findIndex((transaction) => transaction.id === id)
        this.transactions[idx] = response[0]
      } catch (error) {
        if (error instanceof Error) {
          ElNotification({
            title: 'Error',
            message: error.message,
            type: 'error'
          })
        } else {
          console.log(error)
        }
      }
    },
    async fetchTransactions () {
      try {
        const { data, error } = await supabase
          .from('transactions')
          .select('*')
          .order('date', { ascending: false })

        if (error) throw error

        this.transactions = data
      } catch (error) {
        if (error instanceof Error) {
          ElNotification({
            title: 'Error',
            message: error.message,
            type: 'error'
          })
        } else {
          console.log(error)
        }
      }
    }
  }
})