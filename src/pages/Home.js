import React from 'react';
import Carousel from '../components/Carousel';
import SkinList from '../pages/SkinList';

function Home() {
  return (
    <div className='home'>
      <div className='card home-card'>
      <Carousel />
      <SkinList />
      </div>
    </div>
  )
}

export default Home