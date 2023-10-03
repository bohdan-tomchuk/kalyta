import { h } from "vue"

type FComponentProps = {
  name: string
  value: number
  type: string
}

const TransactionItem = (props: FComponentProps) => {
  return h(
    'div',
    {
      class: 'transaction'
    },
    [
      h('div', { class: 'transaction__name' }, props.name),
      h('div', { class: 'transaction__value' }, (props.type === 'income' ? '+' : '-' ) + props.value + '$')
    ]
  )
}

export default TransactionItem