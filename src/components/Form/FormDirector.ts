import FormInput from './inputs/FormInput.vue';
import type FormBuilder from './FormBuilder.ts';
import LoginProvider from './providers/LoginProvider.vue';

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
}