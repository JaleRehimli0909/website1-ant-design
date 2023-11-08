import React from "react";
import "./style.css";
import CarouselApp from '../../components/CarouselApp';
import RecentProducts from "../../components/RecentProducts";

const Home = () => {
  return (
    <div className="container">
      <CarouselApp/>
      <RecentProducts/>
  
    </div>

  );
  }
export default Home;
