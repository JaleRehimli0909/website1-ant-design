import React from "react";
import "./style.css";
import { Col, Row, Avatar, List, Tag, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";

const FooterAppTop = () => {
  const featured = [
    {
      image: require("../../assets/images/img-footer1.jpg"),
      title: "Kelloggs Crunchy Nut Hazelnut",
      cost: "£2.50",
      link: "https://www.google.com/",
    },
    {
      image: require("../../assets/images/img-footer2.jpg"),
      title: "Branston Baked Beans in a Rich",
      cost: "£3.50",
      link: "https://www.google.com/",
    },
    {
      image: require("../../assets/images/img-footer3.jpg"),
      title: "Breeze Toilet Tissue Soft White 24 Roll",
      cost: "£2.50",
      link: "https://www.google.com/",
    },
  ];

  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  return (
    <div className="FooterAppTop">
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <h2>Featured</h2>
            <List
              itemLayout="horizontal"
              dataSource={featured}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar className="footerAppTop-img" src={item.image} />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="£2.50"
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={6}>
            <h2>Top rated</h2>
            <List
              itemLayout="horizontal"
              dataSource={featured}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar className="footerAppTop-img" src={item.image} />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="£2.50"
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={6}>
            <h2>Tags</h2>
            <div className="tags">
              <Tag>Frozen</Tag>
              <Tag>Kitchen</Tag>
              <Tag closable>Drinks</Tag>
              <Tag closable>Beer & Wine</Tag>
              <Tag>Chocolates</Tag>
            </div>
          </Col>

          <Col span={6}>
            <h2>Recent posts</h2>
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>
                    <RightOutlined />
                  </Typography.Text>{" "}
                  {item}
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterAppTop;
