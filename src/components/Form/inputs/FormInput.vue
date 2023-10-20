<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  type: {
    default: null,
    type: String,
  },
  modelValue: {
    default: null,
    type: [String, Boolean],
  },
  data: {
    default: null,
  },
  name: {
    default: null,
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

// function onInput(event: any) {
//   console.log(event.target.value)
//   emit("update:modelValue", event.target.value);
//   props.type === "checkbox" && emit("update:modelValue", event.target.checked);
// }
function onInput(event: any) {
  emit("update:modelValue", event);
  props.type === "checkbox" && emit("update:modelValue", event);
}
</script>

<template>
  <el-form-item>
    <el-input
      :name="props.name"
      :type="props.type"
      :modelValue="props.modelValue"
      @input="onInput" 
    />
  </el-form-item>
  <!-- <div>
    <input
      :name="props.name"
      :type="props.type"
      :value="props.modelValue"
      :checked="Boolean(props.modelValue)"
      @input="onInput" 
    />
  </div> -->
</template>
