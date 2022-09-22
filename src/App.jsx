import React, { useState } from 'react';
import './App.css'
import Menu from './components/Menu/Menu'
import Content from './components/Content/Content'
import Cart from './components/Cart/Cart'

function App() {

  const [openCart, setOpenCart] = useState(false)

  function handleCart() {
    setOpenCart(!openCart)
  }

  return (
    <div className="App">
      <Menu openCart={handleCart} />
      <Cart state={openCart} closeCart={handleCart} />
      <Content />
    </div>
  )
}

export default App
