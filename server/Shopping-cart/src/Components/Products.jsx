import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Product.css";

const Product = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      alert("Please login to add items to your cart.");
      navigate("/login");
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="mrp">
        MRP <span className="old-price">₹{product.oldPrice}</span> (Incl. all taxes)
      </p>
      <h2 className="new-price">₹{product.newPrice}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <button className="shop-now-btn" onClick={handleAddToCart}>
        Shop now
      </button>
    </div>
  );
};

export default Product;
