import React from "react";
import "../styles/Cart.css";

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.newPrice.replace(/,/g, ""));
        return total + price;
      }, 0)
      .toLocaleString("en-IN");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹{item.newPrice}</p>
                  <button
                    className="remove-btn"
                    onClick={() => {
                      if (typeof onRemoveFromCart === "function") {
                        onRemoveFromCart(item.id);
                      } else {
                        console.error("onRemoveFromCart is not a function", onRemoveFromCart);
                      }
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ₹{calculateTotal()}</h3>
          </div>
          <div className="pay">
            <button>Proceed To Pay</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
