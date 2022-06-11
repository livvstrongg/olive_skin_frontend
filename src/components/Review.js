import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Review(props) {
  console.log(props)
  const navigate = useNavigate()
  const { id } = useParams()
  const testimony = props.testimonials
  const testimonials = testimonials.find(p => p._id === id)
  

  const [editForm, setEditForm] = useState(testimony)

  const handleChange = event => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
      event.preventDefault()
      props.updateReview(editForm, id)
      navigate(`/`)
  }

  const removeReview = () => {
    props.deletePeople(id)
    navigate("/")
  }

  return (
      <div className="reviews">
          <h1>{testimony.name}</h1>
          <h2>{testimony.title}</h2>
          <img src={testimony.image} alt={testimony.name} />
          <button id="delete" onClick={removeReview}>
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
                  value={editForm.title}
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
              />
              <input type="submit" value="Update Review" />
          </form>
      </div>
  ) 
}

export default Review