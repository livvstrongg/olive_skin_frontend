import React from "react";
import { Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cartState } = useOutletContext();
  const [cart, setCart] = cartState;
  const removeFromCart = (id) => {
    setCart((cart) => cart.filter((product) => product._id !== id));
  };
  return (
    <>
      <div>Cart Page</div>
      {cart.map((product) => (
        <div className="align-center" style={{ marginTop: 20 }}>
          <img
            className="d-block rounded"
            src={product.image}
            alt={product.name}
            width={120}
          />
          <div style={{ maxWidth: "70%", marginLeft: 30 }}>
            <h4>{product.name}</h4>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => removeFromCart(product._id)}
            >
              Remove
            </Button>
          </div>
          <h4 style={{ flex: 1, textAlign: "right" }}>
            ${parseInt(product.price, 10)}
          </h4>
        </div>
      ))}
      {cart.length > 0 ? (
        <h3 style={{ textAlign: "right", marginTop: 30 }}>
          Subtotal: $
          {cart.reduce(
            (sumTotal, product) => sumTotal + parseInt(product.price, 10),
            0
          )}
        </h3>
      ) : (
        <h1>Cart is empty!</h1>
      )}
    </>
  );
}

export default Cart;