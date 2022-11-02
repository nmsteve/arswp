import React from "react";

export default function Launchpad_create_sale(props) {
  return (
    <>
      <div className="setting_icon_mob_1 fl-left">
        <img src="/img/Settings.png" alt="" />
      </div>
      <div className="top-nav">
        <ul className="breadcrumb">
          <li className="breadcrumb_mobile_ver">
            <img src={props.breadimg} alt="" />
          </li>
          <li className="tit_resp_ver"> {props.title}</li>

          <li className="line_moble_ver_img">
            {" "}
            <img src="/img/Line 2.png" alt="" srcset="" />{" "}
          </li>
          <li>
            <a href="#" className="active">
              {props.subtitle}
            </a>
          </li>
        </ul>
        <p>{props.mainpara}</p>
      </div>
      <div className="setting_icon_mob_1 fl-right">
        <img src="/img/newwallet.png" alt="" />
      </div>
    </>
  );
}
