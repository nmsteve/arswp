import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="" className="active_form">
            {" "}
            <span class="dot_grey"></span> Lock details
          </a>

          <a href="">
            {" "}
            <span class="dot_green"></span> Preview
          </a>
        </div>
        <div className="locker_preview_block_section_1_airdrop_form">
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
              <div className="inner_section_4_b fl-right"> Swipe Token</div>
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

            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">Lock Details</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">
                Amount to be locked
              </div>
              <div className="inner_section_4_b fl-right">
                14,774,566 WBNB/Sxp
              </div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">
                Lock Period (Days)
              </div>
              <div className="inner_section_4_b fl-right">365</div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Unlock Date</div>
              <div className="inner_section_4_b fl-right">2022-09-04</div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherInfo;
