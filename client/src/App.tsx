import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/customer/home/Home';
import Navigation from './components/molecules/navigation/Navigation';
import Product from './pages/customer/product/Product';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurants/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
