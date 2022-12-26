import React from "react";
// import { useState, useEffect } from "react";
// import { useState,useEffect } from "react";
import { motion } from "framer-motion";

const CopyText = () => {
  return (
    <div className="Textbox">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className="Copytextbox1"
      >
        <div className="leftText">Privacy</div>
        <div className="rightText">is power to</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.25,
          duration: 2,
        }}
        className="Copytextbox2"
      >
        <div className="leftText">Selectively</div>
        <div className="rightText">reveal</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 2,
        }}
        className="Copytextbox3"
      >
        <div className="leftText">Oneself</div>
        <div className="rightText">to the world</div>
      </motion.div>
    </div>
  );
};

export default CopyText;
