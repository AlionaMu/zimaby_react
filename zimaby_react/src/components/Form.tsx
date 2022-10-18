// import { create } from "./../App";
import { useState } from "react";
import Input from "./Input";

const Form = ({createCard}: any) => {  
  const [card, setCard] = useState({title: '', species: '', price: '', src: 'images/1.jpg'})

  const addNewCard = (e: any) => {
    e.preventDefault();
    const newCard = {
      id:Date.now(), ...card
    }
    createCard(newCard);
  }


  return (
    <div className="form" onSubmit={addNewCard}>
      <form>
        <Input
          value={card.title}
          onChange={(e: any) => setCard({...card, title: e.target.value})}
          type="text"
          placeholder="title"
        />
        <Input
          value={card.species}
          onChange={(e: any) => setCard({...card, species: e.target.value})}
          type="text"
          placeholder="title"
        />
        <Input
          value={card.price}
          onChange={(e: any) => setCard({...card, price: e.target.value})}
          type="text"
          placeholder="title"
        />
        <Input
          type="submit"
          className="button form__button"
          text="create"
        />
      </form>
    </div>
  );
};
    
  export default Form;
  