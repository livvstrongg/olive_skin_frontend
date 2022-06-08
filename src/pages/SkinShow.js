import {useState, useEffect} from 'react';
import { useParams, Route} from 'react-router-dom';

function SkinShow(props) {
  // const [products, setProducts] = useState(null);
const [product, setProduct] = useState(null);
  const productId= useParams() 
  // console.log(productId)

  const realId = productId.id
  // console.log(realId)

  useEffect(() => {
      const getProductsData = async () => {
          const response = await fetch(props.URL + "products");
          const data = await response.json();
          for (let i =0; i < data.length; i++) {
            if(data[i].id == realId){
              console.log(data[i])
              setProduct(data[i]);
            }
          }
          // setProducts(data);
      };
      getProductsData();  
  }, []);

  const loaded = () => {
      return(
          <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt='product' /> 

          </div>
      );
  };
  return product ? loaded() : <h1>Loading...</h1>;
};


export default SkinShow