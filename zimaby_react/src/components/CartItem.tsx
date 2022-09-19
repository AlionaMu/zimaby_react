

const CartItem = (props: any) => {
    return (
        <div className='cart__item'>
          <img src={props.props.src} className='cart__image'></img>
          <div className='card-contain'>
            <div className='card-contain__text'>
              <span className='card-contain__text_title'>{props.props.title}</span>
              <span className='card-contain__text_species'><i>{props.props.price}</i></span>
            </div>
            <div className='card-contain__price'>
               <span className='price'>&#165; {props.props.price}.00</span>
               <span><i>per Kg</i></span>
            </div>
            <div className='card-contain__button'>delete</div>
          </div>
        </div>
    );
  };
  
  export default CartItem;
  