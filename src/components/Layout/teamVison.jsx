import React from "react";
import { useTranslation } from "react-i18next";

const TeamVision = () => {
  const { t } = useTranslation();
  return (
    <div className="page4_layout">
      <div className="Team_Vision_Section">
        <div className="Team_vision">Team Vision</div>
        <div className="vision">
            <div className="vision_text">{t("In the past, there was a sacred contract of human inviolability called ownership.We believe that a second ownership revolution is happening in the digital world today. This is digital ownership. This is digital ownership. In fact, all derivative data and everything that happens when people use digital services belongs to the individual. Many big tech companies and traditional companies have made huge incomes by abusing our data, such as targeted advertising and financial services. We aim to reclaim our rights from them and change the perception of this. This is establishing data sovereignty over ourselves. Europe and North America are proposing strong laws for data, such as GDPR and ADDPA, and they want a new paradigm and a new game-changer. Our goal is to execute the most important infrastructure and services using privacy in order to establish this giant flow called Web3. This is YourD service.")}</div>
            <div className="vision_text">{t("We are defining three components for building Web3 services: prove, own, and apply. These three must be separated. YourD corresponds to prove and own. ")}</div>
            <div className="vision_text">{t("We will manage personal data and derivative data using DID, and we will create an auth system that people can use easily with the WebAuthn method, without knowing if they are using blockchain or not. This service is different from existing wallets. In this service, people can store and utilize digital assets and various data simultaneously. Furthermore, through YourD auth system, people will be able to easily log in to other dapp services. ")}</div>
            <div className="vision_text">{t("Lastly, there is the D-ad service, which stands for decentralized advertising. This service is an advertising service optimized for the fourth industrial revolution and the Web3 world. The easiest way to summarize this service is that it allows targeted advertising without collecting personal information. This service will be conducted in two ways: CtoC and BtoB, and there is also the advantage of making advertising easily available for individuals at a low cost.")}</div>
            <div className="vision_text">{t("We believe in establishing individual data sovereignty and redistributing wealth through it. Therefore, we will provide an infrastructure application that people can own and manage all personal and derivative data, as well as services that can use and utilize them. ")}</div>

        </div >
      </div>
      
    </div>
  );
};

export default TeamVision;
