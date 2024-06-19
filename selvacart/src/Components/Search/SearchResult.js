import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import data from "../Data.json";

const SearchResult = () => {
  const { searchTerm } = useOutletContext();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const filtered = data.categories.flatMap((category) =>
        category.products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="container">
      {filteredData.length > 0 ? (
        <div className="row">
          {filteredData.map((product) => (
            <div key={product.id} className="col-6 col-md-4 mb-3 mt-3">
              <div className="card h-100 small-card ms-4 shadow custom-shadow">
                <Link
                  to={`/product/${product.id}`}
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={product.image}
                    className="card-img-top ms-2"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title small-card-title">
                      {product.name}
                    </h5>
                    <p className="card-text badge bg-success ms-2">
                      Rating: {product.rating} ★
                    </p>
                    <p className="card-text fs-5">
                      Price: &#8377;{product.price}
                      <span className="text-danger fs-6">
                        {" "}
                        {product.discount}
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ height: "80.5vh" }}>
          <p
            className="fw-bold text-danger mt-5 alert alert-danger p-5 fs-5"
            role="alert"
          >
            No products found!
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
