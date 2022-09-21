import { useState } from 'react';
import './App.css';
import ItemsList from './components/ItemsList';
import Header from './components/Header';
import Footer from './components/Footer';
import CartList from './components/CartList';
import { Item } from './components/ItemsList';
import Select from './components/Select';

function App() {
  const [cartItems, setCartItem] = useState([{id: 1, title: 'mittens', price: 40, src: 'images/1.jpg'}]);
  const [selectedSort, setSelectedSort] = useState('')

  const createCartItem = (event: Event, newItem: Item) => {
    event.preventDefault();
    setCartItem([...cartItems, newItem]);
  }

  const removeCartItem = (event: Event, id: number) => {
    event.preventDefault();
    setCartItem(cartItems.filter(item => item.id !== id));
  }

  const sortItems=(sort: string) => {
    setSelectedSort(sort);
    setCartItem(cartItems.sort((a: any, b: any) => 
      a[sort].localeCompare(b[sort])
    ));
  }

  return (
    <div>
      <Header />
      { cartItems.length ?
        <CartList cartItems={cartItems} remove={removeCartItem} /> :
        <span> Cart is empty </span>
      }
      <Select
        value={selectedSort}
        onChange={sortItems}
        defaultValue="Sort by"
        options={[
          {value: 'title', title: 'title'},
          {value: 'price', title: 'price'}
      ]}
      />
      <ItemsList create={createCartItem}/>
      <Footer />
    </div>
  );
}

export default App;
