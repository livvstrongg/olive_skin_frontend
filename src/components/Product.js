import React, {useState, useEffect} from 'react';
// import {useDispatch} from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Product() {

const {id} = useParams();
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(false);

// const dispatch = useDispatch();
// const addProduct = (product) => {
//     dispatch(addCart(product));
// }

useEffect(() => {
    const getProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://olive-skin.herokuapp.com/product/${id}`);
        setProduct(await response.json());
        setLoading(false);
    }
    getProduct()
}, []);
const Loading = () => {
    return(
        <>
            Loading...
        </>
    )
}

const ShowProduct = () => {
    return(
        <>
            <div className='col-md-6'>
                <img src={product.image} alt={product.name} height="400px" width="400px"/>
            </div>
            <div className='col-md-6'>
                <h1 className='display-5'>{product.name}</h1>
                <h3 className='display-6 fw-bold my-4'>
                    {product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <button className='btn btn-outline-dark px-4 py-2' >Add to Cart</button>
                <Link to='/cart' className='btn btn-outline-dark ms-2 px-3 py-2'>Go to Cart</Link>
            </div>
        </>
    )
}
  return (
    <div>
        <div className="container py-5">
            <div className="row py-5">
                {loading ? <Loading/> : <ShowProduct />}
            </div>
        </div>   
    </div>
  )
}

export default Product