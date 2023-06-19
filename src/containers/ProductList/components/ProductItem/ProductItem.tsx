import { ProductType } from 'types/types'
import './ProductItem.scss'

export const ProductItem = ({name, newPrice, description, image, oldPrice}: ProductType ) => {
  return (
    <a href="./productCard.html" className="new__card card">
    <img loading='lazy' src={image} alt="product image" className="new__card__photo card__photo"/>
    <h3 className="new__card__title card__title">{name}</h3>
    <p className="new__card__descr card__descr">{description}</p>
    <p className="new__card__price card__price">{newPrice} грн {oldPrice && <span className='card__old-price'>{oldPrice} грн</span>}</p>
    <button className="popular__card__btn card__button">Купить</button>
  </a>
  )
}
