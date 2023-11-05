<script lang="ts">
import { defineComponent, type PropType, toRef, inject } from 'vue'
import type { Field, ObjectGeneric } from './FormBuilder'

export interface DataStructure {
  values: ObjectGeneric
  errors: ObjectGeneric
}

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    fields: {
      type: Array as PropType<Field[]>,
      default: () => [],
      required: true
    }
  },
  setup() {
    return {
      submitMethod: inject<(data: any, id?: string) => Promise<void>>('submitMethod')
    }
  },
  data(): DataStructure {
    return {
      errors: {},
      values: {}
    }
  },
  created() {
    const values: any = {}
    this.fields.forEach(({ name, props }) => {
      if (props?.value != undefined) {
        values[name] = props.value
        props.value = toRef(props.value)
      }
    })
    this.values = values

    if (this.data) {
      Object.assign(this.values, this.data)
    }
  },
  methods: {
    async submit() {
      this.submitMethod!(this.values, this.data.id)
    },
    onChangeHandler(payload: any, fieldName: string) {
      this.values[fieldName] = payload
    },
  }
})
</script>

<template>
  <el-form>
    <template v-for="field in fields" :key="field.name">
      <label>
        <span>{{ field.label }}</span>
        <component
          :id="field.name"
          :is="field.component"
          :type="field.type"
          v-bind="{ ...field.props, ...field.attrs }"
          :model-value="values[field.name]"
          @update:modelValue="onChangeHandler($event, field.name)"
        />
      </label>
    </template>
    <el-button type="primary" @click="submit">Submit</el-button>
  </el-form>
</template>