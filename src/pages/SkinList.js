import { useState, useEffect } from 'react';
import { Link} from "react-router-dom";

function SkinList(props) {
    const loaded = () => {
        return props.products.map((product) => (
            <div onClick={()=> props.specificProduct(product)}>
              <Link to={`/product/${product._id}`}>
                <h1>{product.name}</h1>
              </Link>
                <img src={product.image} alt='product' />
            </div>
        ));
    };
    return props.products ? loaded() : <h1>Loading...</h1>;

    
};

export default SkinList;