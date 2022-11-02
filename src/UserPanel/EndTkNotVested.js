import React from "react";
import Aside from "../Components/Aside";

import TopNavAllTwo from "../Components/Topnavbar_section/TopNavAllTwo";

import Topnavicon2 from "../Components/Topnavbar_section/Topnavicon2";
import FairlaunchAdminModeMiddleP1 from "../Components/Middle_contain_sec/FairlaunchAdminModeMiddleP1";

import ModalPOPUP from "../ModalPOPUP";
import UserPanel1 from "../Components/Right_sec_components/UserPanel1";

import Rightsec_btn_ended from "../Components/Right_sec_components/Rightsec_btn_ended";
import UserPanel2 from "../Components/Right_sec_components/UserPanel2";
import UserPanel3 from "../Components/Right_sec_components/UserPanel3";

export default function EndTkNotVested() {
  return (
    <div>
      <Aside />
      {/* content1 */}

      {/*  */}
      <div className="form-block sec_2_header">
        <TopNavAllTwo title="Pools" subtitle="Swipe Coin" />

        <Topnavicon2 />

        <div className="clear mar-22"></div>
        {/* content1  */}
        <FairlaunchAdminModeMiddleP1
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
          cap2="Soft  Cap"
          cap2img="/img/RIP_admin.png"
          cap2amt="10,000"
          token="Tokens For Presale"
          tokenamt="110,000,000 Sxp"
          unsold="Unsold Token"
          unsoldcont="Burn"
          listed="To be Listed on"
          listedimg="/img/RIP_admin.png"
          listencont="Arborswap"
          liq="Tokens For Liquidity"
          liqamt="75,000,000 Sxp"
          liqper="Tokens For Liquidity (%)"
          liqperct="70%"
          lockup="Liquidity Lockup Time (Days)"
          lockupdays="300"
        />

        {/* content2 */}
        <div className="contain-right fl-right">
          <Rightsec_btn_ended />

          <UserPanel3 addr="5,000 RBA" brgt="411,285 SXP" logoamt="411,285" />
        </div>
      </div>

      <div className="clear"></div>
    </div>
  );
}
