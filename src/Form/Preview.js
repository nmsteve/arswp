import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    // <div className="other-info-container">
    //   <input
    //     type="text"
    //     placeholder="Nationality..."
    //     value={formData.nationality}
    //     onChange={(e) => {
    //       setFormData({ ...formData, nationality: e.target.value });
    //     }}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Other..."
    //     value={formData.other}
    //     onChange={(e) => {
    //       setFormData({ ...formData, other: e.target.value });
    //     }}
    //   />
    // </div>
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="">
            <span class="dot_grey"></span> Airdrop Info
          </a>
          <a href="">
            <span class="dot_grey"></span> Project Details
          </a>
          <a href="" className="active_form">
            <span class="dot_green"></span> Preview
          </a>
        </div>
        <div className="block_section_1_airdrop_form">
          <div className="right-block">
            <div className="contain_block_1 fl-left">
              <div className="img_top_right_block_1 fl-left">
                <img src="/img/RIP_logo (1).png" alt="" />
              </div>
              <div class="L_app4_right_title_block_1 air_app4 fl-left">
                <p>Swipe Token</p>
                <div class="img_top_right_button_block_1 clear">
                  <div class="img_bottom_right_title_block_1 top_back">
                    <span>Payment</span>
                    <span>Web3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">
                Token address Details
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Name</div>
              <div className="inner_section_4_b fl-right">Swipe Token</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Symbol</div>
              <div className="inner_section_4_b fl-right"> SXP</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Decimals</div>
              <div className="inner_section_4_b fl-right">18</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>

            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Total supply</div>
              <div className="inner_section_4_b fl-right">200,000,000 SXP</div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>
          </div>
          <div className="section_set_1">
            <div className="Locker_mid_inner_section_4_a">Airdrop Details</div>
          </div>

          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">
              Amount to be airdropped
            </div>
            <div className="inner_section_4_b fl-right">14,774,566</div>
          </div>
          <div className="clear app10_hr_pad">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherInfo;
