import LineItem from './LineItem'
import './ItemList.css'

interface Props {
  items: {
    id: number;
    checked: boolean;
    item: string;
  }[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
}

const ItemList = (props: Props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <LineItem 
          item={item}
          key={item.id}
          handleCheck={props.handleCheck}
          handleDelete={props.handleDelete}
        />
      ))}
    </ul>
  )
}

export default ItemList