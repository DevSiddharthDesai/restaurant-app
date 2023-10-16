import React from 'react';
import './App.css';

import Home from './pages/customer/home/Home';
import Navigation from './components/layout/navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
