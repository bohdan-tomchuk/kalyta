import FormInput from './inputs/FormInput.vue'
import FormSelect from './inputs/FormSelect.vue'
import type FormBuilder from './FormBuilder.ts'
import LoginProvider from './providers/LoginProvider.vue'
import TransactionProvider from './providers/TransactionProvider.vue'
import type { ITransaction } from '@/types/Transaction';

export default class FormDirector {
  builder: FormBuilder;

  constructor(builder: FormBuilder) {
    this.builder = builder;
  }

  makeLoginForm() {
    return this.builder
      .addProvider(LoginProvider)
      .addField({
        component: FormInput,
        name: 'email',
        type: 'email',
        label: 'Email',
        props: {
          value: ''
        }
      })
      .addField({
        component: FormInput,
        name: 'password',
        type: 'password',
        label: 'Password',
        props: {
          value: ''
        }
      })
      .build();
  }

  makeTransactionForm(mode: string, data?: ITransaction) {
    return this.builder
      .addProvider(TransactionProvider, mode)
      .addField({
        component: FormInput,
        name: 'name',
        type: 'text',
        label: 'Name',
        props: {
          value: data?.name || ''
        }
      })
      .addField({
        component: FormInput,
        name: 'amount',
        type: 'number',
        label: 'Amount',
        props: {
          value: data?.amount || ''
        }
      })
      .addField({
        component: FormSelect,
        name: 'type',
        type: 'select',
        label: 'Type',
        props: {
          value: data?.type || '',
          options: [
            { label: 'Expense', value: 'expense' },
            { label: 'Income', value: 'income' }
          ]
        }
      })
      .build();
  }
}