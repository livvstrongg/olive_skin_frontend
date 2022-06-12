import React from 'react';
import Products from './Products';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <div>
      <Carousel interval={3000} showThumbs={false}>
                <div>
                    <img src="https://i.imgur.com/Oo0L6KL.png" alt=""/>
                </div>
                <div>
                    <img src="https://i.imgur.com/pqEzFh2.png" alt=""/>
                </div>
                <div>
                    <img src="https://i.imgur.com/cNWaMxT.png" alt=""/>
                </div>
            </Carousel>
        <Products />
    </div>
  )
}

export default Home