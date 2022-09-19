import React, { useState } from 'react';
import ItemCard from './ItemCard';

export interface Item {
    id: number;
    title: string;
    price: number;
    src: string
}

const items: Item[] = [
    {id: 1, title: 'mittens', price: 40, src: 'images/1.jpg'},
    {id: 2, title: 'beanie', price: 40, src: 'images/2.jpg'},
    {id: 3, title: 'scarf', price: 40, src: 'images/3.jpg'},
    {id: 4, title: 'wide scarf', price: 40, src: 'images/4.jpg'},
    {id: 5, title: 'gloves', price: 40, src: 'images/5.jpg'},
    {id: 6, title: 'mittens', price: 40, src: 'images/6.jpg'},
    {id: 7, title: 'mittens', price: 40, src: 'images/7.jpg'},
    {id: 8, title: 'mittens', price: 40, src: 'images/8.jpg'},
    {id: 9, title: 'mittens', price: 40, src: 'images/9.jpg'},
    {id: 10, title: 'mittens', price: 40, src: 'images/10.jpg'},
    {id: 11, title: 'mittens', price: 40, src: 'images/16.jpg'},
    {id: 12, title: 'mittens', price: 40, src: 'images/17.jpg'},
    {id: 13, title: 'mittens', price: 40, src: 'images/18.jpg'},
    {id: 14, title: 'mittens', price: 40, src: 'images/19.jpg'},
    {id: 15, title: 'mittens', price: 40, src: 'images/15.jpg'}
];


const ItemsList = ({create}: any) => {

  return (

        <div className="cards-container">
          {items.map((card: any) => {
            return <ItemCard props={card} key={card.id} src={card.src} create={create} />
          })}
        </div>
      );
};

export default ItemsList;
