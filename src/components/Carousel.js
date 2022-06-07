import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="https://i.imgur.com/z4XgngS.png" />
                </div>
                <div>
                    <img src="https://i.imgur.com/OwsyDZi.png" />
                </div>
                <div>
                    <img src="https://i.imgur.com/BkPaJmm.png" />
                </div>
            </Carousel>
        </div>
    );
}

export default ImageCarousel