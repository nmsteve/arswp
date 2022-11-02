import React from "react";
import { Link } from "react-router-dom";

export default function LaunchpadPoolsBox(props) {
  return (
    <>
      <div className="In_box">
        <div class="box_1 clear">
          <div class="img_top_right fl-left">
            <img src={props.coinlogo} alt="" />
          </div>

          <div class="img_top_right_title fl-right">
            <p>{props.coinname}</p>

            <span class="inner_img_top_right_button">Private</span>

            <div class="img_top_right_button clear">
              <div class="img_bottom_right_title top_back">
                <span>{props.subtitle1}</span>
                <span>{props.subtitle2}</span>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>

        <div className="box2 clear">
          <div className="middle-title-left fl-left">Soft/Hard Cap</div>
          <div className="middle-title-right fl-right">
            {" "}
            <img src={props.capimg} alt="" className="rip" /> {props.capamt}
          </div>
        </div>
        <div className="box3 clear">
          <div className="middle-title-left_ti fl-left">{props.midtitle1}</div>
          <div className="middle-title-right_ti fl-right">
            {props.midtitle2}
          </div>
        </div>
        <div className="box3 clear">
          <div class="w3-light-grey">
            <div class="w3-container w3-green w3-center">{props.percent}%</div>
          </div>
          <br />
        </div>

        <div className="box4 clear">
          <div className="middle-title-left_ti fl-left">Liquidity %</div>
          <div className="middle-title-right_ti fl-right">Lockup Period</div>
        </div>
        <div className="box5 clear">
          <div className="middle-title-left_bi fl-left">
            <span>70</span> of 100
          </div>
          <div className="middle-title-right_bi fl-right">{props.nodays}</div>
        </div>
        <div className="box6 clear">
          <div className="bottom-title-left_bi fl-left">Ends in</div>
          <div className="bottom-title-right_bi fl-right">
            02h : 45Min : 40s
          </div>
        </div>
      </div>
    </>
  );
}
