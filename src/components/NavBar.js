import { Link } from "react-router-dom";

function NavBar(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>Olive Skin</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/products">
          <div>PRODUCTS</div>
        </Link>
        <Link to="/testimonials">
          <div>TESTIMONIALS</div>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;