const Button = (props: any) => {
    return (
      <div>
        <button className={props.className + ' button'} onClick={props.func} >{props.text}</button>
      </div>
    );
  };
    
  export default Button;
  