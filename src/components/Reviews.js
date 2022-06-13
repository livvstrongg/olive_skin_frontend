import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Review from "../pages/Review";
import Show from "../pages/Show";

function Reviews(props) {
    const [testimonials, setTestimonials] = useState(null);

    const URL = "https://olive-skin.herokuapp.com/testimonials";

    const getTestimonials = () => {
        fetch(URL)
        .then(response => response.json())
        .then((result) => setTestimonials(result))
    }

    const createTestimonials = async (testimonial) => {
        // make post request to create people
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
		        body: JSON.stringify(testimonial),
        });
        // update list of people
        getTestimonials();
    };

    const updateTestimonials = async (testimonial, id) => {
        // make put request to create people
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(testimonial),
        })
        // update list of people
        getTestimonials()
    }

    const deleteTestimonials = async id => {
        // make delete request to create people
        await fetch(URL + id, {
            method: "delete",
            })
        // update list of people
        getTestimonials()
    }

    useEffect(() => getTestimonials(), []);
    // console.log(testimonials)

    return (
        <main>
            <Routes>
                <Route 
                    path='/' 
                    element={<Review
                        testimonials={testimonials} 
                        createTestimonials={createTestimonials} 
                    />} 
                />
                <Route
                    path="/testimonials/:_id"
                    element={<Show
                        testimonials={testimonials}
                        />}
                    // render={(rp) => (
                    //     <Show
                    //     {...rp}
                    //     />
                    // )}
                />
            </Routes>
        </main>
    );
}

export default Reviews;