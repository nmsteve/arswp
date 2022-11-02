import React from "react";
import Aside from "../Components/Aside";
import TopNavAllTwo from "../Components/Topnavbar_section/TopNavAllTwo";

import Topnavicon_admin_mode from "../Components/Topnavbar_section/Topnavicon_admin_mode";
import AdminModeRightP1 from "../Components/Right_sec_components/StandardAdminModeRightP1";
import AdminModeP1 from "../Components/Middle_contain_sec/StandardAdminModeMiddleP1";
import StandardAdminPanelP2 from "../Components/Right_sec_components/StandardAdminPanelP2";
import EditStandardAdminModeMiddleP2 from "../Components/Middle_contain_sec/EditStandardAdminModeMiddleP2";

export default function StandardP2() {
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

        <EditStandardAdminModeMiddleP2
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
          <StandardAdminPanelP2 amt="2,000 - 10,000" addr="1,874" />
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}
