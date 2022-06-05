import { useState, useEffect } from "react";

function Testimonials(props) {
  const [testimonials, setTestimonials] = useState(null);

  const getTestimonialData = async () => {

    const response = await fetch(props.URL + "testimonials");

    const data = await response.json();

    setTestimonials(data);
  };

  useEffect(() => getTestimonialData(), []);

  const loaded = () => (
    <div>
      <h2>{testimonials.name}</h2>
      <h3>{testimonials.headshot}</h3>
      <p>{testimonials.bio}</p>
    </div>
  );

  return testimonials ? loaded() : <h1>Loading...</h1>;
}

export default Testimonials;