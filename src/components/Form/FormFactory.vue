<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Field, ObjectGeneric } from './FormBuilder'

export interface ValidationResult {
  valid: boolean
  message?: string
}

export interface DataStructure {
  values: ObjectGeneric
  errors: ObjectGeneric
}

export default defineComponent({
  props: {
    id: {
      type: [String, Number],
      default: null
    },
    fields: {
      type: Array as PropType<Field[]>,
      default: () => []
    }
  },
  data(): DataStructure {
    return {
      errors: {},
      values: {}
    }
  },
  computed: {
    submitable() {
      const errors: number = [...Object.keys(this.errors)].filter(
        (i) => this.errors[i] != undefined
      ).length
      return errors === 0
    }
  },
  created() {
    const values: any = {}
    this.fields.forEach(({ name, props }) => {
      if (props?.value != undefined) {
        values[name] = props.value;
      }
    })
    this.values = values
  },
  methods: {
    async submit() {
      if (this.submitable) {
        console.log('submit')
      }
    }
  }
})
</script>