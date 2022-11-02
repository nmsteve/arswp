import React from "react";

export default function Arbor_project(props) {
  return (
    <>
      <div className="L_app1_In_box">
        <div class="box_1 clear">
          <div class="img_top_right fl-left">
            <img src={props.logoimg} alt="" />
          </div>

          <div class="L_App1_img_top_right_title  fl-right">
            <p>{props.coinname}</p>
            <div class="L_App1_img_top_right clear">
              <div class="L_App1_img_bottom_right top_back">
                <span>{props.subtitle}</span>
              </div>
            </div>
          </div>

          <div className="L_App1_view_left fl-right">
            <span>View</span>
            <a href="#">
              <img src="/img/arrow-left.png" alt="" />
            </a>
          </div>
        </div>
        <div className="L_app10_hr">
          <hr />
        </div>

        <div className="box2 L_app1_pd_10  clear">
          <div className="middle-title-left fl-left">Amount</div>
          <div className="middle-title-right fl-right"> {props.amount}</div>
        </div>

        <div className="box3 L_app1_pd_10 clear">
          <div className="L_App1_middle-title-left fl-left">Amount ($)</div>
          <div className="L_App1_middle-title-right fl-right">
            {" "}
            {props.amoutdollar}
          </div>
        </div>
        <div className="box4 L_app1_pd_10  clear">
          <div className="middle-title-left fl-left">Unlock date</div>
          <div className="middle-title-right fl-right"> {props.unlockdate}</div>
        </div>

        <div className="L_app1_box6  clear">
          <div className="L_app1_bottom-title-left_bi fl-left">Unlocks In</div>
          <div className="contain_section5_timer_day_gusd  mg-lt-2_gusd fl-left">
            10 <br /> <span>Days</span>
          </div>
          <div className="contain_section5_timer_dot_gusd">:</div>
          <div className=" contain_section5_timer_day_gusd   mg-rt-2_gusd fl-right">
            04
            <br /> <span>Months</span>
          </div>
        </div>
      </div>
    </>
  );
}
