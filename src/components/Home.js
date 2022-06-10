import React from 'react';
import Products from './Products';

function Home() {
  return (
    <div className="hero">
        <div class="card bg-dark text-white">
            <img src="https://i.imgur.com/cNWaMxT.png" class="card-img" alt="Cover"/>
        </div>
        <Products />
    </div>
  )
}

export default Home