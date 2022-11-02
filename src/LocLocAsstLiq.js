import React from "react";
import Aside from "./Components/Aside";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
import Locker_sec_right from "./Components/Topnavbar_section/Locker_sec_right";
import Slider from "./Components/Slider";
import MyLocks from "./Components/MyLocks";
import Sort_by from "./Components/Sort_by";
import Search_sec from "./Components/Search_sec";
import Token_liqd from "./Components/Token_liqd";
import Icon_both from "./Components/Icon_both";
import GUSD from "./Components/Box_section/LockerLockedAssets";
import LocLocAsstLiqBox from "./Components/Box_section/LocLocAsstLiqBox";

export default function LocLocAsstLiq() {
  return (
    <>
      <Aside />

      <div className="form-block">
        <TopNavAllThree
          breadimg="/img/lockerlogotop.png"
          title="Locker"
          subtitle="Locked assets"
          mainpara="Lock your assets for proof of lock."
        />

        <Locker_sec_right />
        <div className="clear"> </div>
        {/* content1 slider */}
        <Slider />

        {/* content1 slider */}
        <div className="clear"></div>

        {/* content */}
        <div className="fl-container">
          <Icon_both />
          <div className="outer_box_1 fl-left">
            <Token_liqd />
          </div>
          <div className="outer_box_2 fl-left ">
            <MyLocks />
          </div>

          <Sort_by />
          <div className="outer_box_4 fl-right">
            <Search_sec />
          </div>
        </div>

        <div className="outer_box">
          {/* box1 */}
          <LocLocAsstLiqBox
            logoimg="/img/Locker_assets1.png"
            coinname="GUSD/RBA"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
            days="10"
            months="04"
          />

          {/* box2 */}

          <LocLocAsstLiqBox
            logoimg="/img/Locker_assets2.png"
            coinname="SXP/RBA"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
            days="29"
            months="118"
          />

          {/* box3 */}
          <LocLocAsstLiqBox
            logoimg="/img/Locker_assets3.png"
            coinname="HUSD/RIP"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
            days="10"
            months="04"
          />
          {/* box4 */}
          <LocLocAsstLiqBox
            logoimg="/img/Locker_assets4.png"
            coinname="WBNB/SLR"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
            days="10"
            months="04"
          />
          {/* box5 */}
          <LocLocAsstLiqBox
            logoimg="/img/Locker_assets5.png"
            coinname="WBNB/WAXP"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
            days="29"
            months="118"
          />
          {/* box6 */}
          <LocLocAsstLiqBox
            logoimg="/img/Locker_assets6.png"
            coinname="XSG/SLR"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
            days="10"
            months="04"
          />
        </div>
      </div>
    </>
  );
}
