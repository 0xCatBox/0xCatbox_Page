import React from "react";
// import { useState, useEffect } from "react";
// import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CopyText = () => {
  const { t,i18n } = useTranslation();
  return (
    <section className="page2">
      <div className="page2_layout">
        <div className="black"/>
        <div className="Textbox" style={i18n.language === 'EN' ? {fontFamily: "Ethnocentric"} : {fontFamily: "manrope ExtraBold", fontWeight: 600}}>
          <motion.div
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2,
              repeatType: "loop"
            }}
            className="Copytextbox1"
          >
            <div className="leftText" >{t("Privacy")}</div>
            <div className="rightText">{t("is power to")}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.05 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 2,
              repeatType: "loop"
            }}
            className="Copytextbox2"
          >
            <div className="leftText">{t("Selectively")}</div>
            <div className="rightText">{t("reveal")}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.01 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 2,
              repeatType: "loop"
            }}
            className="Copytextbox3"
          >
            <div className="leftText">{t("Oneself")}</div>
            <div className="rightText">{t("to the world")}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CopyText;
