import React from "react";
import tri1 from "../../assets/image/acc1.png";
import acc2 from "../../assets/image/acc2.png";
import acc3 from "../../assets/image/green.png";
import RedMush from "../../assets/image/redmushroom.png";
import { useTranslation } from "react-i18next";

const Mushfarm = () => {
  const { t,i18n } = useTranslation();
  return (
    <section className="Mush_background">
      <div className="page3_layout">
        <div className="Mushback"/>
        <img src={tri1} alt="acc1" className="acc1" />
        <img src={tri1} alt="acc2" className="acc1-1"/>
        <img src={acc2} alt="acc3" className="acc2" />
        <img src={acc2} alt="acc4" className="acc2-1" />
        <img src={acc2} alt="acc5" className="acc2-2"/>
        <img src={acc3} alt="acc6" className="acc3" />
        <img src={RedMush} alt="acc6" className="RedMushroom" />
        <img src={RedMush} alt="acc6" className="RedMushroom"  style={{right:"15vw", transform:"rotate(335deg)", zIndex:"15"}}/>
        
        <div className="Mush_Textbox">
          <div className="Mush_description">
            <div className="descript1" style={i18n.language === 'EN' ? {fontFamily: "Ethnocentric"} : {fontFamily: "manrope SemiBold"}}>{t("P2G(Plant to Grow) + Strategy defense game")}</div>
            <div className="descript2">Mush Farm</div>
            <div className="descript3" style={i18n.language === 'EN' ? {fontFamily: "Ethnocentric"} : {fontFamily: "manrope ExtraBold", fontWeight: 800, display: "inline-block"}}>{t("Experience the fun of cultivating mushrooms in P2G and protecting them from thieves in a strategy defense game at the same time!")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mushfarm;
