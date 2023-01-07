import React from "react";
// import { motion } from "framer-motion";
import Logo from "../../assets/image/D-AD_M.png";
import { useTranslation } from "react-i18next";

const D_AD = () => {
  const { t } = useTranslation();
  return (
    <section className="page3_background">
      <div className="page3_layout">
        <div className="black"/>
        <div className="page3_Textbox">
          <div className="D-AD_description">
            <div className="descript1">{t("Web3 starts at 0xCatbox")}</div>
            <div className="descript2">D-AD</div>
            <div className="descript3">{t("Web3 advertising protocol")}</div>
            <div className="descript3">{t("with no data movement")}</div>
          </div>
        </div>
        <div className="D-AD_M">
          <img src={Logo} alt="mobile" className="image" />
        </div>
      </div>
    </section>
  );
};

export default D_AD;
