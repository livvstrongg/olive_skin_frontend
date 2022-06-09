import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function SkinList(props) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const getProductsData = async () => {
            const response = await fetch(props.URL + "products");
            const data = await response.json();
            console.log(data);
            setProducts(data);
            
        };


        getProductsData();
        
    }, [props.URL]);


    const loaded = () => {
        return products.map((product) => (
            <div>
              <Link to={`/product/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt='product' width={250} height={250}/>
              </Link>
            </div>
        
        ));
    };
    return products ? loaded() : <h1>Loading...</h1>;
};


export default SkinList;