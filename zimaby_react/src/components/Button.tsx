const Button = (props: any) => {
    return (
      <>
        <button className={props.className + ' button'} onClick={props.func} >{props.text}</button>
      </>
    );
  };
    
  export default Button;
  