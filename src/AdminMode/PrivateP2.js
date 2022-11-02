import React from "react";
import Aside from "../Components/Aside";
import TopNavAllTwo from "../Components/Topnavbar_section/TopNavAllTwo";

import Topnavicon_admin_mode from "../Components/Topnavbar_section/Topnavicon_admin_mode";
import AdminModeRightP1 from "../Components/Right_sec_components/StandardAdminModeRightP1";
import AdminModeP1 from "../Components/Middle_contain_sec/StandardAdminModeMiddleP1";
import StandardAdminPanelP2 from "../Components/Right_sec_components/UserPanel1";
import PrivateAdminModeMiddleP1 from "../Components/Middle_contain_sec/PrivateAdminModeMiddleP1";
import EditPrivateAdminModeMiddleP2 from "../Components/Middle_contain_sec/EditPrivateAdminModeMiddleP2";
import ModalPOPUPLanpad from "../ModalPOPUPLanpad";

export default function Private2() {
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
        <EditPrivateAdminModeMiddleP2
          coinlogo="/img/RIP_logo (1).png"
          coinname="Swipe Coin"
          private="Private"
          subtitle1="Payment"
          subtitle2="Web3"
          editon="/img/edit-2.png"
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
          {/* <StandardAdminPanelP2 amt="20,000 - 60,000" addr="5,874" /> */}
          <ModalPOPUPLanpad amt="20,000 - 60,000" addr="5,874" />
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}
