import { ProductType } from 'types/types'
import './ProductItem.scss'
import { useDispatch } from 'react-redux'
import { addProduct } from 'containers/Cart/store/CartSlice'
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


export const ProductItem = ({ colors, name, newPrice, description, image, oldPrice, id, options, length }: ProductType) => {

  const [selectedLength, setSelectedOption] = useState()
  const [selectedColor, setSelectedColor] = useState<any>()

  useEffect(() => {
    if (colors) {
      setSelectedColor(Object.entries(colors)[0])
    }
    
  }, [colors])

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

  console.log(selectedColor?.[1])
  // if (colors) {
  //   Object.entries(colors).map((color:any) => {
  //     console.log(color)
  //   })
  // }
  return (
    <Link to={`${id}`} className="new__card card">


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
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        >

                            {
                              selectedColor[1].map((image:any) => {
                                return (
                                  <SwiperSlide>
                                    <img loading='lazy' src={image} alt="product image" className="new__card__photo card__photo" />
                                  </SwiperSlide>
                                  
                                )
                              })
                            }
                       



                    </Swiper>}


      {/* <img loading='lazy' src={selectedColor?.[1]} alt="product image" className="new__card__photo card__photo" /> */}


      <h3 className="new__card__title card__title">{name}</h3>
      <p className="new__card__descr card__descr">{description}</p>


      {
        <>
          <p className="card__extra-options-title">Колір:</p>
          <ul className="card__colors-list">       
            
            {colors && Object.entries(colors).map(color => {
              console.log(color[0] === selectedColor?.[0])
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

      {
        <>
          <p className="card__extra-options-title">Довжина:</p>
          <ul className="card__extra-options">
            {length && length.map(lengthItem => {
              return (
                <li
                  onClick={(e) => optionHandler(e as any, lengthItem)}
                  key={lengthItem}
                  className={selectedLength === lengthItem ? `card__extra-options-item selected` : `card__extra-options-item`}
                >
                  {lengthItem} м
                </li>
              )
            })}
          </ul>
        </>
      }


      <p className="new__card__price card__price">{newPrice} грн {oldPrice && <span className='card__old-price'>{oldPrice} грн</span>}</p>
      <button
        onClick={(e) => buyProduct(e)}
        className="popular__card__btn card__button">Купить</button>
    </Link>
  )
}
