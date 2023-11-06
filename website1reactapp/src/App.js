import React from "react";
import "./App.css";
import { Layout } from "antd";
import HeaderApp from "./components/HeaderApp";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <HeaderApp />
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
