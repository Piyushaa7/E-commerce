import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove from '../Assests/Assets/cart_cross_icon.png'
const CartItems = () =>{
    const {all_product,cartItem,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
    return(
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <hr />
            {all_product.map((e)=>{
                if(cartItem[e.id]>0){
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                        <p>${e.new_price*cartItem[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove} onClick={() => {removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>CART TOTAL</h1>
                    <div>
                        <div className="cartitems-total-items">
                            <p>SUBTOTAL</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
                <div className="cartitems-promocode">
                        <p>Enter promo code</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='Promo Code' />
                            <button>Submit</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CartItems