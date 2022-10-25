import { useState, useMemo } from 'react';
import ItemsList from './../components/ItemsList';
import Footer from './../components/Footer';
import CartList from './../components/CartList';
import { Item } from './../components/ItemsList';
import CartFilter from './../components/CartFilter';
import Modal from './../components/Modal';
import Form from './../components/Form';
import Button from './../components/Button';
import { items } from './../mocks/Items';

function Home() {
  const arr: any[] = [];
  const itemsArr: Item[] = items;
  const [cardItems, setCardItem] = useState(itemsArr);
  const [cartItems, setCartItem] = useState(arr);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  /* async function fetchPosts() {
    setLoading(true);
    const posts = await PostService.getAll();
    setTimeout(() => {
      console.log(posts);
      setLoading(false);
    }, 2000)

  } */

  const createCartItem = (event: Event, newItem: Item) => {
    event.preventDefault();
    setCartItem([...cartItems, newItem]);
  }

  const removeCartItem = (event: Event, id: number) => {
    event.preventDefault();
    setCartItem(cartItems.filter(item => item.id !== id));
  }

  const createCard = (newItem: Item) => {  
    setModal(false);
    setCardItem([...cardItems, newItem]);
  }

  const sortedCart = useMemo(() => {
    if(filter.sort) {
      return cartItems.sort((a: any, b: any) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return cartItems;
  }, [filter.sort, cartItems]);

  const sortedAndSearchedCart = useMemo(() => {
    return sortedCart.filter((item: Item) => item.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, filter.sort, sortedCart]);

  return (
    <main>

    <Button modal={modal} setModal={setModal} text={'create new card'}  func={() => setModal(true)} className={'header__button'}></Button>

      <Modal visible={modal} setVisible={setModal}>
      <Form createCard={createCard}/>
      </Modal>
     
      { sortedAndSearchedCart.length ?
        <CartList cartItems={sortedAndSearchedCart} remove={removeCartItem} /> :
        <p className='cart_empty'> Cart is empty </p>
      }
      <CartFilter
        filter={filter}  
        setFilter={setFilter}
      />
      <ItemsList create={createCartItem} items={cardItems}/>
      <Footer />
    </main>
  );
}

export default Home;
