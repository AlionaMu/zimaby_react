import React from 'react';
import ItemCard from './ItemCard';

interface Item {
    id: number;
    title: string;
    price: number;
    src: string
}

const items: Item[] = [
    {id: 1, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 2, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 1, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 2, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 1, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 2, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 1, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 2, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 1, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 2, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 1, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 2, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 1, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 2, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'},
    {id: 3, title: 'mittens', price: 40, src: 'images/IMG_5096.jpg'}
];

const ItemsList = () => {
  return (
        <div className="cards-container">
          {items.map((card: any) => {
            return <ItemCard props={card} key={card.id} src={card.src} />
          })}
        </div>
      );
};

export default ItemsList;
/*
 {props.map((card: any) => {
            return <ItemCard props={card} key={card.id} />
          })}
          */