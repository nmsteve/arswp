import React from "react";
import { Link } from "react-router-dom";

export default function Live_endon_time() {
  return (
    <>
      <div>
        <div className="inner_box3 fl-left" id="inn_box3">
          {" "}
          <Link to="/LaunchpadPool/pools/Live">Live</Link>{" "}
        </div>
        <div className="inner_box2 fl-left" id="inn_box2">
          {" "}
          <Link to="/LaunchpadPool/pools/Ended">Ended</Link>{" "}
        </div>
        <div className="inner_box1 fl-left" id="inn_box1">
          <Link to="/LaunchpadPool/pools/Upcoming">Upcoming</Link>{" "}
        </div>
      </div>
    </>
  );
}
