import React from "react";
import Modal from "../ModalLocker";

export default function Locker_Lp_locker({ formData, setFormData }) {
  return (
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="" className="active_form">
            {" "}
            <span class="dot_green"></span> Lock details
          </a>

          <a href="">Preview</a>
        </div>
        <div className="block_section_1_airdrop_form">
          <div className="right-block">
            <div className="contain_block_1_form fl-left">
              <div class="Airdropinfo_right_title_block_1 form_app6 fl-left">
                <p>
                  Token Address <span>*</span>{" "}
                </p>

                <div class="inputarea_top_rightform_block_1 clear">
                  <input
                    type="text"
                    placeholder="Address"
                    value={formData.password}
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">LP Details</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Quote Pair</div>
              <div className="inner_section_4_b pd_6_img fl-right">
                {" "}
                <img src="/img/RIP (1).png" alt="" /> WBNB
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Base pair</div>
              <div className="inner_section_4_b pd_6_img fl-right">
                {" "}
                <img src="/img/SXP_logo.png" alt="" /> SXP
              </div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Symbol</div>
              <div className="inner_section_4_b fl-right">WBNB/SXP</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>

            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">LP supply</div>
              <div className="inner_section_4_b fl-right">9,014,470</div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Dex Listed</div>
              <div className="inner_section_4_b pd_6_img fl-right">
                <img src="/img/RIP.png" alt="" />
                Arborswap
              </div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">More Details</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          <div className="block_section_ clear">
            <div className="Airdropinfo_right_title_block_1 fl-left">
              <p>
                Amount to be locked <span>*</span>{" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </p>
            </div>
            <div className="page1_section_form_no_amt fl-left ">
              <div className="page1_section_form_part1 fl-left">
                {" "}
                <input type="text" placeholder="14,774,566" />
              </div>
              <div className="page1_section_form_part2 fl-right">WBNB/SXP</div>
            </div>

            {/* <div className="page1_section_form_add fl-right ">
              <button>Add</button>
              <ModalPOPUPLOCKER />
            </div> */}
            <Modal />
          </div>

          <div className="Airdropinfo_right_title_block_1 locker_mt_3 fl-left">
            <p>
              Unlock Date <span>*</span> <img src="/img/Ques.png" alt="" />{" "}
            </p>
          </div>
          <form action="#">
            <input
              type="datetime-local"
              id="birthdaytime_locker"
              name="birthdaytime"
            />
          </form>
        </div>
      </div>
    </>
  );
}
