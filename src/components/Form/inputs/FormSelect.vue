<script setup lang="ts">

const props = defineProps({
  type: {
    default: null,
    type: String,
  },
  modelValue: {
    default: null,
    type: [String, Boolean, Number],
  },
  options: {
    default: null,
    type: Array,
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
    <el-select 
    :modelValue="props.modelValue"
    placeholder="Select"
    @change="onInput"
  >
      <el-option
        v-for="item in props.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>
