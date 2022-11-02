import React from "react";
import Aside from "./Components/Aside";

import TopNavAllTwo from "./Components/Topnavbar_section/TopNavAllTwo";
import Rightsec_btn_on from "./Components/Right_sec_components/Rightsec_btn_on";
import Swipe_coin_secbig from "./Components/Middle_contain_sec/MiddleSectionRedThreelogo";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import MiddleSectionRedThreelogo from "./Components/Middle_contain_sec/MiddleSectionRedThreelogo";

import ModalPOPUP from "./ModalPOPUP";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block sec_2_header">
          <TopNavAllTwo title="Pools" subtitle="Swipe Coin" />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}
          <MiddleSectionRedThreelogo
            coinlogo="/img/RIP_logo (1).png"
            coinname="Swipe Coin"
            private="Private"
            subtitle1="Payment"
            subtitle2="Web3"
            rightlogo1="/img/Vector (6).png"
            rightlogo2="/img/dribbble.png"
            rightlogo3="/img/Tel.png"
          />

          {/* content2 */}
          <div className="fl-right laun_w_32">
            <ModalPOPUP />
          </div>
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
