import React from "react";
import "./style.css";
import CarouselApp from '../../components/CarouselApp';
import RecentProducts from "../../components/RecentProducts";
import Information from "../../components/Information";

const Home = () => {
  return (
    <div className="container">
      <CarouselApp/>
      <RecentProducts/>
      <Information/>
  
    </div>

  );
  }
export default Home;
