import { useState, useEffect } from "react";

function SkinList(props) {

  const [products, setProducts] = useState(null);

  const getProductsData = async () => {

    const response = await fetch(props.URL + "products");

    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => getProductsData(), []);

  const loaded = () => {
    return products.map((products) => (
      <div>
        <h1>{products.name}</h1>
        <img src={products.image} />
      </div>
    ));
  };

  return products ? loaded() : <h1>Loading...</h1>;
}

export default SkinList;