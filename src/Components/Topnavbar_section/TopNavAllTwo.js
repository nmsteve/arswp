import React from "react";

export default function Poolswipe_nav_sec(props) {
  return (
    <>
      <div className="setting_icon_mob_2 fl-left">
        <img src="/img/Settings.png" alt="" />
      </div>
      <div className="top-nav">
        <ul className="breadcrumb">
          <li>{props.title}</li>
          <li>
            {" "}
            <img src="/img/Line 2.png" alt="" srcset="" />{" "}
          </li>
          <li>
            <a href="#" className="activ">
              {props.subtitle}
            </a>
          </li>
        </ul>
      </div>
      <div className="setting_icon_mob_2 fl-right">
        <img src="/img/newwallet.png" alt="" />
      </div>
    </>
  );
}
