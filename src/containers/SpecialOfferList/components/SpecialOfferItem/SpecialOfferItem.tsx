import { ProductType } from 'types/types'
import './SpecialOfferItem.scss'


export const SpecialOfferItem = ({name, id, description, newPrice, oldPrice, image}: ProductType) => {
  return (
    <div className="presentation__block">
          <div className="presentation__block__info">
            <p className="presentation__block__info__notification">Специально предложение</p>
            <h3 className="presentation__block__info__title">{name}</h3>
            <p className="presentation__block__info__descr">{description}</p>
            <a href="" className="presentation__block__info__button buy__button">Купить</a>
          </div>
          <div className="presentation__block__photo__wrapper">
            <img src={image} alt="product image" className="presentation__item__photo card__photo"/>
          </div>
        </div>
  )
}
