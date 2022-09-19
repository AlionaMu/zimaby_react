import React from "react";
import CartItem from "./CartItem";

const CartList = ({cartItems}: any) => {
    return (
          <div className="cart__list">
            {cartItems.map((item: any) => {
            return <CartItem props={item} key={item.id} src={item.src} />
          })}
          </div>
        );
  };
  
  export default CartList;