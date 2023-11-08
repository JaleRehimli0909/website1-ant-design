import React from "react";
import "./style.css";
import FooterAppTop from "../FooterAppTop";
import FooterAppBottom from "../FooterAppBottom";

const FooterApp = () => {
  return (
    <div className="FooterApp">
      <FooterAppTop />
      <FooterAppBottom />
    </div>
  );
};

export default FooterApp;
