import { ProductType } from 'types/types'
import './ProductItem.scss'
import { useDispatch } from 'react-redux'
import { addProduct, increaseCountProduct } from 'containers/Cart/store/CartSlice'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Zoom, toast } from 'react-toastify'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useAppSelector } from 'hooks/useRedux'
import { RootState } from 'store/store'


export const ProductItem = ({ name, newPrice, description, image, oldPrice, id, options, length, avatars, type, path }: ProductType) => {


  const { products } = useAppSelector((state: RootState) => state.CartReducer)

  const [selectedLength, setSelectedOption] = useState<number>(length ? +length[0] : 0)
  const [selectedColor, setSelectedColor] = useState<any>()

  useEffect(() => {
    if (avatars) {
      setSelectedColor(Object.entries(avatars)[0])
    }
  }, [avatars])

  const dispatch = useDispatch()

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
  

    if ( products.some(product => (
        product.id === id && product.selectedColor === selectedColor && product.selectedLength === selectedLength
    )) ) {
      // console.log('Проверяем...')
      dispatch(increaseCountProduct(id))
    }
    else {
      console.log('Не проверяем')
      console.log('12323', newPrice);
     if ((length && selectedLength) && (avatars && selectedColor)) {
        dispatch(addProduct({ name, newPrice: newPrice[selectedLength], description, image, oldPrice, id, selectedColor, selectedLength, count: 1, type, path }))
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
      else if ((length && selectedLength && !avatars) || (avatars && selectedColor && !length)) {
        dispatch(addProduct({ name, newPrice: newPrice[selectedLength], description, image, oldPrice, id, selectedColor, selectedLength, count: 1,type, path }))
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
      else if (!length && !avatars) {

        dispatch(addProduct({ name, newPrice: newPrice[selectedLength], description, image, oldPrice, id, count: 1, type, path }))
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
  }
  
  return (
    <div className="new__card card">

      {selectedColor?.[1] && <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={600}
        loop={true}
        navigation={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
        {
          selectedColor[1].map((image: any) => {
            return (
              <SwiperSlide key={image}>
                <Link to={`${id}`} className="card__image">
                  <img loading='lazy' src={image} alt="product image" className="new__card__photo card__photo" />
                </Link>
              </SwiperSlide>

            )
          })
        }
      </Swiper>}

      <h3 className="new__card__title card__title">{name}</h3>
      <p className="new__card__descr card__descr">{description}</p>

      {avatars &&
        <>
          <p className="card__extra-options-title">Колір:</p>
          <ul className="card__colors-list">

            {Object.entries(avatars).map(color => {
              return (
                <li
                  onClick={(e) => colorHandler(color, e)}
                  key={color as any}
                  className={selectedColor?.[0] === color[0] ? `card__colors-item active` : `card__colors-item`}
                >
                  {color[0]}
                </li>
              )

            })}
          </ul>
        </>
      }

      {length &&
        <>
          <p className="card__extra-options-title">Довжина:</p>
          <ul className="card__extra-options">
            {length.map(lengthItem => {
              return (
                <li
                  onClick={(e) => optionHandler(e as any, lengthItem)}
                  key={lengthItem}
                  className={+selectedLength === +lengthItem ? `card__extra-options-item selected` : `card__extra-options-item`}
                >
                  {lengthItem} м
                </li>
              )
            })}
          </ul>
        </>
      }


      <p className="new__card__price card__price">{newPrice ? newPrice[selectedLength] : 0} грн {oldPrice && <span className='card__old-price'>{oldPrice} грн</span>}</p>
      <button
        onClick={(e) => buyProduct(e)}
        className="popular__card__btn card__button">Купити</button>
    </div>
  )
}
