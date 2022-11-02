import React from "react";
import { Link } from "react-router-dom";

export default function Token_liqd() {
  return (
    <>
      <div>
        <div className="inner_box2 fl-left">
          {" "}
          <Link to="/locker">Token</Link>
        </div>
        <div className="inner_box1 liq_respon_ver fl-left">
          <Link to="/Lockertab">Liquidity</Link>
        </div>
      </div>
    </>
  );
}
