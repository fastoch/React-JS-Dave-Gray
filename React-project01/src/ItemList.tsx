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
    <div>

    </div>
  )
}

export default ItemList