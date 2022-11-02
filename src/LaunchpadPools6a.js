import React from "react";
import TopNavAllTwo from "./Components/Topnavbar_section/TopNavAllTwo";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import MiddleSectionRedThreelogo from "./Components/Middle_contain_sec/MiddleSectionRedThreelogo";
import Rightsec_btn_whl_list from "./Components/Right_sec_components/Rightsec_btn_whl_list";

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
            private="Private"
            subtitle1="Payment"
            subtitle2="Web3"
            rightlogo1="/img/Vector (6).png"
            rightlogo2="/img/dribbble.png"
            rightlogo3="/img/Tel.png"
          />

          {/* content2 */}
          <Rightsec_btn_whl_list per="25%" />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
