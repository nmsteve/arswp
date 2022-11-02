import React from "react";

export default function Launchpad_pool(props) {
  return (
    <>
      <div className="top-nav">
        <ul className="breadcrumb">
          <li>{props.title}</li>
          <li>
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
    </>
  );
}
