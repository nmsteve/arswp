import React from "react";
import Aside from "../Components/Aside";
import TopNavAllTwo from "../Components/Topnavbar_section/TopNavAllTwo";

import Topnavicon_admin_mode from "../Components/Topnavbar_section/Topnavicon_admin_mode";
import EditFairlaunchAdminModeMiddleP2 from "../Components/Middle_contain_sec/EditFairlaunchAdminModeMiddleP2";
import LiveEditOffFairlaunchAdminModeMiddleP3 from "../Components/Middle_contain_sec/LiveEditOffFairlaunchAdminModeMiddleP3";
import LiveAdminMode from "../Components/Right_sec_components/LiveAdminMode";

export default function FairlaunchP3() {
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
        <LiveEditOffFairlaunchAdminModeMiddleP3
          coinlogo="/img/RIP_logo (1).png"
          coinname="Swipe Coin"
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
          <LiveAdminMode
            cap="Soft Cap"
            amt="10,000"
            barlow="2,500 RBA"
            barhigh="10,000 RBA"
            contri="Contributors"
            addr="1,041"
            per="25%"
          />
        </div>
      </div>
    </div>
  );
}
