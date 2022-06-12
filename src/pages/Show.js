import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Show(props) {
  console.log(props)
  const navigate = useNavigate()
  const { id } = useParams()
  const testimonials = props.testimonials
  const testimonial = testimonials.find(testimonial => testimonial._id === id)
  

  const [editForm, setEditForm] = useState(testimonial)

  // handleChange function for form
  const handleChange = event => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  // handlesubmit for form
  const handleSubmit = event => {
      event.preventDefault()
      props.updateTestimonials(editForm, id)
      // redirect people back to index
      navigate(`/`)
  }

  const removeTestimonial = () => {
    props.deleteTestimonials(id)
    navigate("/")
  }

  return (
      <div className="person">
          <h1>{testimonial.name}</h1>
          <h2>{testimonial.testimony}</h2>
          <img src={testimonial.image} alt={testimonial.name} />
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