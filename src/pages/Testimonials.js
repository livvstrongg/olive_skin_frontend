import { useState, useEffect } from 'react';

function Testimonials(props) {
    const [testimonials, setTestimonials] = useState(null);

    useEffect(() => {
        const getTestimonialsData = async () => {
            const response = await fetch(props.URL + "testimonials");
            const data = await response.json();
            setTestimonials(data);
        };
        getTestimonialsData();
    }, [props.URL]);

    const loaded = () => {
        return testimonials.map((testimonials) => (
            <div>
                <h1>{testimonials.name}</h1>
                <img src={testimonials.img} alt='testimonials' />
            </div>
        ));
    };
    return testimonials ? loaded() : <h1>Loading...</h1>;
};

export default Testimonials;