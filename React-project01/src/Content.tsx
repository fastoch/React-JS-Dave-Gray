import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Content.css'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
  const [name, setName] = useState('Dave'); // 'Dave' is the default state

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
    
  }

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3); // 0,1,2
    setName(names[int]);
  }

  const handleClick = () => {
    console.log('I was clicked');
  }

  const handleClick2 = (name: string) => {
    console.log(`${name} was clicked`);
  }

  const handleClick3 = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log((e.target as HTMLButtonElement).innerText);
  }

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
              type="checkbox" 
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt role="button" />
          </li>
        ))}
      </ul>

      <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + React</h1>

      <div className='button-container'>
        <button onClick={handleClick}>I</button>  {/* this is a function reference, not a function call */}
        <button onClick={() => handleClick2('Dave')}>Dave</button>  
        <button onClick={(e) => handleClick3(e)}>Click me</button>  
        <button onClick={handleNameChange}>Change name</button>
      </div>

      <p>Hello {name}!</p>  
    </main>
  )
}

export default Content