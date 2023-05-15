
import './App.css'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
import { Navbar } from './components/Navbar'
function App() {


  return (
    <div className='flex flex-col h-screen'>
     <Navbar/>
     <Main/>
     <Footer/>
    </div>
  )
}

export default App
