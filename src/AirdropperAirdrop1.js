import React from "react";
import Aside from "./Components/Aside";
import Slider from "./Components/Slider";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Sort_by from "./Components/Sort_by";
import Search_sec from "./Components/Search_sec";
import My_Airdrop from "./Components/My_Airdrop";
import AirdropperAirdropsBox from "./Components/Box_section/AirdropperAirdropsBox";
import Liveon_end_time from "./Components/Liveon_end_time";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";

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
              <Liveon_end_time />
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
            <AirdropperAirdropsBox
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

            <AirdropperAirdropsBox
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
            <AirdropperAirdropsBox
              coinimg="/img/RIP_logo(6).png"
              cointitle="Venus"
              subtitle1="DEFI"
              subtitle2="DEX"
              amout="240,000"
              coinsublogo="/img/RIP (1).png"
              remaining="60,000 VNS"
              percent="100%"
              selectaddr="6,000"
              participant="0"
            />
            <AirdropperAirdropsBox
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
            <AirdropperAirdropsBox
              coinimg="/img/AirdropRIP.png"
              cointitle="Arborswap"
              subtitle1="DEFI"
              subtitle2="DEX"
              amout="21,000"
              coinsublogo="/img/RIP.png"
              remaining="60,000 VNS"
              percent="100%"
              selectaddr="6,000"
              participant="0"
            />
            <AirdropperAirdropsBox
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
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
