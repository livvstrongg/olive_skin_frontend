import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Show(props) {
  const navigate = useNavigate()
  const { id } = useParams()
  const testimonials = props.testimonial
  const testimonial = testimonials.find(testimonials => testimonials._id === id)
  
  
  const [editForm, setEditForm] = useState(testimonial)

  const handleChange = event => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  // handlesubmit for form
  const handleSubmit = event => {
      event.preventDefault()
      props.updateTestimonials(editForm, id)
      navigate(`/reviews`)
  }

  const removeTestimonial = () => {
    props.deleteTestimonials(id)
    navigate("/reviews")
  }

  return (
      <div className="person">
          <h1>{testimonials.name}</h1>
          <h2>{testimonials.testimony}</h2>
          <img src={testimonials.image} alt={testimonials.name} />
          <button id="delete" onClick={removeTestimonial}>
            DELETE
          </button>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={editForm.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={editForm.image}
                  name="image"
                  placeholder="image URL"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={editForm.testimony}
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
              />
              <input type="submit" value="Update Person" />
          </form>
      </div>
  ) 
}

export default Show

