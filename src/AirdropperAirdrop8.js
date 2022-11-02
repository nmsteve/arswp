import React from "react";
import Aside from "./Components/Aside";
import Airdrop_Arbor3 from "./Components/Middle_contain_sec/Airdrop_Arbor3";
import Admin_airdrop from "./Components/Right_sec_components/Admin_airdrop";
import Topnavicon_admin_mode from "./Components/Topnavbar_section/Topnavicon_admin_mode";
import TopNavAllTwo from "./Components/Topnavbar_section/TopNavAllTwo";
import ModalPOPUPAirdropper from "./ModalPOPUPAirdropper";
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
          <Airdrop_Arbor3 />

          {/* content2 */}
          <ModalPOPUPAirdropper />
          <div className="clear"></div>

          {/* content3 */}
        </div>
      </div>
    );
  }
}

export default Home;
