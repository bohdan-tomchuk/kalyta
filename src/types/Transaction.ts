// enum TransactionType {
//   INCOME = 'income',
//   EXPENSE = 'expense',
// }
export interface ITransaction {
  name: string;
  amount: number;
  id?: string;
  type: string;
}