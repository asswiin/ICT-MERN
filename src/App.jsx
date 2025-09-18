import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Gettable from './components/Gettable'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Message from './components/Message'
import Product from './components/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/table" element={<Gettable />} />
        <Route path="/state" element={<Statebasics />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/message" element={<Message />} />
        <Route path="/product" element={<Product />} />
      </Routes>     
    
      <Navbar />
      
      
    </>
  )
}

export default App
