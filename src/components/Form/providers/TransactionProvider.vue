<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { useTransactionsStore } from '@/stores/transactionsStore'
import type { TransactionInsert, TransactionUpdate } from '@/types/Transaction'

export default defineComponent({
  name: 'TransactionProvider',
  props: {
    mode: {
      type: String as PropType<'edit' | 'create'>,
      default: 'create',
      required: true
    }
  },
  provide() {
    return {
      submitMethod: async (data: TransactionInsert | TransactionUpdate, id?: string) => {
        if (this.mode === 'edit' && id) {
          await this.store.editTransaction(data as TransactionUpdate, id)
        } else if (this.mode === 'create') {
          await this.store.createTransaction(data as TransactionInsert)
        } else {
          throw new Error('Invalid mode or missing id')
        }
      }
    }
  },
  setup() {
    const store = useTransactionsStore()

    return {
      store
    }
  },
  render() {
    return this.$slots.default?.()
  }
})
</script>