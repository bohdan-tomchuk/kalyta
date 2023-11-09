import FormInput from './inputs/FormInput.vue'
import FormSelect from './inputs/FormSelect.vue'
import type FormBuilder from './FormBuilder'
import type { TransactionUpdate } from '@/types/Transaction';

export default class FormDirector {
  builder: FormBuilder;

  constructor(builder: FormBuilder) {
    this.builder = builder;
  }

  makeLoginForm() {
    return this.builder
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
      .addRules({
        email: [
          { required: true, message: 'Please input email', trigger: 'blur' },
          { type: 'email', message: 'Please input valid email', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please input password', trigger: 'blur' }
        ]
      })
      .build();
  }

  makeTransactionForm(mode: 'edit' | 'create', data?: TransactionUpdate) {
    return this.builder
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
      .addRules({
        name: [
          { required: true, message: 'Please input name', trigger: 'blur' }
        ],
        amount: [
          { required: true, message: 'Please input amount', trigger: 'blur' }
        ],
        type: [
          { required: true, message: 'Please select type', trigger: 'blur' }
        ]
      })
      .build();
  }
}