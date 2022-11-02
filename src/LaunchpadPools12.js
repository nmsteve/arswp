import React from "react";
import Aside from "./Components/Aside";
import Swipe_coin_edit_off from "./Components/Middle_contain_sec/MiddleSectionEditModeOff";
import Admin_panel_det_2 from "./Components/Right_sec_components/Admin_panel_det_2";
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
          {/* <div className="app8_top-right-nav">
            <div className="inner_app8_op-right-nav">Admin Mode</div>
          </div> */}

          <div className="clear mar-22"></div>
          {/* content1  */}
          <Swipe_coin_edit_off />

          {/* content2 */}
          <Admin_panel_det_2 />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
