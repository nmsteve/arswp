import React from "react";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import AirdropArborMiddleSec from "./Components/Middle_contain_sec/AirdropArborMiddleSec";
import Airdrops_arbor_right_sec from "./Components/Right_sec_components/Airdrops_arbor_right_sec";
import TopNavAllTwo from "./Components/Topnavbar_section/TopNavAllTwo";
class Home extends React.Component {
  render() {
    return (
      <div className="mainly">
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <TopNavAllTwo title="Airdrops" subtitle="Arborswap" />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}
          {/* <Locker_coin_sec /> */}
          <AirdropArborMiddleSec
            coinlogo="/img/RIPAirdrop.png"
            coinname="Arborswap"
            subtitle1="Payment"
            subtitle2="Web3"
            rightlogo1="/img/Vector (6).png"
            rightlogo2="/img/dribbble.png"
            rightlogo3="/img/Tel.png"
          />
          {/* content2 */}
          <Airdrops_arbor_right_sec />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
