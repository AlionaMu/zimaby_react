import React from "react";
import CartItem from "./CartItem";

const CartList = ( props: any) => {

    return (
          <div className="cart__list">
            {props.cartItems.map((item: any) => {
            return <CartItem props={item} key={item.id} src={item.src} remove={props.remove} />
          })}
          </div>
        );
  };
  
  export default CartList;