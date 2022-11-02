import React from "react";
import { Link } from "react-router-dom";

export default function Liveon_end_time() {
  return (
    <>
      <div>
        <div className="inner_box1  fl-left" id="inn_box1">
          {" "}
          <Link to="/live">Live</Link>{" "}
        </div>
        <div className="inner_box2  fl-left" id="inn_box2">
          {" "}
          <Link to="/ended">Ended</Link>{" "}
        </div>
        <div className="inner_box3  fl-left" id="inn_box3">
          <Link to="/timed">Timed</Link>{" "}
        </div>
      </div>
    </>
  );
}
