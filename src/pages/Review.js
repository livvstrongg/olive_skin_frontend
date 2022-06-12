import { useState } from "react"
import { Link } from "react-router-dom"
import '../App.css'

function Review(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    title: "",
  })

  // handleChange function for form
  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
  }

  // handle submit function for form
  const handleSubmit = event => {
    event.preventDefault()
    props.createTestimonials(newForm)
    setNewForm({
      name: "",
      image: "",
      title: "",
    })
  }

  // loaded function
  const loaded = () => {
    return props.testimonials.map(testimonial => (
      <>
      <div className='container my-5 col-md-3 mb-4 '>
        <div className='col-12 mb-5'>
      <div class="card text-center" key={testimonial._id} >
      <img class="card-img-top" src={testimonial.image} alt={testimonial.name} />
      <div class="card-body">
        <Link to={`/testimonial/${testimonial._id}`}>
          <h1>{testimonial.name}</h1>
        </Link>
              <p class="card-text lead fw-italic">
                {testimonial.testimony}
              </p>
          </div>
          </div>
      </div>
      </div>
      </>
    ))
  }



  const loading = () => {
    return <h1>Loading...</h1>
  }
  return (
    <section>
       <div class="container my-5 py-5">
       <div className="row">
      <h1 className="display-6 fw-bolder text-center">Reviews</h1>
      {props.testimonials ? loaded() : loading()}
      <form onSubmit={handleSubmit}>
      <h3 className="display-6 my-5 fw-bolder text-center">Leave a review</h3>
        <input
          type="text"
          class='form-control'
          aria-describedby="button-addon2"
          value={newForm.name}
          name="name"
          placeholder="Your name"
          onChange={handleChange}
        />
        <input
          type="text"
          class='form-control'
          aria-describedby="button-addon2"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          class='form-control'
          aria-describedby="button-addon2"
          value={newForm.testimony}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input className='justify-content:center my-5' type="submit" value="Post Review" />
      </form>
      </div>
      </div>
    </section>
  )
}

export default Review