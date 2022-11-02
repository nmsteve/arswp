import React from "react";
import Aside from "./Components/Aside";
import Slider from "./Components/Slider";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Sort_by from "./Components/Sort_by";
import Search_sec from "./Components/Search_sec";
import AirdropperAirdropsBoxEndin from "./Components/Box_section/AirdropperAirdropsBoxEndin";
import Airdrop_arborswap from "./Components/Box_section/AirdropperAirdropsBoxEnded";
import Airdrop_arbors_live from "./Components/Box_section/AirdropperAirdropsBoxLive";
import Live_end_timed from "./Components/Live_end_timed";
import My_Airdrop from "./Components/My_Airdrop";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
import AirdropperAirdropsBoxLive from "./Components/Box_section/AirdropperAirdropsBoxLive";
import AirdropperAirdropsBoxEnded from "./Components/Box_section/AirdropperAirdropsBoxEnded";

class Home extends React.Component {
  render() {
    return (
      <div className="mainly">
        {/* content1 */}
        <Aside />
        {/*  */}
        <div className="form-block">
          <TopNavAllThree
            breadimg="/img/airdropperlogomob.png"
            title="Airdropper"
            subtitle="Airdrops"
            mainpara="Airdrop to multiple users in few clicks."
          />

          <Topnavicon2 />

          <div className="clear"></div>
          {/* content1 slider */}

          <Slider />

          {/* content1 slider */}
          <div className="clear"></div>

          {/* content */}
          <div className="fl-container">
            <div className="outer_box_1 fl-left" id="outer_box_1_moble">
              <Live_end_timed />
            </div>
            <div className="outer_box_2 fl-left ">
              <My_Airdrop />
            </div>
            <Sort_by />
            <div className="outer_box_4 fl-right">
              <Search_sec />
            </div>
          </div>

          <div className="outer_box">
            <AirdropperAirdropsBoxEndin
              coinimg="/img/RIP_logo(6).png"
              cointitle="Venus"
              subtitle1="DEFI"
              subtitle2="DEX"
              amout="240,000"
              coinsublogo="/img/RIP (1).png"
              remaining="60,000 VNS"
              percent="25%"
              selectaddr="6,000"
              participant="4,500"
            />

            <AirdropperAirdropsBoxLive
              coinimg="/img/AirdropRIP.png"
              cointitle="Arborswap"
              subtitle1="DEFI"
              subtitle2="DEX"
              amout="240,000"
              coinsublogo="/img/RIP.png"
              remaining="60,000 VNS"
              percent="25%"
              selectaddr="6,000"
              participant="4,500"
            />

            <AirdropperAirdropsBoxEnded
              coinimg="/img/AirdropRIP.png"
              cointitle="Arborswap"
              subtitle1="DEFI"
              subtitle2="DEX"
              amout="240,000"
              coinsublogo="/img/RIP.png"
              remaining="60,000 VNS"
              percent="25%"
              selectaddr="6,000"
              participant="4,500"
            />
            <AirdropperAirdropsBoxEndin
              coinimg="/img/RIP_logo(6).png"
              cointitle="Venus"
              subtitle1="DEFI"
              subtitle2="DEX"
              amout="240,000"
              coinsublogo="/img/RIP (1).png"
              remaining="60,000 VNS"
              percent="25%"
              selectaddr="6,000"
              participant="4,500"
            />
            <AirdropperAirdropsBoxLive
              coinimg="/img/AirdropRIP.png"
              cointitle="Arborswap"
              subtitle1="DEFI"
              subtitle2="DEX"
              amout="240,000"
              coinsublogo="/img/RIP.png"
              remaining="60,000 VNS"
              percent="25%"
              selectaddr="6,000"
              participant="4,500"
            />

            <AirdropperAirdropsBoxEnded
              coinimg="/img/AirdropRIP.png"
              cointitle="Arborswap"
              subtitle1="DEFI"
              subtitle2="DEX"
              amout="240,000"
              coinsublogo="/img/RIP.png"
              remaining="60,000 VNS"
              percent="25%"
              selectaddr="6,000"
              participant="4,500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
