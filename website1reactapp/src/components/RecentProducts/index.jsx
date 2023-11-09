import React from "react";
import "./style.css";
import { Card, Button, Col, Row } from "antd";
const { Meta } = Card;

const RecentProducts = () => {
  const products = [
    {
      key: "1",
      image: require("../../assets/images/img1.jpg"),
      title:
        "Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml",
      price: "£2.00",
    },
    {
      key: "2",
      image: require("../../assets/images/img2.jpg"),
      title: "Colgate Triple Action Toothpaste 100ml",
      price: "£1.50",
    },
    {
      key: "3",
      image: require("../../assets/images/img3.jpg"),
      title: "Breeze Toilet Tissue Soft White 24 Roll",
      price: "£5.70",
    },
    {
      key: "4",
      image: require("../../assets/images/img4.jpg"),
      title:
        "Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML",
      price: "£4.50",
    },
  ];
  return (
    <div className="recentProducts">
      <h2>Recent Products</h2>
      <Row gutter={[24, 24]}>
        {products.map((product) => {
          return (
            <Col xs={24} sm={12} lg={6} key={product.key}>
              <Card
                hoverable
                style={
                  {
                    // width: 275,
                  }
                }
                cover={
                  <img
                    alt="example"
                    className="productsImg"
                    src={product.image}
                  />
                }
              >
                {/* <Meta title={product.title} /> */}

                <h3 className="productsTitle">{product.title}</h3>
                <p className="price">{product.price}</p>
                <Button className="cardButton" type="primary">
                  Add to Basket
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default RecentProducts;
