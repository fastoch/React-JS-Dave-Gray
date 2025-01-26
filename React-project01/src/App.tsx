import './App.css'
import Header from './Header.tsx'
import SearchItem from './SearchItem.tsx'
import AddItem from './AddItem.tsx'
import Content from './Content.tsx'
import Footer from './Footer.tsx'
import { useState } from 'react'

interface Item {
  id: number
  checked: boolean
  item: string
}

function App() {
  // state for our list of items
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('groceriesList') as string));

  // state for new item
  const [newItem, setNewItem] = useState('');

  // state for search
  const [search, setSearch] = useState('');

  const handleCheck = (id: number) => {
    const listItems = items.map((item: Item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('groceriesList', JSON.stringify(listItems));
  }

  const handleDelete = (id: number) => {
    const listItems = items.filter((item: Item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('groceriesList', JSON.stringify(listItems));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) return; // if input empty, exit  
    addItem(newItem);
    setNewItem(''); // clean the input field
  }

  const addItem = (item: string) => {
    // if list not empty, increment the id. else, set id to 1
    const id = items.length ? items[items.length -1].id + 1 : 1;
    // create the new item
    const myNewItem = { id, checked: false, item };
    // add the new item to the list
    const listItems = [...items, myNewItem];
    // update the state of our list
    setItems(listItems);
    // save the new list to local storage
    localStorage.setItem('groceriesList', JSON.stringify(listItems));
  }

  return (
    <>
      <div className="App">
        <Header title="Groceries" />  {/* this component is imported from Header.tsx */}
        <SearchItem 
          search={search}
          setSearch={setSearch}
        />
        <AddItem 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Content 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        /> 
        <Footer length={items.length} /> {/* length of the array that contains the items */}
      </div>
    </>
  )
}

export default App
