import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

interface Props {
  newItem: string
  setNewItem: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const AddItem = ({ newItem, setNewItem, handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input 
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text' 
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type='submit'
        aria-label='Add Item'  
        // when the button is clicked, focus on the input field
        onClick={() => inputRef.current?.focus()}
      >
        <FaPlus />   
      </button>
    </form>
  )
}

export default AddItem