import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar';
import './App.css'
import Home from "./views/Home"
import Contacto from "./views/Contacto"

function App() {

  return (
   <div className='container-fluid p-0'>
      <BrowserRouter>
        <Navbar1/>
        <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contacto' element={<Contacto/>} />
        </Routes>
        </div>
      </BrowserRouter>
   </div>
  )
}

export default App
