import React from "react";
import "./style.css";
import { Col, Row, Button } from "antd";
import {
  MobileOutlined,
  UserOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const HeaderApp = () => {
  return (
    <div className="container">
      <Row className="topBar">
        <Col lg={12} className="topBar-left">
          <ul>
            <li>
              <a href="#">
                <MobileOutlined /> <span>07450223366</span>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <MailOutlined />
                <span>grocery@gmail.com</span>{" "}
              </a>
            </li>
          </ul>
        </Col>
        <Col lg={12} className="topBar-right">
          <ul>
            <li>
              <a href="https://www.google.com'">
                <FacebookOutlined />
              </a>
            </li>
            <li>
              <a href="https://www.google.com'">
                <TwitterOutlined />
              </a>
            </li>
            <li>
              <a href="https://www.google.com'">
                <InstagramOutlined />
              </a>
            </li>
          </ul>
          <Button className="top-right-button" icon={<UserOutlined />}>
            My Account
          </Button>
        </Col>
      </Row>

      <div className="headerApp"></div>
    </div>
  );
};

export default HeaderApp;
