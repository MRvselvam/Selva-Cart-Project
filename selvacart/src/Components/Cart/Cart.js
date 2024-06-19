import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import cartImg from "../../ImageFolder/Icons/cartImgageNew.png";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, deleteItem } =
    useOutletContext();

  return (
    <div>
      <div className="container">
        {cartItems.length === 0 ? (
          <div
            className="alert alert-light mt-4"
            role="alert"
            style={{ height: "70vh" }}
          >
            <img src={cartImg} alt="img" style={{ marginTop: "-15px" }} />
            <p className="fs-5 text-muted">Your cart is empty!</p>
            <p className="fs-6">Add items to it now.</p>
            <Link to="/">
              <button className="btn btn-primary fw-bold w-25">Shop Now</button>
            </Link>
          </div>
        ) : (
          <div className="mt-4" >
            <h4 className="text-start fw-bold text-danger ms-2 mb-3">
              Product Price Details
            </h4>
            <ul className="list-group">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item rounded mb-2">
                  <div className="row align-items-center">
                    <div className="col-md-2 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ height: "50px", width: "50px" }}
                      />
                    </div>
                    <div className="col-md-3">
                      <span className="text-muted fw-bold">{item.name}</span>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                      <button
                        className="btn btn-sm btn-danger me-2"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="text-muted fw-bold me-2">
                        {item.quantity}
                      </span>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="col-md-2 text-center">
                      <span className="text-muted fw-bold">
                        &#8377;
                        {(item.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="col-md-2 text-center">
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteItem(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
