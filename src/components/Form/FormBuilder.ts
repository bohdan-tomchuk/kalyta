import { defineComponent, h, type VNode, type PropType } from "vue";
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

  constructor() {
    this.fields = [];
  }

  addField(field: Field) {
    this.fields.push(field);
    return this;
  }

  build() {
    const Fields = this.fields;

    return defineComponent({
      props: {
        data: {
          type: Object,
          default: () => ({})
        },
        submitMethod: {
          type: Function as PropType<(data: any) => Promise<void>>,
          required: true
        }
      },
      render(): VNode {
        return h(FormFactory, { fields: Fields, data: this.data, submitMethod: this.submitMethod })
      },
    });
  }
}