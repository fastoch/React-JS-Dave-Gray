import './App.css'
import Header from './Header.tsx'
import AddItem from './AddItem.tsx'
import Content from './Content.tsx'
import Footer from './Footer.tsx'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'One half pound bag of Cocoa Covered Almonds Unsalted'
    },
    {
      id: 2,
      checked: false,
      item: 'Item 2'
    },
    {
      id: 3,
      checked: false,
      item: 'Item 3'
    }
  ]);

  const [newItem, setNewItem] = useState('');

  const handleCheck = (id: number) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('groceriesList', JSON.stringify(listItems));
  }

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('groceriesList', JSON.stringify(listItems));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  }

  return (
    <>
      <div className="App">
        <Header title="Groceries" />  {/* this component is imported from Header.tsx */}
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
