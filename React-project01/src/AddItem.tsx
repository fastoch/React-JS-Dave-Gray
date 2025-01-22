import { FaPlus } from 'react-icons/fa'

interface Props {
  newItem: string
  setNewItem: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const AddItem = (props: Props) => {
  return (
    <form className='addForm'>
      <label htmlFor="addItem">Add Item</label>
      <input 
        autoFocus
        id='addItem'
        type='text' 
        placeholder='Add Item'
        required
        value={props.newItem}
      />
      <button
        type='submit'
        aria-label='Add Item'  
      >
        <FaPlus />   
      </button>
    </form>
  )
}

export default AddItem