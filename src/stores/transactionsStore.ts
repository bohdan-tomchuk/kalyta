//pinia store
import { defineStore } from 'pinia'
import type Transaction from '@/types/Transaction'

export const useTransactionsStore = defineStore('transactions', () => {
  let transactions: Transaction[] = [
    { name: "Salary", value: 2000, type: "income" },
    { name: "Rent", value: 1000, type: "expense" },
    { name: "Groceries", value: 500, type: "expense" },
    { name: "Bonus", value: 100, type: "income" },
    { name: "Car", value: 500, type: "expense" },
    { name: "Dividends", value: 100, type: "income" },
    { name: "Salary", value: 2000, type: "income" },
    { name: "Rent", value: 1000, type: "expense" },
    { name: "Groceries", value: 500, type: "expense" },
    { name: "Salary", value: 2000, type: "income" },
    { name: "Rent", value: 1000, type: "expense" },
    { name: "Groceries", value: 500, type: "expense" },
    { name: "Bonus", value: 100, type: "income" },
    { name: "Car", value: 500, type: "expense" },
    { name: "Dividends", value: 100, type: "income" },
    { name: "Salary", value: 2000, type: "income" },
    { name: "Rent", value: 1000, type: "expense" },
    { name: "Groceries", value: 500, type: "expense" },
  ]

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