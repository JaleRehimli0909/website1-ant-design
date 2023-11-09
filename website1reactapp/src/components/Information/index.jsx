import React from "react";
import "./style.css";
import imgInfor1 from "../../assets/images/ad-img1.png";
import imgInfor2 from "../../assets/images/ad-img2.png";
import { Card, Row, Col } from "antd";
const { Meta } = Card;

const Information = () => {
  return (
    <div className="InformationApp">
      <Row gutter={[24,24]}>
        <Col xs={24} lg={12}>
          <Card
            className="cart1"
          >
            <Meta
              avatar={<img src={imgInfor1} alt="inforImg1" />}
              title="Everyday essentials from"
              description="60p"
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card
            className="cart2"
          >
            <Meta
              className="meta"
              avatar={<img src={imgInfor2} alt="inforImg2" />}
              title="Same day delivery"
              description="Free when you spend over £20"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Information;
