import React from "react";
import "./style.css";
import { Col, Row, Button, Card } from "antd";

// const { Meta } = Card;

const SaleProducts = () => {
  const products = [
    {
      key: "1",
      image: require("../../assets/images/img5.jpg"),
      title: "Glens Vodka 70cl Extra smooth",
      saleprice: "£20.00",
      price: "£15.50",
    },
    {
      key: "2",
      image: require("../../assets/images/img6.jpg"),
      title: "Pot Noodle Chicken & Mushroom Standard 90g",
      saleprice: "£1.50",
      price: "£0.90",
    },
    {
      key: "3",
      image: require("../../assets/images/img7.jpg"),
      title: "Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g",
      saleprice: "£2.00",
      price: "£1.50",
    },
    {
      key: "4",
      image: require("../../assets/images/img8.jpg"),
      title: "Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g",
      saleprice: "£3.00",
      price: "£2.50",
    },
  ];
  return (
    <div className="SaleProducts">
      <h2>SaleProducts</h2>
      <Row gutter={[24, 24]}>
        {products.map((product) => {
          return (
            <Col xs={24} sm={12} lg={6} key={product.key}>
              <Card
                hoverable
                style={
                  {
                    // width: 280,
                  }
                }
                cover={<img alt="example" src={product.image} />}
              >
                <h3>{product.title}</h3>

                <div className="price">
                  <span className="saleProducts-price">
                    {" "}
                    {product.saleprice}
                  </span>
                  {product.price}
                </div>
                <Button type="primary">Add to Basket</Button>

                {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SaleProducts;
