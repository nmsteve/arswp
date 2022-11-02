import React from "react";
import Aside from "./Components/Aside";
import TopNavAllTwo from "./Components/Topnavbar_section/TopNavAllTwo";
import More_det_claims from "./Components/Right_sec_components/More_det_claims";
import Rightsec_btn_off from "./Components/Right_sec_components/Rightsec_btn_off";
import MiddleSectionRedThreelogo from "./Components/Middle_contain_sec/MiddleSectionRedThreelogo";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <TopNavAllTwo title="Pools" subtitle="Swipe Coin" />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}
          <MiddleSectionRedThreelogo
            coinlogo="/img/RIP_logo (1).png"
            coinname="Swipe Coin"
            subtitle1="Payment"
            subtitle2="Web3"
            rightlogo1="/img/Vector (6).png"
            rightlogo2="/img/dribbble.png"
            rightlogo3="/img/Tel.png"
          />

          {/* content2 */}
          <div className="contain-right fl-right">
            <Rightsec_btn_off />
            <div className="clear"></div>

            {/* content3 */}
            <More_det_claims />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
