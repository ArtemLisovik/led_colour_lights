import { ProductType } from 'types/types'
import './CartProduct.scss'


export const CartProduct = ({name, description, oldPrice, newPrice, id, image}:ProductType) => {
  return (
    <div className="cart-product">
        <div className="cart-product__image">
            <img src={image} alt="product image" />
        </div>
        <div className="cart-product__info">
                <p className="cart-product__name">{name}</p>
                <p className="cart-product__description">{description}</p>
        </div>
        <div className="cart-product__price">
                {newPrice} грн
        </div>
    </div>
  )
}
