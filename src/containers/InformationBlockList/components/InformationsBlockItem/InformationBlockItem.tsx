import './InformationBlockItem.scss'

type InformationBlockItemType = {
    title: string,
    descr: string
}
export const InformationBlockItem = ({title, descr}: InformationBlockItemType) => {
    return (
        <div className="information__block">
            <h3 className="information__block-title">{title}</h3>
            <p className="information__block-text">{descr}</p>
        </div>
    )
}
