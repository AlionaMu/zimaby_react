import { useState, useMemo } from 'react';
import './App.css';
import ItemsList from './components/ItemsList';
import Header from './components/Header';
import Footer from './components/Footer';
import CartList from './components/CartList';
import { Item } from './components/ItemsList';
import CartFilter from './components/CartFilter';

function App() {
  const [cartItems, setCartItem] = useState([{id: 1, title: 'mittens', price: 40, src: 'images/1.jpg'}]);
  const [filter, setFilter] = useState({sort: '', query: ''})

  const createCartItem = (event: Event, newItem: Item) => {
    event.preventDefault();
    setCartItem([...cartItems, newItem]);
  }

  const removeCartItem = (event: Event, id: number) => {
    event.preventDefault();
    setCartItem(cartItems.filter(item => item.id !== id));
  }

  const sortedCart = useMemo(() => {
    if(filter.sort) {
      return cartItems.sort((a: any, b: any) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return cartItems;
  }, [filter.sort, cartItems]);

  const sortedAndSearchedCart = useMemo(() => {
    console.log(sortedCart.filter((item: Item) => item.title.toLowerCase().includes(filter.query.toLowerCase())))
    return sortedCart.filter((item: Item) => item.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, filter.sort, sortedCart]);

  return (
    <div>
      <Header />
      { sortedAndSearchedCart.length ?
        <CartList cartItems={sortedAndSearchedCart} remove={removeCartItem} /> :
        <span> Cart is empty </span>
      }
      <CartFilter
        filter={filter}
        setFilter={setFilter}
      />
      <ItemsList create={createCartItem}/>
      <Footer />
    </div>
  );
}

export default App;

/*
<Select
        value={selectedSort}
        onChange={sortItems}
        defaultValue="Sort by"
        options={[
          {value: 'title', title: 'title'},
          {value: 'price', title: 'price'}
        ]}
      />
      <Input placeholder="Search..." setInputValue={setInputValue} value={searchQuery}/>*/
