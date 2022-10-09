import Input from "./Input";
import Select from "./Select";

const CartFilter = ({filter, setFilter}: any) => {
   console.log(filter)
  return (
    <div>
      <Input
        placeholder="Search..."
        value={filter.query}
        onChange={(e: any) => setFilter({...filter, query: e.target.value})}
     />
      <Select
        value={filter.sort}
        onChange={(selectedSort: string) => setFilter({...filter, sort: selectedSort})}
        defaultValue="Sort by"
        options={[
          {value: 'title', title: 'title'},
          {value: 'price', title: 'price'}
        ]}
      />
    </div>
  )
}

export default CartFilter;