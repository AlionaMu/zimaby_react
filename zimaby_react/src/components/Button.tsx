const Button = (props: any) => {
    return (
      <div>
        <button className="button"  onClick={() => props.setModal(true)} >{props.text}</button>
      </div>
    );
  };
    
  export default Button;
  