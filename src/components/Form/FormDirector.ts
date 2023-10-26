import FormInput from './inputs/FormInput.vue'
import type FormBuilder from './FormBuilder.ts'
import LoginProvider from './providers/LoginProvider.vue'
import CreateTransactionProvider from './providers/CreateTransactionProvider.vue'

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

  makeCreateTransactionForm() {
    return this.builder
      .addProvider(CreateTransactionProvider)
      .addField({
        component: FormInput,
        name: 'name',
        type: 'text',
        label: 'Name',
        props: {
          value: ''
        }
      })
      .addField({
        component: FormInput,
        name: 'amount',
        type: 'number',
        label: 'Amount',
        props: {
          value: ''
        }
      })
      .addField({
        component: FormInput,
        name: 'type',
        type: 'select',
        label: 'Type',
        props: {
          value: '',
          options: [
            { label: 'Expense', value: 'expense' },
            { label: 'Income', value: 'income' }
          ]
        }
      })
      .build();
  }
}