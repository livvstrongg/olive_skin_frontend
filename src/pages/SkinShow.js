import { useParams } from 'react-router-dom'

function SkinShow(props) {
  console.log(props)
  const { id } = useParams()
  const product = props.products
  const products = products.find(p => p._id === id)

  return (
      <div className="product">
        <h1>Show Page</h1>
          <h2>{products.name}</h2>
          <h2>{products.price}</h2>
          <img src={products.image} alt={products.name} />
      </div>
  )
}

export default SkinShow