import React from "react";
import "./style.css";

import { Col, Row } from "antd";

const ProductCategories = () => {
  const productCategories = [
    {
      key: "1",
      image: require("../../assets/images/img15.jpg"),
      title: "Frozen",
    },
    {
      key: "2",
      image: require("../../assets/images/img16.jpg"),
      title: "Fresh",
    },
    {
      key: "3",
      image: require("../../assets/images/img17.jpg"),
      title: "Food Cupboard",
    },
    {
      key: "4",
      image: require("../../assets/images/img18.jpg"),
      title: "Household",
    },
    {
      key: "5",
      image: require("../../assets/images/img19.jpg"),
      title: "Drinks",
    },
    {
      key: "6",
      image: require("../../assets/images/img20.jpg"),
      title: "Bakery",
    },
    {
      key: "7",
      image: require("../../assets/images/img21.jpg"),
      title: "Fresh Fruits",
    },
    {
      key: "8",
      image: require("../../assets/images/img22.jpg"),
      title: "Hot Buys",
    },
    {
      key: "9",
      image: require("../../assets/images/img23.jpg"),
      title: "Offers",
    },
    {
      key: "10",
      image: require("../../assets/images/img24.jpg"),
      title: "Luxury",
    },
    {
      key: "11",
      image: require("../../assets/images/img25.jpg"),
      title: "Beers & Wines",
    },
    {
      key: "12",
      image: require("../../assets/images/img26.jpg"),
      title: "Christmas",
    },
  ];
  return (
    <div className="ProductCategories">
      <h2>Product Categories</h2>

      <Row gutter={[24, 24]}>
        {productCategories.map((product) => {
          return (
            <Col key={product.key} xs={12} sm={6} lg={4}>
              <div className="productCategories-container">
                <img src={product.image} alt="category" />
                <h3>{product.title}</h3>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductCategories;
