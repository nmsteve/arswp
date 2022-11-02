import React from "react";
import Aside from "../Components/Aside";
import TopNavAllTwo from "../Components/Topnavbar_section/TopNavAllTwo";

import Topnavicon_admin_mode from "../Components/Topnavbar_section/Topnavicon_admin_mode";
import LiveEditOffPrivateAdminModeMiddleP3 from "../Components/Middle_contain_sec/LiveEditOffPrivateAdminModeMiddleP3";
import EndAdminMode from "../Components/Right_sec_components/EndAdminMode";
import FundraisedClaim from "../Components/Right_sec_components/FundraisedClaim";

export default function Private4() {
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
        <LiveEditOffPrivateAdminModeMiddleP3
          coinlogo="/img/RIP_logo (1).png"
          coinname="Swipe Coin"
          private="Private"
          subtitle1="Payment"
          subtitle2="Web3"
          addr="Presale Address"
          addrcont="0xc197......42bbde"
          addrimg="/img/copy.png"
          saleon="Presale Starts on"
          saleontime="9:30 (UTC) "
          saleondate="2022-09-04"
          saleend="Presale Ends on"
          saleendtime="10:30 (UTC) "
          saleenddate="2022-09-05"
          cap1="Soft  Cap"
          cap1img="/img/RIP_admin.png"
          cap1amt="20,000"
          cap2="Hard  Cap"
          cap2img="/img/RIP_admin.png"
          cap2amt="60,000"
          liqper="First Release on Sale"
          liqperct="40%"
          lockup="Vesting Release Model"
          lockupdays="30% each 20 Days"
        />

        {/* content2 */}
        <div className="contain-right fl-right">
          <EndAdminMode
            cap="Soft/Hard Cap"
            amt="20,000 - 60,000"
            barlow="2,500 RBA"
            barhigh="10,000 RBA"
            contri="Contributors"
            addr="2,487"
            per="25%"
          />

          <div className="clear"></div>
          <FundraisedClaim cap="Fundraised" amt="45,000" subamt=" ($126,582)" />
        </div>
      </div>
    </div>
  );
}
