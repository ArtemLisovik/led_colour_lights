import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'store/store'
import { Button, P } from 'ui'
import { SecondaryLayout } from 'layouts/SecondaryLayout'
import { addProduct } from 'containers/Cart/store/CartSlice'
import { ProductType } from 'types/types'
import { Link, Navigation, useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { db } from 'config/firebase'
import { Pagination, Scrollbar, A11y, Autoplay, Navigation as Navig } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Zoom, toast } from 'react-toastify'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const ProductPage = () => {

    const [product, setProduct] = useState<ProductType | null>()
    const [selectedColor, setSelectedColor] = useState<any | null>()
    const [selectedLength, setSelectedLength] = useState<string | null>()

    useEffect(() => {
        if (product?.colors) {
          setSelectedColor(Object.entries(product?.colors)[0])
        }
      }, [product])

    const colorHandler = (color: string) => {
        setSelectedColor(color)
    }

    const lengthHandler = (length: string) => {
        setSelectedLength(length)
    }

    const category = useParams().category as string
    const sub = useParams().subcategory as string
    const id = useParams().productId as string


    useEffect(() => {
        const getProduct = async () => {
            const productRef = doc(db, 'products', category)
            const productRes = await getDoc(productRef)
            // setProduct(productRes.data()?.[sub][id] as ProductType)
            setProduct(productRes.data()?.[sub][id] as any)
        }
        getProduct()
    }, [])

    const dispatch = useDispatch()

    const buyProduct = (e: any) => {    
        if ((product?.length && selectedLength) && (product?.colors && selectedColor)) {
          dispatch(addProduct({ ...product }))
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
        else if ((product?.length && selectedLength && !product?.colors) || (product?.colors && selectedColor && !product?.length)) {
          dispatch(addProduct({ ...product }))
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
        else if (!product?.length && !product?.colors) {
          dispatch(addProduct({ ...product }))
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
        <SecondaryLayout>
            <section className="primary">
                <div className="container">

                    <a href="" className="primary__pathTo-mobile">Назад</a>
                    <div className="primary__card">
                        <div className="primary__photo-block">
                            <div className="primary__photo-wrapper">

                                {selectedColor?.[1] && <Swiper
                                    // install Swiper modules
                                    modules={[Navig, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    speed={600}
                                    loop={true}
                                    navigation={true}
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
                                                    <img loading='lazy' src={image} alt="product image" className="new__card__photo card__photo" />

                                                </SwiperSlide>

                                            )
                                        })
                                    }
                                </Swiper>}
                            </div>
                        </div>


                        <div className="primary__description description">
                            <h2 className="description__title">{product?.name}</h2>
                            <p className="description__text">{product?.description}</p>

                            {product?.colors &&
                                <>
                                    <p className="description__length-title">Колір:</p>
                                    <ul className="description__length">

                                        {Object.entries(product.colors).map(color => {
                                            return (
                                                <li
                                                    onClick={(e) => colorHandler(color as any)}
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

                            {product?.length &&
                                <>
                                    <p className='description__length-title'>Довжина:</p>
                                    <ul className="description__length">
                                        {product?.length.map(length => {
                                            return (
                                                <li
                                                    onClick={(e) => lengthHandler(length)}
                                                    key={length}
                                                    className={selectedLength === length ? 'description__length-item selected' : 'description__length-item'}
                                                >
                                                    {length} м
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </>



                            }
                            <p className="description__price">{product?.newPrice}<span> грн</span></p>

                            <div className='button__wrapper'>
                                <Button
                                onClick={buyProduct}
                                type='dark'>Додати у кошик</Button>
                            </div>

                            {/* <button className="description__button">Додати у кошик</button> */}
                            <p className="description__delivery"><span><i className="fa-solid fa-check"></i></span> Доставка
                                протягом 1-2 днів</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="secondary">
                <div className="secondary__wrapper">
                    <div className="secondary__photo-block">
                        <div className="secondary__container-sm">
                            <div className="secondary__photo-wrapper">
                                <img src="./assets/new__card.webp" alt="card" />
                            </div>
                        </div>


                    </div>

                    <div className="secondary__description-block">
                        <div className="secondary__container-sm">
                            <div className="secondary__description2-wrapper description2">
                                <div className="description2__block-top">
                                    <h3 className="description2__title">BLACK OUDH</h3>
                                    <p className="description2__text">Precious Oudh establishes a warm Oriental woody fragrance
                                        that
                                        gives life to an elegant and sophisticated atmosphere.</p>
                                </div>
                                <div className="description2__block-bottom">
                                    <h3 className="description2__title">PATCHOULI
                                    </h3>
                                    <p className="description2__text">Patchouli is considered a very important ingredient in
                                        many
                                        love potions in India. This is not really surprising when you consider the sultry
                                        tones
                                        of musk and earth that conjure up something deeply sensual.</p>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section >

            <section className="howToUse">
                <div className="howToUse__poster">
                    <img src="./assets/post2.jpeg" alt="post" className="howToUse__image" />
                </div>

                <div className="howToUse__info">
                    <div className="secondary__container-sm">
                        <div className="howToUse__instruction">
                            <h3 className="howToUse__title">How to Use
                            </h3>
                            <p className="howToUse__descr">1) Remove the foil carefully without damaging the membrane 2) Click the clip onto the holder in the preferred position 3) Click the perfume onto your car’s fan unit 4) Adjust the fan setting to regulate the intensity of the fragrance</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="extra">
                <div className="container">
                    <h2 className="extra__title cards__title">Other customers also viewed</h2>
                    <div className="extra__cards cards">

                        <a href="" className="extra__card card">
                            <img src="./assets/new__card.webp" alt="" className="extra__card__photo card__photo" />
                            <h3 className="extra__card__title card__title">Гирлянда</h3>
                            <p className="extra__card__descr card__descr">Лучшая гирлянда в мире</p>
                            <p className="extra__card__price card__price">49.99 $</p>
                            <button className="extra__card__btn card__button">Купить</button>
                        </a>

                        <a href="" className="extra__card card">
                            <img src="./assets/new__card.webp" alt="" className="extra__card__photo card__photo" />
                            <h3 className="extra___card__title card__title">Гирлянда</h3>
                            <p className="extra___card__descr card__descr">Лучшая гирлянда вefdfdsfdsfdsfsfdsfdsfdfdsfdsfdsfdsfd мире</p>
                            <p className="extra___card__price card__price">49.99 $</p>
                            <button className="extra__card__btn card__button">Купить</button>

                        </a>

                        <a href="" className="extra___card card">
                            <img src="./assets/new__card.webp" alt="" className="extra___card__photo card__photo" />
                            <h3 className="extra___card__title card__title">Гирлянда</h3>
                            <p className="extra___card__descr card__descr">Лучшая гирлянда в мире</p>
                            <p className="extra___card__price card__price">49.99 $</p>
                            <button className="extra__card__btn card__button">Купить</button>
                        </a>

                    </div>
                </div>
            </section>
        </SecondaryLayout>
    )
}
