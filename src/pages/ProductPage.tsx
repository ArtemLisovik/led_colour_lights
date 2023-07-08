import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'store/store'
import { Button } from 'ui'
import { SecondaryLayout } from 'layouts/SecondaryLayout'
import { addProduct } from 'containers/Cart/store/CartSlice'
import { ProductType } from 'types/types'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { db } from 'config/firebase'


export const ProductPage = () => {

    const [product, setProduct] = useState<ProductType | null>()

    const id = useParams().productId as string

    const filters = ['candles', 'decor', 'garlands', 'news', 'stock']

    useEffect(() => {

        const getProduct = () => {
            filters.forEach(async (filter) => {
                const productRef = doc(db, 'products', filter)
                const productSnap = await getDoc(productRef)
                let result = productSnap.data()?.[id]
                
                result ? setProduct(productSnap.data()?.[id]) : result = false
            })
        }
        getProduct()
    }, [])

    return (
        <SecondaryLayout>
            <section className="primary">
                <div className="container">

                    {/* <ul className="primary__pathTo">
                        <li className="primary__pathToItem">
                            <a href="./index.html" className="primary__pathToLink">Головна</a>
                        </li>
                        <li className="primary__pathToItem"><span>-</span>
                            <a href="" className="primary__pathToLink">Герлянды на батарейках</a>
                        </li>
                        <li className="primary__pathToItem"><span>-</span>
                            <a href="" className="primary__pathToLink">автономные</a>
                        </li>
                    </ul> */}

                    <a href="" className="primary__pathTo-mobile">Назад</a>
                    <div className="primary__card">
                        <div className="primary__photo-block">
                            <div className="primary__photo-wrapper">
                                <img src={product?.image} alt="card__photo" className="primary__photo" />
                            </div>
                        </div>


                        <div className="primary__description description">
                            <h3 className="description__subtitle">{product?.name}</h3>
                            <h2 className="description__title">{product?.description}</h2>
                            <p className="description__notification">car perfume, 6 gr</p>
                            <p className="description__text">Life is a journey, enjoy the ride with this car perfume based
                                on the empowering and musky scents of oudh and patchouli. The frag ...</p>
                            <p className="description__price">{product?.newPrice}<span> грн</span></p>

                            <div className='button__wrapper'>
                                <Button type='dark'>Додати у кошик</Button>
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