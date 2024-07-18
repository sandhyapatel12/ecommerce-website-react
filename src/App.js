import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import SingleProduct from './components/SingleProduct';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
 <>
  <Router>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/singleproduct/:id' element={<SingleProduct/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<ErrorPage />} />
      

    </Routes>
  </Router>
 </>
  )
}

export default App
