import React from "react";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import Air_arbor from "./Components/Topnavbar_section/Air_arbor";
import Airdrop_arbor2 from "./Components/Middle_contain_sec/Airdrop_arbor2";
import Airdrops_arbor_right_notime from "./Components/Right_sec_components/Airdrops_arbor_right_notime";
import Airdrops_arbor_right_whilt from "./Components/Right_sec_components/Airdrops_arbor_right_whilt";
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
          <Airdrop_arbor2 />
          {/* content2 */}
          <Airdrops_arbor_right_whilt />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
