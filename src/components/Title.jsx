import { React } from "react";
// import { useState, useEffect } from "react";
// import { useState,useEffect } from "react";
import { motion } from "framer-motion";

const Catbox = () => {
  return (
    <div className="start">
      <motion.div
        initial={{ scale: 0.01 }}
        animate={{ scale: 2, scaleX: 1, scaleY: 1.5 }}
        transition={{
          duration: 2,
          ease: "easeIn",
        }}
      >
        <div className="blackbox"></div>
      </motion.div>

      <div className="titlebox">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 4,
            ease: "backInOut",
          }}
        >
          0xCatbox
        </motion.div>
      </div>
      <div className="descriptionbox1">
        <motion.div
          className="description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            duration: 4,
            ease: "backInOut",
          }}
        >
          Make trusted
        </motion.div>
      </div>
      <div className="descriptionbox2">
        <motion.div
          className="description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 4,
            ease: "backInOut",
          }}
        >
          Internet for web3
        </motion.div>
      </div>
      <div className="arrow">
        <motion.svg
          style={{ width: "100%", height: "100%" }}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0.2 }}
            animate={{ pathLength: 1,opacity:[0,1] }}
            transition={{
              delay: 3.5,
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.3,
            }}
            strokeWidth={1}
            strokeDasharray="0 1"
            fill="none"
            stroke="white"
            d="M50 0 50 100 "
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Catbox;
