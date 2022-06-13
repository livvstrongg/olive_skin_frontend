export function addToCart(cart, product) {
    // add to cart if product is not already in the cart
    if (!cart.find((entry) => entry._id === product._id)) {
      return cart.concat(product);
    }
    // if it is, don't do anything
    return cart;
  }