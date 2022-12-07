import CartItem from "./CartItem";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const CartList = ( props: any) => {
    return (
          <div className="cart__list">
              <TransitionGroup>
            {props.cartItems.map((item: any) => 
               <CSSTransition
               key={item.id}
            
               timeout={500}
               classNames="transition__item"
               >
              <CartItem props={item} key={item.id} src={item.src} remove={props.remove} />
              </CSSTransition>
            )}
            </TransitionGroup>
          </div>
        );
  };
  
  export default CartList;
