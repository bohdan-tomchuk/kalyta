<script lang="ts">
import { ref, defineComponent } from 'vue'
import FormBuilder from '@/components/Form/FormBuilder'
import FormDirector from '@/components/Form/FormDirector'
import { Edit } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    EditTransactionForm: new FormDirector(new FormBuilder()).makeTransactionForm('edit')
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
  },
  setup() {
    const modal = ref(false)

    return {
      modal,
      Edit
    }
  
  }
})
</script>

<template>
  <div>
    <el-button 
      @click="modal = true" 
      :icon="Edit"
    ></el-button>
    <el-dialog
      v-model="modal"
      width="30%"
    >
      <EditTransactionForm :data="$props.data" />
    </el-dialog>
  </div>
</template>