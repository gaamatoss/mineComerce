import React, { useState } from 'react';
import './App.css'
import Menu from './components/Menu/Menu'
import Content from './components/Content/Content'
import Cart from './components/Cart/Cart'

function App() {

  const [openCart, setOpenCart] = useState(false)

  return (
    <div className="App">
      <Menu onclick={() => setOpenCart(true)} />
      <Cart openCart={false} />
      <Content />
    </div>
  )
}

export default App
