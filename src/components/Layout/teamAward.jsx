import React from "react";

const TeamAward = () => {
  return (
    <div className="page4_layout">
      <div className="Award_Section">
        <div className="fixed">
          <div className="Award">AWARD</div>
          <div className="Award_table_title">
            <div className="Achievement">ACHIEVEMENT</div>
            <div className="Project">PROJECT</div>
            <div className="Date">DATE</div>
          </div>
          <div className="Award_table">
            <div className="Award_row" onClick={() => window.open("https://finance.yahoo.com/news/happy-holidays-tron-grand-hackathon-184527912.html")}>
              <div className="Award_Achievement">TRON Grand Hackathon : Season 3 - GameFi: 5th, TRON DAO Forum: GameFi Prizes 4th</div>
              <div className="Award_Project">Mushroom</div>
              <div className="Award_Date">2022.12</div>
            </div>
            <div className="Award_row" onClick={() => window.open("https://medium.com/encode-club/evmos-covalent-onemillionwallets-hackathon-prizewinners-and-summary-22fca2302c37")}>
            <div className="Award_Achievement">Evmos-Covalent #OneMillionWallets Hackathon - NFT,GameFi Top Prize 1st</div>
              <div className="Award_Project">Metaverse (Roblox)</div>
              <div className="Award_Date">2022.11</div>
            </div>
            <div className="Award_row" onClick={() => window.open("https://medium.com/klaytn-kr/%EA%B8%80%EB%A1%9C%EB%B2%8C-%ED%95%B4%EC%BB%A4%ED%86%A4-klaymakers22-%EC%88%98%EC%83%81%EC%9E%90-%EA%B3%B5%EA%B0%9C-83a709903d68")}>
            <div className="Award_Achievement">Klaymakers 22 - Public Goods Track FinalList & winner</div>
              <div className="Award_Project">D-AD</div>
              <div className="Award_Date">2022.10</div>
            </div>
            <div className="Award_row" onClick={() => window.open("https://devfolio.co/projects/soul-tag-f317")}>
            <div className="Award_Achievement">ETHSeoul - IPFS/File coin</div>
              <div className="Award_Project">Soul Tag</div>
              <div className="Award_Date">2022.8</div>
            </div>
            <div className="Award_row" onClick={() => window.open("https://devpost.com/software/comit")} style={{"borderWidth":"0px" }}>
            <div className="Award_Achievement" >Polkadot : North America Edition: Astar Network - NFT dApps Staking Micro-Rewards</div>
              <div className="Award_Project">PSP34 NFT minting</div>
              <div className="Award_Date">2022.7</div>
            </div>
          </div>    
          <div className="line"/>
        </div>
      </div>
    </div>
  );
};

export default TeamAward;
