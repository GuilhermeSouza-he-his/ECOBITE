import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const Cart = () => {

  const { cartItem, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)

  const navigate = useNavigate();
  const { t } = useTranslation()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>{t("cart.items")}</p>
          <p>{t("cart.title")}</p>
          <p>{t("cart.price")}</p>
          <p>{t("cart.quantity")}</p>
          <p>{t("cart.total")}</p>
          <p>{t("cart.remove")}</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }

        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>{t("cart.cart_totals")}</h2>
          <div>
            <div className="cart-totals-details">
               <p>{t("cart.subtotal")}</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-totals-details">
              <p>{t("cart.delivery_fee")}</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-totals-details">
              <b>{t("cart.total")}</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            </div>
            <button onClick={()=>navigate('/order')}>{t("cart.checkout")}</button>
        </div>
        <div className="cart-promocode">
          <div>
             <p>{t("cart.promo_text")}</p>
            <div className="cart-promocode-input">
               <input type="text" placeholder={t("cart.promo_placeholder")} />
               <button>{t("cart.submit")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
