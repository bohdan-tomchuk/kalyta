//pinia store
import { defineStore } from 'pinia'
import type { Transaction } from '@/types/Transaction'
import { supabase } from '@/lib/supabase'
import type { PostgrestError } from '@supabase/postgrest-js'

export const useTransactionsStore = defineStore("transactions", {
  state: () => ({
    transactions: [] as Transaction[],
    loading: false,
    error: {} as PostgrestError | null
  }),
  getters: {
    getTransactions: (state) => state.transactions
  },
  actions: {
    async removeTransaction (id: string) {
      try {
        await supabase
          .from('transactions')
          .delete()
          .eq('id', id)
      } catch (error) {
        this.error = error as PostgrestError
      }
    },
    async fetchTransactions () {
      try {
        const { data: transactionsList } = await supabase
          .from('transactions')
          .select('*')
        this.transactions = transactionsList as Transaction[]
      } catch (error) {
        this.error = error as PostgrestError
      }
    }
  }
})