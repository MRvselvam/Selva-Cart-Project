import React, { useEffect, useState } from "react";
import data from "../Data.json";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import * as Images from "../../ImageFolder/Image";
import "./Body.css";

const Body = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setAllCategories(data.categories);
  };

  const images = [
    Images.cartDigitalImg,
    Images.availableImg,
    Images.cosmeticsCollectionsImg,
    Images.eCommerceImg,
    Images.gajetsImg,
    Images.orderingNowImg,
    Images.qualityImg,
    Images.ratingEmojiImg,
    Images.sofaSetImg,
    Images.storeToLocationImg,
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="allCategoriesDiv mt-2 alert alert-light w-100"
          role="alert"
        >
          <div
            className="d-flex flex-wrap bg-white justify-content-between ms-3 mt-3"
            style={{ minHeight: "20vh" }}
          >
            {allCategories.map((category) => (
              <div
                key={category.id}
                className="col-6 col-sm-4 col-md-3 col-lg text-center mb-3"
              >
                <Link to={`/category/${category.id}`}
                  className="text-muted fw-bold"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={category.images}
                    alt={category.categorytype}
                    className="img-fluid rounded-circle"
                    style={{ height: "60px", width: "100px" }}
                  />
                  <p className="mt-2">{category.categorytype}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="liveImages">
          <div className="w-100">
            <Carousel interval={3000} pause="hover">
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    alt={`slide-${index}`}
                    className="img-fluid rounded w-100"
                    style={{ maxHeight: "50vh" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
