

const ItemCard = (props: any) => {
  
  return (
      <div className='card'>
        <img src={props.src} className='card__image'></img>
        <div className='card__contain'>
          <div className='card-contain__text'>
            <span className='card-contain__text_title'>{props.props.title}</span>
            <span className='card-contain__text_species'><i>{props.props.species}</i></span>
            <div className='card-contain__like'>
              <span className='like'></span>
              <span className='like_score'>{props.price}</span>
            </div>
          </div>
          <div className='card-contain__price'>
             <span className='price'>&#165; {props.props.price}.00</span>
             <span><i>per Kg</i></span>
          </div>
          <div className='card__button' onClick={event => props.create(event, props.props)}>buy</div>
        </div>
      </div>
  );
};

export default ItemCard;

/*
  return (
      <div className='card'>
        <img src={props.src} className='card-image'></img>
        <div className='card-contain'>
          <div className='card-contain__text'>
            <span className='card-contain__text_title'>{props.title}</span>
            <span className='card-contain__text_species'><i>{props.species}</i></span>
            <div className='card-contain__like'>
              <span className='like'></span>
              <span className='like_score'>{props.likeScore}</span>
            </div>
          </div>
          <div className='card-contain__price'>
             <span className='price'>&#165; {props.price}.00</span>
             <span><i>per Kg</i></span>
          </div>
        </div>
      </div>
  );
  */