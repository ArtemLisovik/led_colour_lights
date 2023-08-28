import { ProductType } from 'types/types'
import './ProductItem.scss'
import { useDispatch } from 'react-redux'
import { addProduct } from 'containers/Cart/store/CartSlice'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Zoom, toast } from 'react-toastify'

export const ProductItem = ({ colors, name, newPrice, description, image, oldPrice, id, options, length }: ProductType) => {

  const [selectedLength, setSelectedOption] = useState()
  const [selectedColor, setSelectedColor] = useState()

  const dispatch = useDispatch()

  const category = useParams().category
  const sub = useParams().subcategory

  const optionHandler = (e: any, option: any) => {
    e.preventDefault()
    setSelectedOption(option)
  }

  const colorHandler = (color: any, e: any) => {
    e.preventDefault()
    setSelectedColor(color)
  }

  const buyProduct = (e: any) => {
    e.preventDefault()

    if ((length && selectedLength) && (colors && selectedColor)) {
      dispatch(addProduct({ name, newPrice, description, image, oldPrice, id, selectedColor, selectedLength }))
      toast.success('Товар додано до кошика!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom
      });
    }
    else if ((length && selectedLength && !colors) || (colors && selectedColor && !length)) {
      dispatch(addProduct({ name, newPrice, description, image, oldPrice, id, selectedColor, selectedLength }))
      toast.success('Товар додано до кошика!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom
      });
    }
    else if (!length && !colors) {
      dispatch(addProduct({ name, newPrice, description, image, oldPrice, id }))
      toast.success('Товар додано до кошика!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom
      });
    }
    else {
      toast.error('Оберіть опції', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom
      });
    }
  }
  return (
    <Link to={`${id}`} className="new__card card">
      <img loading='lazy' src={image} alt="product image" className="new__card__photo card__photo" />

      <ul className="card__colors-list">
        {colors && colors.map(color => {
          return (
            <li
              onClick={(e) => colorHandler(color, e)}
              style={{ background: `${color}`, boxShadow: `${selectedColor === color ? `0 0 10px ${color} ` : 'none'}` }}
              key={color}
              className={selectedColor === color ? `card__colors-item active` : `card__colors-item`}
            >
            </li>
          )
        })}
      </ul>


      <h3 className="new__card__title card__title">{name}</h3>
      <p className="new__card__descr card__descr">{description}</p>
      <ul className="card__extra-options">

        {
          length && length.map(lengthItem => {
            return (
              <li
                onClick={(e) => optionHandler(e as any, lengthItem)}
                key={lengthItem}
                className={selectedLength === lengthItem ? `card__extra-options-item selected` : `card__extra-options-item`}
              >
                {lengthItem} м
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
