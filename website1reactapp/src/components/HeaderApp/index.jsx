import React, { useState } from "react";
import "./style.css";
import { Col, Row, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import {
  MobileOutlined,
  UserOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const HeaderApp = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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

      <Row className="headerApp separator">
        <Col lg={12} className="header-logo">
          Grocery
        </Col>
        <Col lg={12} className="header-list">
          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              title="Grocery"
              placement="right"
              onClose={onClose}
              open={open}
              className="drawer"
            >
              <nav className="nav1">
                <ul>
                  <li>
                    <NavLink onClick={onClose} to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onClose} to="/about">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onClose} to="/shop">
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onClose} to="/faq">
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onClose} to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </Drawer>
          </div>
          <nav className="mobileHidden">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderApp;
