import React from 'react';
import { Link} from 'react-router-dom';


function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div class="container">
            <a class="navbar-brand a\fw-bold fs-4" href="#">
            Olive Skin</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/products'>Products</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/testimonials'>Testimonials</Link>
                    </li>
                </ul>
            <div className="buttons">
                {/* <Link to='/cart' className="btn btn-outline-dark ">
                <i className="fa fa-shopping-cart me-1 ms-2"></i>Cart
                </Link> */}
               
            </div>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navbar