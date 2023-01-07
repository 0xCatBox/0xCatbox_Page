import React from 'react'
import i18n from "i18next";
import { GrLanguage } from "../assets/Icons/GrLanguageIcon";
import { motion } from "framer-motion";

function LanguageButton(props){
    const [alignment, setAlignment] = React.useState("en");
    const handleChange = async () => {
      if (alignment === "en") await setAlignment("ko");
      else await setAlignment("en");
    
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
          {alignment == "ko" ? (
            <div className='button'>
                <div className="toggleOn">ko</div>
                <div className="toggleOff">en</div>
            </div>
          ) : (
            <div className='button'>
                <div className="toggleOn">en</div>
                    <div className="toggleOff">ko</div>
            </div>
          )}
        </button>
      </motion.div>
    );
}

export default LanguageButton