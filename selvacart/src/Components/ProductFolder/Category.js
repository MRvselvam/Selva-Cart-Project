import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../Data.json";
import "./Category.css";

const Category = () => {
  const [category, setCategory] = useState(null);
  const { id } = useParams();
  const categoryId = parseInt(id);

  useEffect(() => {
    fetchData(categoryId);
  }, [categoryId]);

  const fetchData = (categoryId) => {
    const item = data.categories.find((item) => item.id === categoryId);
    setCategory(item);
  };

  if (!category) {
    return <div>Loading...</div>;
  }
  return (
    <div className="categoryDiv container">
      <div className="row">
        {category.products.map((product) => (
          <div key={product.id} className="col-6 col-md-4 mb-3">
            <div className="card h-100 small-card ms-4 shadow custom-shadow">
              {" "}
              <Link
                to={`/product/${product.id}`}
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
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
                    Price: &#8377;{product.price.toLocaleString("en-IN")}
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
    </div>
  );
};

export default Category;
