import React from 'react';
import { Link} from 'react-router-dom';


function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
            <a className="navbar-brand a\fw-bold fs-4" href="#">
            Olive Skin</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/products'>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/reviews'>Reviews</Link>
                    </li>
                </ul>
            <div className="buttons">
                {/* <Link to='/cart' classNameName="btn btn-outline-dark ">
                <i classNameName="fa fa-shopping-cart me-1 ms-2"></i>Cart
                </Link> */}
               
            </div>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navbar