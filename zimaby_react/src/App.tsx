import React, { useState } from 'react';
import './App.css';
import ItemsList from './components/ItemsList';
import Header from './components/Header';
import Footer from './components/Footer';
import CartList from './components/CartList';
import { Item } from './components/ItemsList';

function App() {
  const [cartItems, setCartItem] = useState([ {id: 1, title: 'mittens', price: 40, src: 'images/1.jpg'}]);

  const createCartItem = (event: Event, newItem: Item) => {
    event.preventDefault();
    console.log('create', newItem.id)
    setCartItem([...cartItems, newItem]);
  }

  const removeCartItem = (event: Event, id: number) => {
    event.preventDefault();
    console.log('remove', id)
    setCartItem(cartItems.filter(item => item.id !== id));
  }

  return (
    <div>
      <Header />
      <CartList cartItems={cartItems} remove={removeCartItem} />
      <ItemsList create={createCartItem}/>
      <Footer />
    </div>
  );
}

export default App;
