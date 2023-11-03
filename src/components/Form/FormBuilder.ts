import { defineComponent, h, type VNode } from "vue";
import FormFactory from "./FormFactory.vue";

export interface ObjectGeneric {
  [keys: string]: any;
}

export interface Field {
  component: any;
  type: string;
  label?: string;
  name: string;
  props?: ObjectGeneric;
  attrs?: ObjectGeneric;
  validation?: any;
}

export default class FormBuilder {
  fields: Field[];
  provider: any;
  providerProps?: string;

  constructor() {
    this.fields = [];
  }

  addProvider(provider: any, props?: string) {
    this.provider = provider;
    if (props) this.providerProps = props;
    return this;
  }

  addField(field: Field) {
    this.fields.push(field);
    return this;
  }

  build() {
    const Fields = this.fields;
    const Provider = this.provider;
    const ProviderProps = this.providerProps;

    return defineComponent({
      props: {
        data: {
          type: Object,
          default: () => ({})
        }
      },
      render(): VNode {
        return h(Provider, { mode: ProviderProps }, () => [
          h(FormFactory, { fields: Fields, data: this.data })
        ])
      },
    });
  }
}