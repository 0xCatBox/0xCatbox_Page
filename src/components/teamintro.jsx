import React from "react";

const Team = () => {
  return (
    <div className="page4_layout">
      <div className="Award_Section">
        <div className="Award">AWARD</div>
        <div className="Award_table_title">
          <div className="Achievement">ACHIEVEMENT</div>
          <div className="Project">PROJECT</div>
          <div className="Date">DATE</div>
        </div>
        <div className="Award_table">
          <div className="Award_row">
            <div className="Award_Achievement">TRON Grand Hackathon : Season 3 - GameFi: 5th, TRON DAO Forum: GameFi Prizes 4th</div>
            <div className="Award_Project">Mushroom</div>
            <div className="Award_Date">2022.11</div>
          </div>
          <div className="Award_row">
          <div className="Award_Achievement">Evmos-Covalent #OneMillionWallets Hackathon - NFT,GameFi Top Prize 1st</div>
            <div className="Award_Project">Metaverse (Roblox)</div>
            <div className="Award_Date">2022.11</div>
          </div>
          <div className="Award_row">
          <div className="Award_Achievement">Klaymakers 22 - Public Goods Runner Up</div>
            <div className="Award_Project">D-AD</div>
            <div className="Award_Date">2022.10</div>
          </div>
          <div className="Award_row">
          <div className="Award_Achievement">ETHSeoul - IPFS/File coin</div>
            <div className="Award_Project">Soul Tag</div>
            <div className="Award_Date">2022.8</div>
          </div>
          <div className="Award_row" style={{"borderWidth":"0px"}}>
          <div className="Award_Achievement">Polkadot : North America Edition: Astar Network - NFT dApps Staking Micro-Rewards</div>
            <div className="Award_Project">PSP34 NFT minting</div>
            <div className="Award_Date">2022.7</div>
          </div>
        </div>
        
        <div className="line"/>
      </div>
      <div className="Team_Vision_Section">
        <div className="Team_vision">Team Vision</div>
        <div className="vision">
            <div className="vision_text">Today, there is no such thing as private web data.</div>
            <div className="vision_text">Private data is stored centrally, so we have lost the sovereignty of our personal data. This leads to serious social problems such as leakage of private data. </div>
            <div className="vision_text">For this reason, we have to think about how our data is collected and used. We do not need to provide data to service providers. It should also enable the service to run with a transparent algorithm from the service provider.</div>
            <div className="vision_text">0xCatbox is aiming for web3 where the sovereignty of private data resides. So, we devised a way to utilize user's private data without storing it. This technology improves security while protecting the integrity of data. individuals can have sovereignty of private data on web3.</div>
        </div >
      </div>
    </div>
  );
};

export default Team;
