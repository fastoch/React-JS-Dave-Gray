import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3); // 0,1,2
    return names[int];
  }

  const handleClick = () => {
    console.log('I was clicked');
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
      <button onClick={handleClick}>Click me</button>  {/* this is a function reference */}
      <p>Hello {handleNameChange()}!</p>  {/* this is a function call */}
    </main>
  )
}

export default Content