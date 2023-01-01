import React from "react";

import Catbox from "../components/Title";
import Frame from "../components/frame";
import CopyText from "../components/copytext";
import D_AD from "../components/D_AD";
import Team from "../components/teamintro"
const Main = () => {

    return(
            <div>
                <Frame/>
                <Catbox/>
                <CopyText/>
                <D_AD/>
                <Team/>
                <Frame/>
            </div>
    )
}

export default Main;