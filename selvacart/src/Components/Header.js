import React from "react";
import * as Images from "../ImageFolder/Image";
import { Link } from "react-router-dom";
import "./Header.css"; // Assuming you have custom styles if needed

const Header = ({onSearch, cartItems}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={Images.logo_img}
              alt="img"
              className="rounded"
              style={{
                width: "150px",
                height: "55px",
                marginTop: "-15px",
                marginLeft: "-3px",
              }}
            />
            <span
              className="text-dark fw-bold mt-3 ms-4"
              style={{ position: "absolute", marginLeft: "0px" }}
            >
              Selva Cart
            </span>
          </Link>
          <div className=" d-flex align-items-center w-75">
            <input
              type="text"
              className="form-control me-2 pe-5 fw-bold text-secondary"
              placeholder="Search..."
              onChange={(e) => onSearch(e.target.value)}
            />
            <img
              src={Images.search_icon}
              alt="search-icon"
              style={{ width: "20px", height: "20px", marginLeft: "-45px" }}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/SignIn"
                  className="nav-link d-flex align-items-center text-dark fw-bold"
                >
                  <img
                    src={Images.login_icon}
                    alt="login-icon"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "5px",
                    }}
                  />
                  <span>Login</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Cart"
                  className="nav-link d-flex align-items-center text-dark fw-bold"
                >
                  <img
                    src={Images.cart_icon}
                    alt="cart-icon"
                    className="mb-0"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "5px",
                      marginTop:"2px"
                    }}
                  />
                  <span
                    className="border-0 text-danger ms-3 mb-5 mt-3 fs-5"
                    style={{
                      position: "absolute",
                    }}
                  >
                    {cartItems.length}
                  </span>
                  <span>Cart</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link d-flex align-items-center text-dark fw-bold"
                >
                  <img
                    src={Images.menu_icon}
                    alt="menu-icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "5px",
                    }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
