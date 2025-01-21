import { FaTrashAlt } from "react-icons/fa";

interface Props {
  item: {
    id: number;
    checked: boolean;
    item: string;
  };
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
}

const LineItem = (props: Props) => {
  return (
    <li className="item" key={props.item.id}>
      <input 
        type="checkbox" 
        onChange={() => props.handleCheck(props.item.id)}
        checked={props.item.checked}
      />
      <label 
        style={(props.item.checked) ? { textDecoration: 'line-through' } : undefined} 
        onDoubleClick={() => props.handleCheck(props.item.id)}
      >{props.item.item}</label>
      <FaTrashAlt 
        role="button" 
        onClick={() => props.handleDelete(props.item.id)}
      />
    </li>
  )
}

export default LineItem