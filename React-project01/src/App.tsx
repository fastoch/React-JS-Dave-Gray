import { useState } from 'react'
import './App.css'
import Header from './Header.tsx'
import Content from './Content.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />  {/* this component is imported from Header.tsx */}
        <Content />
      </div>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test Hot Module Replacement
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
