import { useState, useMemo } from 'react';
import './App.css';
import ItemsList from './components/ItemsList';
import Header from './components/Header';
import Footer from './components/Footer';
import CartList from './components/CartList';
import { Item } from './components/ItemsList';
import Select from './components/Select';
import Input from './components/Input';

function App() {
  const [cartItems, setCartItem] = useState([{id: 1, title: 'mittens', price: 40, src: 'images/1.jpg'}]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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
  }

  const sortedCart = useMemo(() => {
    if(selectedSort) {
      return cartItems.sort((a: any, b: any) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return cartItems;
  }, [selectedSort, cartItems]);

  const sortedAndSearchedCart = useMemo(() => {
    return sortedCart.filter((item: Item) => item.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedCart]);

  const setInputValue = (event: any ) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div>
      <Header />
      { sortedAndSearchedCart.length ?
        <CartList cartItems={sortedAndSearchedCart} remove={removeCartItem} /> :
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
      <Input placeholder="Search..." setInputValue={setInputValue} value={searchQuery}/>
      <ItemsList create={createCartItem}/>
      <Footer />
    </div>
  );
}

export default App;
