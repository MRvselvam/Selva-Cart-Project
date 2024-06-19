import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (term) => {
    setSearchTerm(term);
    navigate("/search");
  };

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const deleteItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} cartItems={cartItems} />
      <Outlet
        context={{
          searchTerm,
          cartItems,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          deleteItem,
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
