<script setup lang="ts">
import { type PropType, toRef, ref } from 'vue'
import type { Field, ObjectGeneric } from './FormBuilder'
import { type FormRules, ElNotification, type FormInstance } from 'element-plus'

export interface DataStructure {
  values: ObjectGeneric
}

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
  fields: {
    type: Array as PropType<Field[]>,
    default: () => [],
    required: true
  },
  rules: {
    type: Object as PropType<FormRules>,
    default: () => ({})
  },
  submitMethod: {
    type: Function as PropType<(data: any) => Promise<void>>,
    required: true
  }
})
  
const values = ref<DataStructure['values']>({})

const formRef = ref<FormInstance>()

props.fields.forEach(({ name, props }) => {
  if (props?.value != undefined) {
    values.value[name] = props.value
    props.value = toRef(props.value)
  }
})

if (props.data) {
  Object.assign(values.value, props.data)
}

async function submit(formRef: FormInstance | undefined) {
  if (!formRef) return
  await formRef.validate((valid, fields) => {
    if (valid) {
      props.submitMethod(values.value)
    } else {
      ElNotification({
        title: 'Error',
        message: 'Form validation failed',
        type: 'error'
      })
      return false
    }
  })
}

function onChangeHandler(payload: any, fieldName: string) {
  values.value[fieldName] = payload
}

</script>

<template>
  <el-form
    :model="values"
    ref="formRef"
    :rules="props.rules"
  >
    <template v-for="field in props.fields" :key="field.name">
      <label>
        <span>{{ field.label }}</span>
        <component
          :id="field.name"
          :is="field.component"
          :type="field.type"
          :prop="field.name"
          v-bind="{ ...field.props, ...field.attrs }"
          :model-value="values[field.name]"
          @update:modelValue="onChangeHandler($event, field.name)"
        />
      </label>
    </template>
    <el-button type="primary" @click="submit(formRef)">Submit</el-button>
  </el-form>
</template>