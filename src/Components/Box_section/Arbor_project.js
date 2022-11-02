import React from "react";

export default function Arbor_project() {
  return (
    <>
      <div className="In_box">
        <div class="box_1 clear">
          <div class="img_top_right fl-left">
            <img src="/img/RIP_logo (1).png" alt="" />
          </div>

          <div class="img_top_right_title fl-right">
            <p>Arbor Project</p>

            <span class="inner_img_top_right_button">Private</span>

            <div class="img_top_right_button clear">
              <div class="img_bottom_right_title top_back">
                <span>Payment</span>
                <span>Web3</span>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>

        <div className="box2 clear">
          <div className="middle-title-left fl-left">Soft/Hard Cap</div>
          <div className="middle-title-right fl-right">
            {" "}
            <img src="/img/RIP.png" alt="" className="rip" /> 240,000
          </div>
        </div>
        <div className="box3 clear">
          <div className="middle-title-left_ti fl-left">120,000 RBA</div>
          <div className="middle-title-right_ti fl-right">240,000 RBA</div>
        </div>
        <div className="box3 clear">
          <div class="w3-light-grey">
            <div class="w3-container w3-green w3-center">25%</div>
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
          <div className="middle-title-right_bi fl-right">140 Days</div>
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
