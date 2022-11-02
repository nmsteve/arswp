import React from "react";
import Aside from "./Components/Aside";
import Airdrop_Arbor3 from "./Components/Middle_contain_sec/Airdrop_Arbor3";
import Airdrop_Arbor4_edit_off from "./Components/Middle_contain_sec/Airdrop_Arbor4_edit_off";
import Swipe_coin_edit_on from "./Components/Middle_contain_sec/MiddleSectionEditMode";
import Admin_addre_whli from "./Components/Right_sec_components/Admin_addre_whli";
import Admin_airdrop from "./Components/Right_sec_components/Admin_airdrop";
import Admin_airdrop_ended from "./Components/Right_sec_components/Admin_airdrop_ended";
import Airdrop_airdrops from "./Components/Topnavbar_section/Airdrop_airdrops";
import Air_arbor from "./Components/Topnavbar_section/Air_arbor";
import Poolswipe_nav_sec from "./Components/Topnavbar_section/TopNavAllTwo";
import Topnavicon_admin_mode from "./Components/Topnavbar_section/Topnavicon_admin_mode";
import TopNavAllTwo from "./Components/Topnavbar_section/TopNavAllTwo";
import ModalPOPUPAirdropper2 from "./ModalPOPUPAirdropper2";

class Home extends React.Component {
  render() {
    return (
      <div className="mainly">
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          {/* <Poolswipe_nav_sec /> */}

          <TopNavAllTwo title="Airdrops" subtitle="Arborswap" />

          <Topnavicon_admin_mode />

          <div className="clear mar-22"></div>
          {/* content1  */}
          <Airdrop_Arbor4_edit_off />

          {/* content2 */}
          <ModalPOPUPAirdropper2 />
          <div className="clear"></div>

          {/* content3 */}
        </div>
      </div>
    );
  }
}

export default Home;
