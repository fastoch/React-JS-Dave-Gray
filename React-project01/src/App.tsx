import './App.css'
import Header from './Header.tsx'
import Content from './Content.tsx'
import Footer from './Footer.tsx'

function App() {

  return (
    <>
      <div>
        <Header />  {/* this component is imported from Header.tsx */}
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
