import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
  return (
    <BrowserRouter>

     <Routes>

     <Route path='/' element={<Home />} />
     <Route path='/Checkout' element={<Checkout />} />
     
     </Routes>
    </BrowserRouter>
  );
}

export default App;
