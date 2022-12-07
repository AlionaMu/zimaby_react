const Modal = ({children, visible, setVisible}: any) => {  

    const classes = ['modal'];

    if(visible) {
      classes.push('active');
    }
    return (
      <div className={classes.join(' ')} onClick={() => setVisible(false)}>
        <div className="modal__content" onClick={(e) => {e.stopPropagation()}}>
        {children}
        </div>
      </div>
    );
  };
    
  export default Modal;
  