import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navbar/NavBar';
import Home from './pages/Home';
import SkinList from './pages/SkinList';
import SkinShow from './pages/SkinShow';
import Testimonials from './pages/Testimonials';
import Cart from './pages/Cart';
import Footer from './components/Footer';


function App() {
  const URL = "https://olive-skin.herokuapp.com/";

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/product' element={<SkinList URL={URL} />} />
        <Route path='/products/:id' element={<SkinShow URL={URL} />} />
        <Route path='/testimonials' element={<Testimonials URL={URL} />} />
        <Route path='/cart' element={<Cart URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;