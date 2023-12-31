import React from "react";
import "./style.css";
import CarouselApp from '../../components/CarouselApp';
import RecentProducts from "../../components/RecentProducts";
import Information from "../../components/Information";
import ProductCategories from "../../components/ProductCategories";
import SaleProducts from "../../components/SaleProducts";
import TopBrands from "../../components/TopBrands";

const Home = () => {
  return (
    <div className="container">
      <CarouselApp/>
      <RecentProducts/>
      <Information/>
      <ProductCategories/>
      <SaleProducts/>
      <TopBrands/>
  
    </div>

  );
  }
export default Home;
