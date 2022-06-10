import React, {useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';

function Testimonials() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://olive-skin.herokuapp.com/testimonials")
            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
  const Loading = () => {
      return(
          <>
          <div className="col-md-3">
              <Skeleton height={350}/>
          </div>
          <div className="col-md-3">
              <Skeleton height={350}/>
          </div>
          <div className="col-md-3">
              <Skeleton height={350}/>
          </div>
          <div className="col-md-3">
              <Skeleton height={350}/>
          </div>
          </>
      )
  }

  const ShowProducts = () => {
      return(
          <>
        {filter.map((product) => {
            return(
                <>
                <div className='col-md-3 mb-4'>
                <div class="card text-center" key={product.id}>
                    <img src={product.image} class="card-img-top" alt={product.name}/>
                    <div class="card-body">
                        <h5 class="card-title ">{product.name.substring(0,12)}</h5>
                        <p class="card-text lead fw-italic">
                            {product.testimony}
                        </p>
                    </div>
                </div>
                </div>
                </>
            )
        })}
          </>
      )
      
  }
  return (
    <div>
        <div class="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Testimonials</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  )
}

export default Testimonials