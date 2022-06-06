import { useState, useEffect } from 'react';

function SkinList(props) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const getProductsData = async () => {
            const response = await fetch(props.URL + "products");
            const data = await response.json();
            setProducts(data);
        };
        getProductsData();
    }, [props.URL]);

    const loaded = () => {
        return products.map((product) => (
            <div>
                <h1>{product.name}</h1>
                <img src={product.image} alt='product' />
            </div>
        ));
    };
    return products ? loaded() : <h1>Loading...</h1>;
};

export default SkinList;