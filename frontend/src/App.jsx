import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
