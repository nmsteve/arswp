import React from "react";
import Percent_blur from "../Percent_blur";

export default function Airdrop_arbor_new_blur() {
  return (
    <>
      <div className="Airdropven_In_box">
        <div class="box_1 clear">
          <div class="img_top_right fl-left">
            <img src="/img/AirdropRIP.png" alt="" />
          </div>

          <div class="img_top_right_title fl-right">
            <p>Arborswap</p>

            <div class="img_top_right_button airdrop_mg_4  clear">
              <div class="img_bottom_right_title top_back">
                <span>DEFI</span>
                <span>DEX</span>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>

        <div className="box2 clear">
          <div className="middle-title-left fl-left">Amount</div>
          <div className="middle-title-right fl-right">
            {" "}
            <img src="/img/RIP (1).png" alt="" className="rip" /> 240,000
          </div>
        </div>
        <div className="box3 clear">
          <div className="middle-title-left_ti fl-left">Remaining</div>
          <div className="middle-title-right_ti fl-right">60,000 VNS</div>
        </div>
        <Percent_blur />

        <div className="box4 clear">
          <div className="middle-title-left_ti fl-left">Selected Addr.</div>
          <div className="middle-title-right_ti fl-right">Participants</div>
        </div>
        <div className="box5 clear">
          <div className="middle-title-left_bi fl-left">
            <span>6,000</span>
          </div>
          <div className="middle-title-right_bi fl-right">0</div>
        </div>
      </div>
    </>
  );
}
