<script lang="ts">
import { defineComponent } from 'vue'
import { supabase } from '@/lib/supabase'
import { ElNotification } from 'element-plus'

interface ITransaction {
  type: string
  amount: number
  name: string
}

export default defineComponent({
  name: 'CreateTransactionProvider',
  provide() {
    return {
      submitMethod: async (data: ITransaction): Promise<void> => {
        const { error } = await supabase.from('transactions').insert([data]).select()

        if (error) {
          ElNotification({
            title: 'Error',
            message: error.message,
            type: 'error'
          })
        } else {
          ElNotification({
            title: 'Success',
            message: 'Transaction created',
            type: 'success'
          })
        }
      }
    }
  },
  render() {
    return this.$slots.default?.()
  }
})
</script>