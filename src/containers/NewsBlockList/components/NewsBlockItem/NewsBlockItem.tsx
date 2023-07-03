import './NewsBlockItem.scss'

type NewsBlockItemType = {
    title:string,
    text:string,
    image:string
}
export const NewsBlockItem = ({title, text, image}: NewsBlockItemType ) => {
  return (
    <div className="news__block">
          
    <div className="news__block-descr">
      <p className="news__block-notifications">{title}</p>
      <h3 className="news__block-title">
        News
      </h3>
      <p className="news__block-text">{text}</p>
    </div>
    <div className="news__block-image">
      <img src={image} alt="news image" className="news__image"/>
    </div>
  </div>
  )
}
