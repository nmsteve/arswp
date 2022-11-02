import React from "react";
import Aside from "../Components/Aside";
import TopNavAllTwo from "../Components/Topnavbar_section/TopNavAllTwo";

import Topnavicon_admin_mode from "../Components/Topnavbar_section/Topnavicon_admin_mode";

import EndAdminMode from "../Components/Right_sec_components/EndAdminMode";
import LiveEditOffStandardAdminModeMiddleP3 from "../Components/Middle_contain_sec/LiveEditOffStandardAdminModeMiddleP3";
import FundraisedClaim from "../Components/Right_sec_components/FundraisedClaim";

import ModalPOPUPLanpad from "../ModalPOPUPLanpad";
import BlurEndAdminMode from "../Components/Right_sec_components/BlurEndAdminMode";
import BlurFundraisedClaim from "../Components/Right_sec_components/BlurFundraisedClaim";
import POPUPFundraisedClaim from "../Components/Right_sec_components/POPUPFundraisedClaim";

export default function StandardP3() {
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

        <LiveEditOffStandardAdminModeMiddleP3
          coinlogo="/img/RIP_logo (1).png"
          coinname="Swipe Coin"
          subtitle1="Payment"
          subtitle2="Web3"
          editon="/img/edit-2.png"
          addr="Presale Address"
          addrcont="0xc197......42bbde"
          addrimg="/img/copy.png"
          pri="Presale Price"
          priimg="/img/RIP_admin.png"
          pricont="2"
          saleon="Presale Starts on"
          saleontime="9:30 (UTC) "
          saleondate="2022-09-04"
          saleend="Presale Ends on"
          saleendtime="10:30 (UTC) "
          saleenddate="2022-09-05"
          cap1="Soft Cap"
          cap1img="/img/RIP_admin.png"
          cap1amt="2,000"
          cap2="Hard Cap"
          cap2img="/img/RIP_admin.png"
          cap2amt="10,000"
          token="Tokens For Presale"
          tokenamt="5,000 SXP"
          unsold="Unsold Token"
          unsoldcont="Burn"
          listed="To be Listed on"
          listedimg="/img/RIP_admin.png"
          listencont="Arborswap"
          liq="Tokens For Liquidity"
          liqamt="3,000 SXP"
          liqper="Tokens For Liquidity (%)"
          liqperct="70%"
          lockup="Liquidity Lockup Time (Days)"
          lockupdays="300"
        />

        {/* content2 */}

        <div className="contain-right fl-right">
          <BlurEndAdminMode
            cap="Soft/Hard Cap"
            amt="2,000 - 10,000"
            barlow="2,500 RBA"
            barhigh="10,000 RBA"
            contri="Contributors"
            addr="1,041"
            per="25%"
          />

          <div className="clear"></div>
          <BlurFundraisedClaim
            cap="Fundraised"
            amt="5,000"
            subamt="($14,582)"
          />

          <div className="clear"></div>

          <POPUPFundraisedClaim cap="Locked Liquidity" amt="14,774,566" />
        </div>
      </div>
    </div>
  );
}
