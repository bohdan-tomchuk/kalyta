import { h } from "vue"
import { useTransactionsStore } from "@/stores/transactionsStore"
import { ElButton, ElPopconfirm } from "element-plus"
import { Delete } from '@element-plus/icons-vue'
import EditTransactionDialog from "./EditTransactionDialog.vue"

type FComponentProps = {
  name: string
  value: number
  type: string
  id: string,
  index: number
}

const store = useTransactionsStore()

const TransactionItem = (props: FComponentProps) => {
  return h(
    'div',
    {
      class: 'transaction'
    },
    [
      h('div', { class: 'transaction__name' }, props.name),
      h('div', { class: 'transaction__value' }, (props.type === 'expense' ? '-' : '+' ) + props.value + '$'),
      h(ElPopconfirm, { title: 'Are you shure to delete ?', onConfirm: () => store.removeTransaction(props.id, props.index)}, {
        reference: () => h(ElButton, { 
          class: 'transaction__delete', 
          icon: Delete,
          type: 'danger'
        })
      }),
      h(EditTransactionDialog, { data: { 
        name: props.name, 
        amount: props.value, 
        type: props.type, 
        id: props.id
       } })
    ]
  )
}

export default TransactionItem