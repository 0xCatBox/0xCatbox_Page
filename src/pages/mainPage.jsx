import React from "react";

import Catbox from "../components/Layout/Title";
import Frame from "../components/Layout/frame";
import CopyText from "../components/Layout/copytext";
import D_AD from "../components/Layout/D_AD";
import Team from "../components/Layout/teamintro"
import LanguageButton from "../components/LanguageButton";

const Main = () => {

    return (
      <div>
        <Frame />
        <LanguageButton />
        <Catbox />
        <div className="scrollmotion">
          <CopyText />
          <Frame />
          <D_AD />
          <Team />
        </div>
      </div>
    );
}

export default Main;