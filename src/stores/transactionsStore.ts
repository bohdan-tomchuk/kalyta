//pinia store
import { defineStore } from 'pinia'
import type { Transaction } from '@/types/Transaction'

export const useTransactionsStore = defineStore('transactions', () => {
  let transactions: Transaction[] = []

  function getTransactions () {
    return transactions
  }

  function addTransaction (transaction: Transaction) {
    transactions.push(transaction)
  }

  function removeTransaction (id: string) {
    transactions = transactions.filter((t) => t.id !== id)
  }

  function fetchTransactions () {
    
  }

  return {
    getTransactions,
    addTransaction,
    removeTransaction
  }
})