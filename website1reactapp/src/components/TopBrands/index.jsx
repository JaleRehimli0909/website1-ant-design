import React from "react";
import "./style.css";
import { Col, Row } from "antd";

const TopBrands = () => {
  const products = [
    {
      key: "1",
      image: require("../../assets/images/img9.jpg"),
    },
    {
      key: "2",
      image: require("../../assets/images/img10.jpg"),
    },
    {
      key: "3",
      image: require("../../assets/images/img11.jpg"),
    },
    {
      key: "4",
      image: require("../../assets/images/img9.jpg"),
    },
  ];

  return (
    <div className="TopBrands">
      <h2>Top Brands</h2>

      <Row gutter={[24, 24]}>
        {products.map((product) => {
          return (
            <Col xs={24} sm={12} lg={6} key={product.key}>
              <img src={product.image} alt="imgLogo" />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default TopBrands;
