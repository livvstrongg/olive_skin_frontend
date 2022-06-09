import { useState, useEffect } from 'react';

function SkinList(props) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const getProductsData = async () => {
            const response = await fetch(props.URL + "product");
            const data = await response.json();
            setProducts(data);
        };
        getProductsData();
    }, [props.URL]);

    const loaded = () => {
        return products.map((products) => (
            <div>
                <h1>{products.name}</h1>
                <img src={products.image} alt='testimonials' />
                <h4>{products.bio}</h4>
            </div>
        ));
    };
    return products ? loaded() : <h1>Loading...</h1>;
};

export default SkinList;