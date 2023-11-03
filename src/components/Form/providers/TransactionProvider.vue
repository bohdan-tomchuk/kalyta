<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { useTransactionsStore } from '@/stores/transactionsStore'
import type { ITransaction } from '@/types/Transaction'

enum MODES {
  CREATE = 'create',
  EDIT = 'edit'
}

export default defineComponent({
  name: 'TransactionProvider',
  props: {
    mode: {
      type: String as PropType<MODES>,
      default: MODES.CREATE,
      required: true
    }
  },
  provide() {
    return {
      submitMethod: async (data: ITransaction, id?: string) => {
        if (this.mode === 'create') {
          await this.store.createTransaction(data)
        } else {
          await this.store.editTransaction(data, id!)
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