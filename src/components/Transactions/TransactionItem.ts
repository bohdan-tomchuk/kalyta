import { h } from "vue"
import { useTransactionsStore } from "@/stores/transactionsStore"
import { ElButton } from "element-plus"
import { Delete } from '@element-plus/icons-vue'

type FComponentProps = {
  name: string
  value: number
  type: string
  id: string
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
      h(ElButton, { class: 'transaction__delete', icon: Delete, onClick: () => store.removeTransaction(props.id) })
    ]
  )
}

export default TransactionItem