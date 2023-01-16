import React from "react";
import { useTranslation } from "react-i18next";

const TeamVision = () => {
  const { t,i18n } = useTranslation();
  return (
    <div className="page4_layout">
      <div className="Team_Vision_Section">
        <div className="Team_vision">Team Vision</div>
        <div className="vision">
            <div className="vision_text">{t("Today, there is no such thing as private web data.")}</div>
            <div className="vision_text">{t("Private data is stored centrally in database, so we have lost the sovereignty of our personal data. This leads to serious social problems such as leakage of private data.")}</div>
            <div className="vision_text">{t("For this reason, we have to think about how our data is collected and used.  We do not need to provide data to service providers. It should also enable the service to run with a transparent algorithm from the service provider.")}</div>
            <div className="vision_text">{t("0xCatbox pursues web3 with personal data sovereignty. So we came up with a way to utilize personal data without collecting it This technology improves security while protecting the integrity of data. So, We can have sovereignty over personal web data.")}</div>
        </div >
      </div>
      
    </div>
  );
};

export default TeamVision;
