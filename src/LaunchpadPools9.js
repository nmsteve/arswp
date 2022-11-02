import React from "react";
import Aside from "./Components/Aside";
import Rightsec_btn_on from "./Components/Right_sec_components/Rightsec_btn_on";
import MiddleSectionRedThreelogo from "./Components/Middle_contain_sec/MiddleSectionRedThreelogo";
import TopNavAllTwo from "./Components/Topnavbar_section/TopNavAllTwo";
import Topnavicon_admin_mode from "./Components/Topnavbar_section/Topnavicon_admin_mode";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <TopNavAllTwo title="Pools" subtitle="Swipe Coin" />

          <Topnavicon_admin_mode />

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
          <Rightsec_btn_on />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
