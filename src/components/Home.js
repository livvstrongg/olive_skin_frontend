import React from 'react';
import Products from './Products';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero">
        <div class="card bg-dark text-white">
          <Link to='/products'>
            <img src="https://i.imgur.com/cNWaMxT.png" class="card-img" alt="Cover"/>
          </Link>
        </div>
        <Products />
    </div>
  )
}

export default Home