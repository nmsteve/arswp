import React from "react";
import Aside from "./Components/Aside";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
import Locker_sec_right from "./Components/Topnavbar_section/Locker_sec_right";
import Slider from "./Components/Slider";
import MyLocks from "./Components/MyLocks";
import Sort_by from "./Components/Sort_by";
import Search_sec from "./Components/Search_sec";

import Token_liqd from "./Components/Token_liqd2";
import IconBoth2 from "./Components/IconBoth1";
import GUSD from "./Components/Box_section/LockerLockedAssets";
import Box_section from "./Components/Box_section/Box_section";
import { Link } from "react-router-dom";

export default function L_App2() {
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
        <div className="clear"></div>
        {/* content1 slider */}
        <Slider />

        {/* content1 slider */}
        <div className="clear"></div>

        {/* content */}
        <div className="fl-container">
          {/* <Icon_bot /> */}
          <IconBoth2 />
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
          <Link to="/Locker3/LockerHome3pages">
            <Box_section
              coinimg="/img/GUSD.png"
              coinname="GUSD"
              coinsubname="Gnosis-USD"
              amount="1,000,454"
              date="2022-09-08"
            />
          </Link>

          <Link to="/Locker3/LockerHome3pages">
            <Box_section
              coinimg="/img/Solana (SOL).png"
              coinname="SOL"
              coinsubname="Solana"
              amount="1,000,454"
              date="2022-09-08"
            />
          </Link>

          <Link to="/Locker3/LockerHome3pages">
            <Box_section
              coinimg="/img/ARB.png"
              coinname="RBAOL"
              coinsubname="Roburna"
              amount="1,000,454"
              date="2022-09-08"
            />
          </Link>

          <Link to="/Locker3/LockerHome3pages">
            <Box_section
              coinimg="/img/waxp-logo.png"
              coinname="WAXP"
              coinsubname="Wax Chain"
              amount="1,000,454"
              date="2022-09-08"
            />
          </Link>

          <Link to="/Locker3/LockerHome3pages">
            <Box_section
              coinimg="/img/HUSD.png"
              coinname="HUSD"
              coinsubname="HUSD"
              amount="1,000,454"
              date="2022-09-08"
            />
          </Link>

          <Link to="/Locker3/LockerHome3pages">
            <Box_section
              coinimg="/img/Voyager Token (VGX) (3).png"
              coinname="VGX"
              coinsubname="Voyager"
              amount="1,000,454"
              date="2022-09-08"
            />
          </Link>

          <Link to="/Locker3/LockerHome3pages">
            <Box_section
              coinimg="/img/Binance Coin (BNB).png"
              coinname="WBNB"
              coinsubname="Wrapped BNB"
              amount="1,000,454"
              date="2022-09-08"
            />
          </Link>

          <Link to="/Locker3/LockerHome3pages">
            <Box_section
              coinimg="/img/Solarcoin (Slr).png"
              coinname="SLR"
              coinsubname="Solaris"
              amount="1,000,454"
              date="2022-09-08"
            />
          </Link>

          <Link to="/Locker3/LockerHome3pages">
            <Box_section
              coinimg="/img/panswap.png"
              coinname="CAKE"
              coinsubname="Pancake"
              amount="1,000,454"
              date="2022-09-08"
            />
          </Link>

          <Link to="/Locker3/LockerHome3pages">
            <Box_section
              coinimg="/img/SXP.png"
              coinname="SXP"
              coinsubname="Swipe"
              amount="1,000,454"
              date="2022-09-08"
            />
          </Link>

          {/* <Box_section /> */}
        </div>
      </div>
    </>
  );
}
