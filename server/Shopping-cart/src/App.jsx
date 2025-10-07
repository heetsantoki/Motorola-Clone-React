import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Header from "./Components/Navbar";
import Register from "./Components/Register";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Added to cart:");
    console.log("ID:", product.id);
    console.log("Name:", product.name);
    console.log("Price:", product.newPrice);
  
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart successfully!`);
  };
  

  const removeFromCart = (idToRemove) => {
    const productToRemove = cart.find((item) => item.id === idToRemove);
  
    if (productToRemove) {
      console.log("Removed from cart:");
      console.log("ID:", productToRemove.id);
      console.log("Name:", productToRemove.name);
      console.log("Price:", productToRemove.newPrice);
    }
  
    setCart((prevCart) => prevCart.filter((item) => item.id !== idToRemove));
    alert(`${productToRemove.name} removed from cart successfully!`);
  };
  

  return (
    <Router>
      <Header cart={cart} removeFromCart={removeFromCart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={ <Cart cartItems={cart} onRemoveFromCart={removeFromCart}/> }/>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register/>}/>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
