import './ExtraPropositionItem.scss'

type ExtraPropositionItemType = {
  title: string,
  message: string
}
export const ExtraPropositionItem = ({ title, message }: ExtraPropositionItemType) => {
  return (
    <div className="advantages__block">
      <p className="advantages__notification">{title}</p>
      <p className="advantages__item">{message}</p>
    </div>
  )
}
