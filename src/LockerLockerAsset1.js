import React from "react";
import Aside from "./Components/Aside";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
import Locker_sec_right from "./Components/Topnavbar_section/Locker_sec_right";
import Slider from "./Components/Slider";
import MyLocks from "./Components/MyLocks";
import Sort_by from "./Components/Sort_by";
import Search_sec from "./Components/Search_sec";
import Token_liqd from "./Components/Token_liqd2";
import IconBoth1 from "./Components/IconBoth2";
import GUSD from "./Components/Box_section/LockerLockedAssets";
export default function L_App1() {
  return (
    <>
      <Aside />

      <div className="form-block">
        <TopNavAllThree
          breadimg="/img/LaunchedIcon.png"
          title="Locker"
          subtitle="Locked assets"
          mainpara="Lock your assets for proof of lock."
        />

        <Locker_sec_right />
        <div className="clear"></div>
        {/* content1 slider */}
        <Slider />

        {/* content1 slider */}
        <div className="clear"></div>

        {/* content */}
        <div className="fl-container">
          {/* <Icon_both /> */}
          <IconBoth1 />
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
          <GUSD
            logoimg="/img/GUSD.png"
            coinname="GUSD"
            subtitle="Gnosis-USD"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
          />
          {/* box2 */}

          <GUSD
            logoimg="/img/GUSD.png"
            coinname="GUSD"
            subtitle="Gnosis-USD"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
          />
          {/* box3 */}
          <GUSD
            logoimg="/img/GUSD.png"
            coinname="GUSD"
            subtitle="Gnosis-USD"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
          />
          {/* box4 */}
          <GUSD
            logoimg="/img/GUSD.png"
            coinname="GUSD"
            subtitle="Gnosis-USD"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
          />
          {/* box5 */}
          <GUSD
            logoimg="/img/GUSD.png"
            coinname="GUSD"
            subtitle="Gnosis-USD"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
          />
          {/* box6 */}
          <GUSD
            logoimg="/img/GUSD.png"
            coinname="GUSD"
            subtitle="Gnosis-USD"
            amount="1,000,454"
            amoutdollar="474,080,454"
            unlockdate="2022-09-08"
          />
        </div>
      </div>
    </>
  );
}
