import { useEffect, useState } from 'react'
import './Cart.scss'
import { H3, H4, Button } from 'ui'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { CartProduct } from './components/CartProduct/CartProduct'
import { ProductType } from 'types/types'

export const Cart = ({ active, setActive }: { active: boolean, setActive: Function }) => {
  const [sumPrice, setSumPrice] = useState<number>(0)

  useEffect(() => {
    active ? document.body.style.overflow = 'hidden' : document.body.style.overflowY = 'scroll'
  }, [active])

   const {products, loading} = useSelector((state: RootState) => state.CartReducer)

  const getTotalPrice = () => {
    let sum = 0;
    products.forEach((product: ProductType) => {
      sum += +product.newPrice 
    })
    setSumPrice(sum)
   }

   useEffect(() => {
    getTotalPrice()
   }, [products])

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
          <H4>{products.length > 0 ? 'Ваша корзина': 'Ваша корзина порожня'}</H4>
          <p className='cart__paragraph'>{products.length > 0 ? `Кілкість обраних товарів: ${products.length}` : 'Обирайте із задоволенням!'}</p>
        </div>

        {products.length > 0 && <div className="cart__inner-products">
            {products && products.map((product:ProductType, index: number) => {
              return (
                <CartProduct 
                key={index}
                name={product.name}
                description={product.description}
                id={product.id}
                newPrice={product.newPrice}
                oldPrice={product.oldPrice}
                image={product.image}
                 />
              )
            })}
        </div>}

       {products.length > 0 && <div className="cart__inner-total">
          <p className="cart__inner-price">Загальна сума:</p>
          <p className="cart__inner-price">{sumPrice} грн</p>
        </div>}

        {products.length > 0 && <div className="cart__inner-buttons">
          <Button 
          type=''>
            Продовжити
          </Button>

          <Button
          type='dark'
          to='/order'>
           Оформити
          </Button>
        </div>}
        </div>
      </div>





    </div>
  )
}
