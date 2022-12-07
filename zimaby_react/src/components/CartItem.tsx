

const CartItem = (props: any) => {
    return (
        <div className='cart-item' id={props.props.id}>
                      <div className='cart-item__text'>
                      <img src={props.props.src} className='cart__image'></img>
              <span className='card-contain__text_title'>{props.props.title}</span>
            </div>

          <div className='cart-item__contain'>

            <div className='card-contain__price'>
               <span className='price'>&#165; {props.props.price}.00</span>
            </div>
            <div className='cart-item__button' onClick={event => props.remove(event, props.props.id)}>delete</div>
          </div>
        </div>
    );
  };
  
  export default CartItem;
  