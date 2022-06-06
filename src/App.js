import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SkinList from './pages/SkinList';
import Testimonials from './pages/Testimonials';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  const URL = "https://olive-skin.herokuapp.com/";

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<SkinList URL={URL} />} />
        <Route path='/testimonials' element={<Testimonials URL={URL} />} />
        <Route path='/cart' element={<Cart URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;