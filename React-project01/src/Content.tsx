import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import ItemList from './ItemList'

interface Props {
  items: {
    id: number;
    checked: boolean;
    item: string;
  }[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Content = (props: Props) => {
  const [name, setName] = useState('Dave'); // 'Dave' is the default state

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
      {/* if list is not empty, display the list */}
      { props.items.length ? (
        <ItemList 
          items={props.items}
          handleCheck={props.handleCheck}
          handleDelete={props.handleDelete}
        />
      // if list is empty, display a "list is empty" message
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty!</p>
      )}

      <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

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