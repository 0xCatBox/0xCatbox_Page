import React from "react";
// import { motion } from "framer-motion";
import Logo from "../assets/image/D-AD_M.png";

const D_AD = () => {
  return (
    <div className="page3_layout">
      <div className="page3_Textbox">
        <div className="D-AD_description">
          <div className="descript1">Web3 starts at 0xCatbox</div>
          <div className="descript2">D-AD</div>
          <div className="descript3">Advertising protocol</div>
          <div className="descript3">created using Zkp for web3</div>
        </div>
      </div>
      <div className="D-AD_M">
        <img src={Logo} alt = "mobile"className="image" />
      </div>
    </div>
  );
};

export default D_AD;
