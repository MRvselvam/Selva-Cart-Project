import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Body from "./Components/Body/Body";
import Category from "./Components/ProductFolder/Category";
import ProductDetails from "./Components/ProductFolder/ProductDetails";
import SearchResult from "./Components/Search/SearchResult";
import Cart from "./Components/Cart/Cart";
import SignIn from "./Components/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"/search",
        element:<SearchResult/>
      },
      {
        path:"/signIn",
        element:<SignIn/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      { 
        path: "/", 
        element: <Body/> 
      },
      {
        path:"/category/:id",
        element:<Category/>
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

reportWebVitals();
