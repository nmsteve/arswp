import React from "react";
import moment from 'moment/moment'

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
              <div className="inner_section_4_a fl-left">Type</div>
              <div className="inner_section_4_b fl-right">{formData.tokenType}</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Name</div>
              <div className="inner_section_4_b fl-right">{formData.name}</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Symbol</div>
              <div className="inner_section_4_b fl-right">{formData.symbol}</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Decimals</div>
              <div className="inner_section_4_b fl-right">{formData.decimals}</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>

            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Total supply</div>
              <div className="inner_section_4_b fl-right">{formData.supply}{" "}{formData.symbol}</div>
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
                {formData.amount}{" "} {formData.symbol}
              </div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">
                Lock Period (Days)
              </div>
              <div className="inner_section_4_b fl-right">{(formData.lockPeriod)}</div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Unlock Date</div>
              <div className="inner_section_4_b fl-right">{moment(formData.unlockdate).format('llll')}</div>
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
