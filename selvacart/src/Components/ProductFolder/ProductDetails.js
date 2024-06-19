import React, { useEffect, useState } from "react";
import data from "../Data.json";
import { useParams, useOutletContext } from "react-router-dom";
import * as Images from "../../ImageFolder/Image";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [categoryType, setCategoryType] = useState(null);
  const { addToCart } = useOutletContext();

  const { id } = useParams();
  const productId = parseInt(id);

  useEffect(() => {
    fetchData(productId);
  }, [productId]);

  const fetchData = (productId) => {
    let foundProduct = null;
    let foundCategoryType = null;

    data.categories.forEach((category) => {
      const product = category.products.find((item) => item.id === productId);
      if (product) {
        foundProduct = product;
        foundCategoryType = category.categorytype;
      }
    });

    setProductDetail(foundProduct);
    setCategoryType(foundCategoryType);
  };

  const handleAddToCart = () => {
    addToCart(productDetail);
  };
  // Handle loading state
  if (!productDetail) {
    return <div>Loading...</div>;
  }

  // Render product details once loaded
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <img
            src={productDetail.image}
            alt={productDetail.name}
            className="img-fluid rounded alert alert-light"
            role="alert"
            style={{ maxWidth: "100%", objectFit: "cover" }}
          />
          <div>
            <button
              className="btn btn-warning text-white mt-5 w-50 fw-bold"
              style={{ height: "50px" }}
              onClick={handleAddToCart}
            >
              <img
                src={Images.whiteCart_icon}
                alt="cart"
                style={{ height: "22px", width: "22px" }}
              />{" "}
              Add to Cart
            </button>
          </div>
        </div>
        <div className="col-md-7">
          <h2 className="mb-3">{productDetail.fullname}</h2>
          <div className="mb-3">
            <span className="text-white border bg-success border-success badge fw-bold">
              {productDetail.rating} ★
            </span>
            &nbsp;
            <span className="text-secondary">
              {productDetail.ratingCountAndComment}
            </span>
          </div>
          <div className="mb-3">
            <span className="text-dark fs-5 fw-bold">
              Price: &#8377;{productDetail.price.toLocaleString("en-IN")}
            </span>
            <span className="text-danger fw-bold">
              &nbsp;{productDetail.discount}
            </span>
          </div>
          <div className="mb-3"></div>
          <table className="table table-secondary table-hover text-start">
            <tbody>
              {categoryType === "Mobile" && (
                <>
                  <tr>
                    <td>
                      <strong>Model</strong>
                    </td>
                    <td>{productDetail.model}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Ram</strong>
                    </td>
                    <td>{productDetail.ram}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Storage</strong>
                    </td>
                    <td>{productDetail.rom}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Sim Type</strong>
                    </td>
                    <td>{productDetail.simType}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Network</strong>
                    </td>
                    <td>{productDetail.network}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Color</strong>
                    </td>
                    <td>{productDetail.color}</td>
                  </tr>
                </>
              )}
              {categoryType === "Laptop" && (
                <>
                  <tr>
                    <td>
                      <strong>Ram</strong>
                    </td>
                    <td>{productDetail.ram}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Model</strong>
                    </td>
                    <td>{productDetail.model}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Processor Brand</strong>
                    </td>
                    <td>{productDetail.processorBrand}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Processor Name</strong>
                    </td>
                    <td>{productDetail.processorName}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Generation</strong>
                    </td>
                    <td>{productDetail.generation}</td>
                  </tr>
                  {productDetail.SSD === "No" ? (
                    <tr>
                      <td>
                        <strong>Hard Disk Size</strong>
                      </td>
                      <td>{productDetail.hardDiskSize}</td>
                    </tr>
                  ) : (
                    <>
                      <tr>
                        <td>
                          <strong>SSD</strong>
                        </td>
                        <td>{productDetail.SSD}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>SSD Capacity</strong>
                        </td>
                        <td>{productDetail.SSDCapacity}</td>
                      </tr>
                    </>
                  )}
                  <tr>
                    <td>
                      <strong>Screen Size</strong>
                    </td>
                    <td>{productDetail.screenSize}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Operating System</strong>
                    </td>
                    <td>{productDetail.operatingSystem}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Type</strong>
                    </td>
                    <td>{productDetail.type}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Color</strong>
                    </td>
                    <td>{productDetail.color}</td>
                  </tr>
                </>
              )}
              {categoryType === "Furniture" && (
                <>
                  <tr>
                    <td>
                      <strong>Material</strong>
                    </td>
                    <td>{productDetail.material}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Size</strong>
                    </td>
                    <td>{productDetail.size}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Brand</strong>
                    </td>
                    <td>{productDetail.brand}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Color</strong>
                    </td>
                    <td>{productDetail.color}</td>
                  </tr>
                </>
              )}
              {categoryType === "Electronic" && (
                <>
                  <tr>
                    <td>
                      <strong>Color</strong>
                    </td>
                    <td>{productDetail.color}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Brand</strong>
                    </td>
                    <td>{productDetail.brand}</td>
                  </tr>
                </>
              )}
              {categoryType === "Clothes" && (
                <>
                  <tr>
                    <td>
                      <strong>Material</strong>
                    </td>
                    <td>{productDetail.material}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Size</strong>
                    </td>
                    <td>{productDetail.size}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Weight</strong>
                    </td>
                    <td>{productDetail.weight}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Color</strong>
                    </td>
                    <td>{productDetail.color}</td>
                  </tr>
                </>
              )}
              {categoryType === "Jewels" && (
                <>
                  <tr>
                    <td>
                      <strong>Material</strong>
                    </td>
                    <td>{productDetail.material}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Weight</strong>
                    </td>
                    <td>{productDetail.weight}</td>
                  </tr>
                </>
              )}
              {categoryType === "Cosmetics" && (
                <>
                  <tr>
                    <td>
                      <strong>Uses</strong>
                    </td>
                    <td>{productDetail.uses}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Quantity</strong>
                    </td>
                    <td>{productDetail.quantity}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Brand</strong>
                    </td>
                    <td>{productDetail.brand}</td>
                  </tr>
                </>
              )}
              {categoryType === "Toys" && (
                <>
                  <tr>
                    <td>
                      <strong>Material</strong>
                    </td>
                    <td>{productDetail.material}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Color</strong>
                    </td>
                    <td>{productDetail.color}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Weight</strong>
                    </td>
                    <td>{productDetail.weight}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
