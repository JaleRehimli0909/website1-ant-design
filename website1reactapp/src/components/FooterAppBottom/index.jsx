import React from "react";
import "./style.css";
import { Row, Col, FloatButton } from "antd";
import paymentImg from "../../assets/images/payment.png";

const FooterAppBottom = () => {
  return (
    <div className="FooterAppBottom">
      <div className="container">
        <Row className="FooterAppBottom-Items">
          <Col xs={24}  lg={12}>
            <p>©2022 Created by Grocery</p>
          </Col>
          <Col xs={24} lg={12} className="FooterAppBottom-Items-right">
            <img src={paymentImg} alt="footerImg" />
          </Col>
        </Row>
      </div>
      <FloatButton.BackTop className="backTop" />
    </div>
  );
};

export default FooterAppBottom;
