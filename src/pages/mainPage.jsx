import React from "react";

import Catbox from "../components/Layout/Title";
import Frame from "../components/Layout/frame";
import CopyText from "../components/Layout/copytext";
import D_AD from "../components/Layout/D_AD";
import TeamAward from "../components/Layout/teamAward";
import TeamVision from "../components/Layout/teamVison";
import LanguageButton from "../components/LanguageButton";
import Footer from "../components/footer";
const Main = () => {

    return (
      <div>
        <Frame />
        <LanguageButton />
        <Catbox />
        <div className="scrollmotion">
          <CopyText />
          <D_AD />
          <TeamAward />
          <TeamVision/>
        </div>
        <Footer/>
      </div>
    );
}

export default Main;