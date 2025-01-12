import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Content.css'

const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3); // 0,1,2
    return names[int];
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
      <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + React</h1>

      <div className='button-container'>
        <button onClick={handleClick}>I</button>  {/* this is a function reference */}
        <button onClick={() => handleClick2('Dave')}>Dave</button>  
        <button  onClick={(e) => handleClick3(e)}>Click me</button>
      </div>

      <p>Hello {handleNameChange()}!</p>  {/* this function is called when the page loads */}
    </main>
  )
}

export default Content