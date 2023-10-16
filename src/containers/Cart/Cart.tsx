import { useEffect, useState } from 'react'

import { H4, Button } from 'ui'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { CartProduct } from './components/CartProduct/CartProduct'
import { ProductType } from 'types/types'
import { addProduct } from './store/CartSlice'

import './Cart.scss'
import { setOrderOpen } from 'store/OrderSlice'


export const Cart = ({ active, setActive }: { active: boolean, setActive: Function }) => {

  const { products, loading, totalPrice } = useSelector((state: RootState) => state.CartReducer)
  const [sumPrice, setSumPrice] = useState<number>(0)

  const dispatch = useDispatch()

  useEffect(() => {
    const storedData = localStorage.getItem('cartProducts');
    if (storedData && products.length < 1) {
      JSON.parse(storedData).forEach((product: ProductType) => {
        dispatch(addProduct(product))
      })
    }
  }, []);

  useEffect(() => {
    active ? document.body.style.overflow = 'hidden' : document.body.style.overflowY = 'scroll'
  }, [active])

  useEffect(() => {
    getTotalPrice()
    localStorage.setItem('cartProducts', JSON.stringify(products));
  }, [products, products.length])


  const getTotalPrice = () => {
    let sum = 0;
    products.forEach((product: ProductType) => {
      sum += +product.newPrice
    })
    setSumPrice(sum)
  }



  return (
    <div className={active ? `cart active` : 'cart'}>
      <div className="cart__backdrop"></div>

      <div className="cart__inner">
        <div className="cart__inner-container">
          <div
            onClick={() => setActive()}
            className="cart__button">
            <span className="close__button dark"></span>
          </div>

          <div className="cart__inner-block">
            <H4>{products.length > 0 ? 'Ваша корзина' : 'Ваша корзина порожня'}</H4>
            <p className='cart__paragraph'>{products.length > 0 ? `Кілкість обраних товарів: ${products.length}` : 'Обирайте із задоволенням!'}</p>
          </div>

          {products.length > 0 && <div className="cart__inner-products">
            {products && products.map((product: any, index: number) => {
              if (false) {

              } else {
                return (
                  <CartProduct
                    count={product.count}
                    key={index}
                    name={product.name}
                    description={product.description}
                    id={product.id}
                    newPrice={product.newPrice}
                    oldPrice={product.oldPrice}
                    image={product.image}
                    selectedColor={product.selectedColor}
                    selectedLength={product.selectedLength}
                    type={product.type}
                    path={product.path}
                  />
                )
              }
            })}
          </div>}

          {products.length > 0 && <div className="cart__inner-total">
            <p className="cart__inner-price">Загальна сума:</p>
            <p className="cart__inner-price">{sumPrice as any} грн</p>
          </div>}

          {products.length > 0 && <div className="cart__inner-buttons">
            <Button
              onClick={setActive}
              type=''>
              Продовжити
            </Button>

            <Button
              onClick={() => dispatch(setOrderOpen(true))}
              type='dark'
              >
              Оформити
            </Button>
          </div>}
        </div>
      </div>
    </div>
  )
}
