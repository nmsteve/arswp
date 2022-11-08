import Aside from "./Components/Aside";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



import React from "react";

export default function LockerLockerAsset5() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <TopNavAllThree
            breadimg="/img/lockerlogotop.png"
            title="Locker"
            subtitle="Token Locker"
            mainpara="Lock your assets for proof of lock."
          />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}

        </div>                                                                                                                                                                                                                                                                                                   v>

        <div className="clear"></div>
      </div>
    </>
  );
}
