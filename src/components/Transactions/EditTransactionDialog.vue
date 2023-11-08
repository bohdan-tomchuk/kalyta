<script lang="ts">
import { ref, defineComponent, type PropType } from 'vue'
import FormBuilder from '@/components/Form/FormBuilder'
import FormDirector from '@/components/Form/FormDirector'
import { Edit } from '@element-plus/icons-vue'
import type { TransactionUpdate } from '@/types/Transaction'
import { useTransactionsStore } from '@/stores/transactionsStore'

export default defineComponent({
  components: {
    EditTransactionForm: new FormDirector(new FormBuilder()).makeTransactionForm('edit')
  },
  props: {
    data: {
      type: Object as PropType<TransactionUpdate>,
      required: true
    },
  },
  setup() {
    const modal = ref(false)

    const { editTransaction } = useTransactionsStore()

    return {
      editTransaction,
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
      <EditTransactionForm :data="$props.data" :submitMethod="editTransaction" />
    </el-dialog>
  </div>
</template>