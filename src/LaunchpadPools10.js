import React from "react";
import Aside from "./Components/Aside";
import MiddleSectionEditMode from "./Components/Middle_contain_sec/MiddleSectionEditMode";
import Admin_addre_whli from "./Components/Right_sec_components/Admin_addre_whli";
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

          <MiddleSectionEditMode
            coinlogo="/img/RIP_logo (1).png"
            coinname="Swipe Coin"
            private="Private"
            subtitle1="Payment"
            subtitle2="Web3"
            editon="/img/edit-2.png"
          />

          {/* content2 */}
          <Admin_addre_whli />
          <div className="clear"></div>

          {/* content3 */}
        </div>
      </div>
    );
  }
}

export default Home;
