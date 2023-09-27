import './CartProduct.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { decreaseCountProduct, deleteProduct, increaseCountProduct } from 'containers/Cart/store/CartSlice'
import { Link } from 'react-router-dom'


export const CartProduct = ({ name, description, oldPrice, newPrice, id, image, count, selectedColor, selectedLength, path }: any) => {

  const { products } = useSelector((state: RootState) => state.CartReducer)

  console.log(products)

  const dispatch = useDispatch()

  const removeProductFromCart = () => {
    dispatch(deleteProduct({ name, description, oldPrice, newPrice, id, image, count, selectedColor, selectedLength }))
  }

  return (
    <div className="cart-product">

      <Link to={`/catalogue/${path}/${id}`} className="cart-product__image">
        <img src={selectedColor[1]} alt="product image" />
      </Link>

      <div className="cart-product__info">
        <Link to={`/catalogue/${path}/${id}`} className="cart-product__name">{name}</Link>
        <p className="cart-product__description">{description}</p>

        <svg
          onClick={removeProductFromCart}
          xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 55 55" width='15px'
          height='15px' viewBox="0 0 55 55" id="trash"><path d="M43.19,7.97h-8.42V5.51c0-1.66-1.35-3.01-3.01-3.01h-8.52c-1.66,0-3.01,1.35-3.01,3.01v2.46h-8.42
		c-2.32,0-4.22,1.89-4.22,4.22v4.14c0,0.55,0.45,1,1,1h2.09v30.96c0,2.33,1.89,4.22,4.21,4.22H40.1c2.33,0,4.22-1.89,4.22-4.22
		V17.32h2.09c0.55,0,1-0.45,1-1v-4.14C47.41,9.86,45.52,7.97,43.19,7.97z M22.23,5.51c0-0.56,0.45-1.01,1.01-1.01h8.52
		c0.56,0,1.01,0.45,1.01,1.01v2.46H22.23V5.51z M42.32,48.28c0,1.23-0.99,2.22-2.22,2.22H14.89c-1.22,0-2.21-0.99-2.21-2.22V17.32
		h29.64V48.28z M45.41,15.32H9.59v-3.14c0-1.22,0.99-2.22,2.22-2.22h31.39c1.22,0,2.22,0.99,2.22,2.22V15.32z"></path><path d="M30.77 46.5c.55 0 1-.45 1-1V22.32c0-.55-.45-1-1-1s-1 .45-1 1V45.5C29.77 46.05 30.22 46.5 30.77 46.5zM24.23 46.5c.55 0 1-.45 1-1V22.32c0-.55-.45-1-1-1s-1 .45-1 1V45.5C23.23 46.05 23.67 46.5 24.23 46.5zM37.32 46.5c.55 0 1-.45 1-1V22.32c0-.55-.45-1-1-1s-1 .45-1 1V45.5C36.32 46.05 36.77 46.5 37.32 46.5zM17.68 46.5c.55 0 1-.45 1-1V22.32c0-.55-.45-1-1-1s-1 .45-1 1V45.5C16.68 46.05 17.13 46.5 17.68 46.5z"></path></svg>

        <div className="cart-product__options">
          <div className="cart-product__options-item">{selectedColor ? selectedColor[0] : null}</div>
          <div className="cart-product__options-item">{selectedLength} м</div>
        </div>

        <div className="cart-product__final">
          <div className="cart-product__price">
            {count > 1 ?
              <span onClick={() => dispatch(decreaseCountProduct({ id, selectedLength, selectedColor }))} className="cart-product__counter" id='decr'></span> :
              <span className="cart-product__counter-empty" id='empty'></span>}

            <span className='cart-product__number'>{count}</span>
            <span onClick={() => dispatch(increaseCountProduct({ id, selectedLength, selectedColor }))} className="cart-product__counter" id='incr'></span>
          </div>

          <div className="cart-product__price">{newPrice * count} грн</div>
        </div>

      </div>

    </div>
  )
}
