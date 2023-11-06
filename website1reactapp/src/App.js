import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
import HeaderApp from "./components/HeaderApp";
import Home from "./pages/Home";
import AboutApp from "./pages/AboutApp";
import ShopApp from "./pages/ShopApp";
import FaqApp from "./pages/FaqApp";
import ContactApp from "./pages/ContactApp";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header>
          <HeaderApp />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutApp />} />
            <Route path="/shop" element={<ShopApp />} />
            <Route path="/faq" element={<FaqApp />} />
            <Route path="/contact" element={<ContactApp />} />
          </Routes>
        </Content>
        <Footer>Footer</Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
