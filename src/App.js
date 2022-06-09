import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar/NavBar';
import Home from './pages/Home';
import SkinList from './pages/SkinList';
import SkinShow from './pages/SkinShow';
import Testimonials from './pages/Testimonials';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';


function App() {
  const URL = "https://olive-skin.herokuapp.com/";
  const [products, setProducts] = useState(null);
  const [skincare, setSkincare] = useState(null);

  useEffect(() => {
    const getProductsData = async () => {
        const response = await fetch(URL + "product");
        const data = await response.json();
        setProducts(data);
        // console.log(products);
    };
    getProductsData();
}, [URL]);


    // <div onClick={()=> idk(product._id)}>


function specificProduct(productinfo) {
  console.log(productinfo)
  setSkincare(productinfo)
}

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/product' element={<SkinList specificProduct={specificProduct } URL={URL} products={products} />} />
        <Route path='/product/:id' element={<SkinShow skincare={skincare}URL={URL}  />} />
        <Route path='/testimonials' element={<Testimonials URL={URL} />} />
        <Route path='/cart' element={<Cart URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;