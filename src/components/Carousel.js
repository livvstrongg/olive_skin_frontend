import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="https://i.imgur.com/GdehnLJ.png" />
                </div>
                <div>
                    <img src="https://i.imgur.com/bnnvmDV.png" />
                </div>
            </Carousel>
        </div>
    );
}

export default ImageCarousel