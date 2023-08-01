import { ProductType } from 'types/types'
import './ProductItem.scss'
import { useDispatch } from 'react-redux'
import { addProduct } from 'containers/Cart/store/CartSlice'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const ProductItem = ({ name, newPrice, description, image, oldPrice, id, options }: ProductType) => {

  const [selectedOption, setSelectedOption] = useState()

  const dispatch = useDispatch()

  const optionHandler = (e: any, option: any) => {
    e.preventDefault()
    setSelectedOption(option)
  }


  const buyProduct = (e: any) => {
    e.preventDefault()
    dispatch(addProduct({ name, newPrice, description, image, oldPrice, id }))
  }
  return (
    <Link to={`/product/${id}`} className="new__card card">
      <img loading='lazy' src={image} alt="product image" className="new__card__photo card__photo" />
      <h3 className="new__card__title card__title">{name}</h3>
      <p className="new__card__descr card__descr">{description}</p>
      <ul className="card__extra-options">

        {
          options && options.map(option => {
            return (
              <li
                onClick={(e) => optionHandler(e as any, option)}
                key={option}
                className={selectedOption === option ? `card__extra-options-item selected` : `card__extra-options-item`}
                >
                  {option}
              </li>
            )
          })
        }

      </ul>
      <p className="new__card__price card__price">{newPrice} грн {oldPrice && <span className='card__old-price'>{oldPrice} грн</span>}</p>
      <button
        onClick={(e) => buyProduct(e)}
        className="popular__card__btn card__button">Купить</button>
    </Link>
  )
}
