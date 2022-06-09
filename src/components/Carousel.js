import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from 'react-router-dom';

function ImageCarousel() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="https://i.imgur.com/cNWaMxT.png" />
                </div>
                <div>
                    <img src="https://i.imgur.com/jLHKA7k.png" />
                </div>
                
            </Carousel>
        </div>
    );
}

export default ImageCarousel