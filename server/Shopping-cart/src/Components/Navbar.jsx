import { useState } from "react";
import {
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import Cart from "./Cart";

import "../index.css";

const Header = ({ cart, removeFromCart }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleToggle = () => setShowDropdown(!showDropdown);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("You have been logged out.");
    navigate("/login");
  };


  return (
    <Navbar bg="light" expand="md" className="shadow-sm px-3">
      <Container style={{ maxWidth: "100%", paddingLeft: "20px", paddingRight: "20px" }}>
        {/* Motorola Logo */}
        <Navbar.Brand>
          <Link to="/">
            <img
              src="/images/motorola-logo.png"
              alt="Logo"
              width="100"
              height="22"
              style={{ maxWidth: "100%" }}
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <div className="d-flex flex-column flex-lg-row align-items-center w-100">
            {/* Search Box */}
            <InputGroup className="search-box my-2 my-lg-0" style={{ maxWidth: "300px" }}>
              <FormControl placeholder="Search..." className="shadow-sm" />
              <InputGroup.Text>
                <Search />
              </InputGroup.Text>
            </InputGroup>

            {/* Icons */}
            <div className="d-flex align-items-center gap-3 ms-lg-auto">
              <a href="#" className="header-icon-link" aria-label="Newsletter">
                <MdOutlineUnsubscribe className="header-icon" size={26} color="black" />
              </a>

              <Link to="/contact" className="header-icon-link" aria-label="ContactUs">
                <RiCustomerService2Fill className="header-icon" size={26} color="black" />
              </Link>


              {/* User Dropdown */}
              <Dropdown show={showDropdown} align="end">
                <Dropdown.Toggle
                  as="div"
                  id="profile-dropdown"
                  className="d-flex flex-column align-items-center custom-dropdown-toggle"
                  onClick={handleToggle}
                >
                  <FaRegUser className="header-icon" size={24} />
                </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/orders">Orders</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>

              {/* Cart Dropdown */}
              <Dropdown align="end">
                <Dropdown.Toggle as={Nav.Link}>
                  <div className="position-relative">
                    <IoCartOutline className="header-icon" size={26} />
                    {cart.length > 0 && (
                      <span className="cart-badge">{cart.length}</span>
                    )}
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 300 }}>
                  {cart.length === 0 ? (
                    <span style={{ padding: 10 }}>Cart is Empty!!</span>
                  ) : (
                    <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
