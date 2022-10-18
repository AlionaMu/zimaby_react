const Modal = ({children, visible, setVisible}: any) => {  

    const classes = ['modal'];

    if(visible) {
      classes.push('active');
    }
    return (
      <div className={classes.join(' ')}>
        <div className="modal__content">
        {children}
        </div>
      </div>
    );
  };
    
  export default Modal;
  