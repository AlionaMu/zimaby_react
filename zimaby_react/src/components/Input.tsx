const Input = (props: any) => {
  return (
    <input onChange={(event) => props.setInputValue(event)} />
  );
};
  
export default Input;