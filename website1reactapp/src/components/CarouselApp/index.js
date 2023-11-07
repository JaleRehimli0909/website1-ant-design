import React from "react";
import "./style.css";
import { Col, Row, Carousel } from "antd";
import { CarOutlined, DollarOutlined, SoundOutlined } from "@ant-design/icons";

import img1 from "../../assets/images/banner-img1.jpg";
import img2 from "../../assets/images/banner-img2.jpg";
import img3 from "../../assets/images/banner-img3.jpg";

const CarouselApp = () => {
  return (
    <div className="carouselApp">
      <Row gutter={[24, 24]}>
        <Col span={18}>
          <Carousel autoplay>
            <div>
              <img alt="banner1" src={img1} />
            </div>
            <div>
              <img alt="banner2" src={img2} />
            </div>
            <div>
              <img alt="banner3" src={img3} />
            </div>
          </Carousel>
        </Col>
        <Col span={6}>
          <div className="carouselAppRight">
            <div className="carouselAppRight-holder">
              <div className="holderIcon">
                <CarOutlined />
              </div>
              <div className="holderContent">
                <h3>Free Shipping &amp; Return</h3>
                <p>Free shipping on orders over $20</p>
              </div>
            </div>
          </div>
          <div className="carouselAppRight">
            <div className="carouselAppRight-holder">
              <div className="holderIcon">
                <DollarOutlined />
              </div>
              <div className="holderContent">
                <h3>Money Back Guarantee</h3>
                <p>100% money back guarantee</p>
              </div>
            </div>
          </div>
          <div className="carouselAppRight">
            <div className="carouselAppRight-holder">
              <div className="holderIcon">
                <SoundOutlined />
              </div>
              <div className="holderContent">
                <h3>Online Support 24/7</h3>
                <p>Excepteur sint occaecat cupidatat</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CarouselApp;
