import React from "react";
import Aside from "../Components/Aside";

import TopNavAllTwo from "../Components/Topnavbar_section/TopNavAllTwo";

import Topnavicon2 from "../Components/Topnavbar_section/Topnavicon2";
import PrivateAdminModeMiddleP1 from "../Components/Middle_contain_sec/PrivateAdminModeMiddleP1";
import ModalPOPUP from "../ModalPOPUP";

import UserPanel2 from "../Components/Right_sec_components/UserPanel2";
import UserPanel3 from "../Components/Right_sec_components/UserPanel3";

import Rightsec_btn_ended from "../Components/Right_sec_components/Rightsec_btn_ended";
import UserPanel4 from "../Components/Right_sec_components/UserPanel4";

export default function EndTkVested() {
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
          <Rightsec_btn_ended />
          <div className="clear"></div>

          {/* <UserPanel3  addr="5,000 RBA" brgt="411,285 SXP" logoamt="164,514" /> */}
          <UserPanel4
            addr="5,000 RBA"
            brgt="411,285 SXP"
            logoamt="164,514"
            vested="411,285 SXP"
          />
        </div>
      </div>

      <div className="clear"></div>
    </div>
  );
}
