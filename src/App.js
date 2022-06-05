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

  const URL = 'https://olive-skin.herokuapp.com/';
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/list" element={<SkinList />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
