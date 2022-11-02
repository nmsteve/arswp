import React from "react";
import App_choose_Dex from "../App_choose_Dex";
import App_Choose_Cur from "../App_Choose_Cur";

export default function Presale() {
  return (
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="" className="active_form">
            {" "}
            <span class="dot_grey"></span> Token Info
          </a>
          <a href="">
            <span class="dot_green"></span> Presale
          </a>
          <a href="">Project Details</a>
          <a href="">Preview</a>
        </div>
        <div className="block_section_1_airdrop_form">
          <App_Choose_Cur />
          <div className="clear"></div>

          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">
                Presale Details
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
            <p>
              Amount to be sold <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                value="110,000,000"
              />
              {/* <img src="/img/Tel_logo.png" alt="" /> */}
              <span className="sp_val">SXP</span>
            </div>
          </div>
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
            <p>
              Soft Cap <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                value="200"
              />
              <img src="/img/RIP.png" alt="" />
            </div>
          </div>

          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">
                Listing Details
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
          </div>

          <div className="choose_curr">
            <App_choose_Dex />
          </div>

          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">Time Details</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          <div id="amt_lis">
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left w_42_per">
              <p>
                Starts On (UTC) <span>*</span>
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <form action="#">
                  <input
                    type="datetime-local"
                    id="birthdaytime_locker"
                    name="birthdaytime"
                  />
                </form>
              </div>
            </div>
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-right w_42_per">
              <p>
                Ends On (UTC) <span>*</span>
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <form action="#">
                  <input
                    type="datetime-local"
                    id="birthdaytime_locker"
                    name="birthdaytime"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">More Details</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          <div id="amt_lis">
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left w_42_per">
              <p>
                Unsold tokens aftermath <span>*</span>
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <input
                  type="text"
                  // placeholder="Describe about your project"
                  value="Burn"
                />
                <span className="sp_val">%</span>
              </div>
            </div>
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-right w_42_per">
              <p>
                Liquidity Lockup (days) <span>*</span>
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <input
                  type="text"
                  // placeholder="Describe about your project"
                  value="300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
