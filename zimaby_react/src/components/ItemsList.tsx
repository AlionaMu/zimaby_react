import { items } from '../mocks/Items';
import ItemCard from './ItemCard';

export interface Item {
    id: number;
    title: string;
    price: number;
    src: string;
    species?: string
}

const ItemsList = (props: any) => {
  return (
    <div className="cards-container">
      {props.items.map((card: Item) => {
        return <ItemCard props={card} key={card.id} src={card.src} create={props.create} />
      })}
    </div>
  );
};

export default ItemsList;
