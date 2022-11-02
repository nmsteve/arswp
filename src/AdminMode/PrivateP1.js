import React from "react";
import Aside from "../Components/Aside";
import TopNavAllTwo from "../Components/Topnavbar_section/TopNavAllTwo";

import Topnavicon_admin_mode from "../Components/Topnavbar_section/Topnavicon_admin_mode";
import PrivateAdminModeMiddleP1 from "../Components/Middle_contain_sec/PrivateAdminModeMiddleP1";
import PrivateAdminModeRightP1 from "../Components/Right_sec_components/PrivateAdminModeRightP1";

export default function PrivateP1() {
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

        <PrivateAdminModeMiddleP1
          coinlogo="/img/RIP_logo (1).png"
          coinname="Swipe Coin"
          subtitle1="Payment"
          subtitle2="Web3"
          rightlogo1="/img/Vector (6).png"
          rightlogo2="/img/dribbble.png"
          rightlogo3="/img/Tel.png"
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
          <PrivateAdminModeRightP1
            capname="Soft/Hard Cap"
            amt="20,000 - 60,000"
            minall="Min Allocation"
            minallamt="100 RBA"
            maxall="Max Allocation"
            maxallamt="10,000 RBA"
            barlow="0 RBA"
            barhigh="2,000 RBA"
          />

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}
