import React from 'react'
import i18n from "i18next";
import { GrLanguage } from "../assets/Icons/GrLanguageIcon";
import { motion } from "framer-motion";

function LanguageButton(props){
    const [alignment, setAlignment] = React.useState("EN");
    const handleChange = async () => {
      if (alignment === "EN") await setAlignment("KR");
      else await setAlignment("EN");
    
    };

    React.useEffect(() => {
        i18n.changeLanguage(alignment);
    },[alignment])


    return (
      <motion.div
        className="Langbutton"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        <GrLanguage className="LangIcon" />
        <button className="button" onClick={handleChange}>
          {alignment === "KR" ? (
            <div className='button'>
                <div className="toggleOn">KR</div>
                <div className="toggleOff">EN</div>
            </div>
          ) : (
            <div className='button'>
                <div className="toggleOn">EN</div>
                    <div className="toggleOff">KR</div>
            </div>
          )}
        </button>
      </motion.div>
    );
}

export default LanguageButton