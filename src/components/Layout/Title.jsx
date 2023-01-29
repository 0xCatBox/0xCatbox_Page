import { React } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const Catbox = () => {
  const { t } = useTranslation();

  return (  
    <div className="start">
      <motion.div
        initial={{ scale: 0.01 }}
        animate={{ scale: 1.5, scaleX: 1, scaleY: 1.5 }}
        transition={{
          delay: 0.1,
          duration: 2,
          ease: "backOut",
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
            duration: 3,
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
          {t('Realize personal data soverignty')}
        </motion.div>
      </div>
      <div className="descriptionbox2">
        <motion.div
          className="description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 4,
            ease: "backInOut",
          }}
        >
          {t('This is true meaning of web3')}
        </motion.div>
      </div>
      <div className="arrow">
        <motion.svg
          style={{ width: "100%", height: "100%" }}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={{ pathLength: [0,0.2,1,0], y:[0,0,100,100]}}
            transition={{
              times: [0,0.1,0.9,1],
              delay: 3.5,
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0,
            }}
            strokeWidth={1.5}
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
