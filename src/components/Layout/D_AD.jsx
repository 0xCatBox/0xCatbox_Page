import React from "react";
// import { motion } from "framer-motion";
import Logo from "../../assets/image/D-AD_M.png";
import { useTranslation } from "react-i18next";

const D_AD = () => {
  const { t,i18n } = useTranslation();
  return (
    <section className="page3_background">
      <div className="page3_layout">
        <div className="black"/>
        <div className="page3_Textbox">
          <div className="D-AD_description">
            <div className="descript1" style={i18n.language === 'EN' ? {fontFamily: "Ethnocentric"} : {fontFamily: "manrope SemiBold"}}>{t("Web3 starts at 0xCatbox")}</div>
            <div className="descript2">D-AD</div>
            <div className="descript3" style={i18n.language === 'EN' ? {fontFamily: "Ethnocentric"} : {fontFamily: "manrope ExtraBold", fontWeight: 800, display: "inline-block"}}>{t("Web3 advertising protocol")}</div>
            <div className="descript3" style={i18n.language === 'EN' ? {fontFamily: "Ethnocentric"} : {fontFamily: "manrope ExtraBold", fontWeight: 800, display: "inline-block"}}>{t("with no data movement")}</div>
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
