import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header.jsx'
import Index from '../components/Index.jsx'
import Tienda from '../components/Tienda.jsx'
import QuienesSomos from '../components/QuienesSomos.jsx'
import Cart from '../components/Cart.jsx'
import Footer from '../components/Footer.jsx'

function App(){
  return(
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/Tienda" element={<Tienda />} />
              <Route path="/QuienesSomos" element={<QuienesSomos />} />
              <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App
