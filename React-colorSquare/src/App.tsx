import './App.css'
import Square from './Square'
import Input from './Input'

function App() {

  return (
    <>
      <div className='App'>
        <Square 
          colorValue=''
        />
        <Input 
          colorValue=''
          setColorValue={() => {}}
        />
      </div>
    </>
  )
}

export default App
