import { useState, useEffect } from 'react';

function SkinShow(props) {
  console.log(props.skincare)
    const [product, setProduct] = useState(null);
return (
<div>
  {props.skincare.name}
  <img src={props.skincare.image}/>
</div>)
    // useEffect(() => {
    //     const getProductData = async () => {
    //         const response = await fetch(props.URL + `product/${props.skincare}`);
    //         const data = await response.json();
    //         setProduct(data);
    //     };
    //     getProductData();
    // }, [props.URL]);

    // const loaded = () => {
    //   return (
    //   props.skincare.name
    //   )
        // return product.map((product) => (
        //     <div>
        //         <h1>{product.name}</h1>
        //         <img src={product.image} alt='product' />
        //         <h4>{product.description}</h4>
        //     </div>
        // ));
//     };
//     return product ? loaded() : <h1>Loading...</h1>;
// };
};
export default SkinShow;
