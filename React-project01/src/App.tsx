import './App.css'
import Header from './Header.tsx'
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

  return (
    <>
      <div>
        <Header title="Groceries" />  {/* this component is imported from Header.tsx */}
        <Content 
          items={items} 
          setItems={setItems} 
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        /> {/* passing props to Content component */}
        <Footer />
      </div>
    </>
  )
}

export default App
