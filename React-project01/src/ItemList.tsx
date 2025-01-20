import { FaTrashAlt } from "react-icons/fa";

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
        <li className="item" key={item.id}>
          <input 
            type="checkbox" 
            onChange={() => props.handleCheck(item.id)}
            checked={item.checked}
          />
          <label 
            style={(item.checked) ? { textDecoration: 'line-through' } : undefined} 
            onDoubleClick={() => props.handleCheck(item.id)}>{item.item}
          </label>
          <FaTrashAlt 
            role="button" 
            onClick={() => props.handleDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  )
}

export default ItemList