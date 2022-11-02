import React from "react";
import { Link } from "react-router-dom";

export default function AirdropperAirdropsBox(props) {
  let per = props.percent;
  return (
    <Link to="/live/boxpage1">
      <>
        <div className="Airdropven_In_box ">
          <div class="box_1 clear">
            <div class="img_top_right fl-left">
              <img src={props.coinimg} alt="" />
            </div>

            <div class="img_top_right_title fl-right">
              <p>{props.cointitle}</p>

              <div class="img_top_right_button airdrop_mg_4  clear">
                <div class="img_bottom_right_title top_back">
                  <span>{props.subtitle1}</span>
                  <span>{props.subtitle2}</span>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>

          <div className="box2 clear">
            <div className="middle-title-left fl-left">Amount</div>
            <div className="middle-title-right fl-right">
              {" "}
              <img src={props.coinsublogo} alt="" className="rip" />{" "}
              {props.amout}
            </div>
          </div>
          <div className="box3 clear">
            <div className="middle-title-left_ti fl-left">Remaining</div>
            <div className="middle-title-right_ti fl-right">
              {props.remaining}
            </div>
          </div>
          <div className="box3 clear">
            <div class="w3-light-grey">
              <div
                class="w3-container w3-green w3-center"
                style={{ width: per }}
              >
                {props.percent}
              </div>
            </div>
            <br />
          </div>

          <div className="box4 clear">
            <div className="middle-title-left_ti fl-left">Selected Addr.</div>
            <div className="middle-title-right_ti fl-right">Participants</div>
          </div>
          <div className="box5 clear">
            <div className="middle-title-left_bi fl-left">
              <span>{props.selectaddr}</span>
            </div>
            <div className="middle-title-right_bi fl-right">
              {props.participant}
            </div>
          </div>
        </div>
      </>
    </Link>
  );
}
