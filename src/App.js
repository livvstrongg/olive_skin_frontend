import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import {Routes, Route} from 'react-router-dom';
import Reviews from './components/Reviews';
import Show from './pages/Show';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/products' element={<Products />} />
    <Route exact path='/products/:id' element={<Product />} /> 
    <Route exact path='/testimonials' element={<Testimonials />} /> 
    <Route exact path='/reviews' element={<Reviews />} />  
    <Route path="/testimonial/:_id" element={<Show />}/>
    <Route exact path='/reviews' element={<Cart />} /> 
    </Routes>
    </>
  );
}

export default App;