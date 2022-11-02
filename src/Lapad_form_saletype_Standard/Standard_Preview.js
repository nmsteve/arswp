import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="">
            <span class="dot_grey"></span> Token Info
          </a>
          <a href="">
            {" "}
            <span class="dot_grey"></span> Presale
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

          {/* -------------Presale details------------ */}
          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">
                Presale Details
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Presale Rate</div>
              <div className="inner_section_4_b fl-right">200 SXP = 1 RBA</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Soft Cap</div>
              <div className="inner_section_4_b fl-right"> 200</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Hard Cap</div>
              <div className="inner_section_4_b fl-right">1000</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>

            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">
                Minimum Allocation
              </div>
              <div className="inner_section_4_b fl-right">10 RBA</div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">
                Maximum Allocation
              </div>
              <div className="inner_section_4_b fl-right">100 RBA</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Amount to be sold</div>
              <div className="inner_section_4_b fl-right">100,000,000 SXP</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Sale Type</div>
              <div className="inner_section_4_b fl-right">
                Whitelist Enabled
              </div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          {/* -------------Listing Details------------ */}
          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">
                Listing Details
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">To be listed on</div>
              <div className="inner_section_4_b fl-right">
                {" "}
                <img src="/img/RIP.png" alt="" /> Arborswap
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">
                Amount to be used for liquidity
              </div>
              <div className="inner_section_4_b fl-right"> 70%</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Listing rate</div>
              <div className="inner_section_4_b fl-right">300 SXP = 1 RBA</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          {/* -------------Time Details------------ */}
          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">Time Details</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Starts On</div>
              <div className="inner_section_4_b fl-right">
                09:30 <span>2022-09-04</span>{" "}
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Ends On</div>
              <div className="inner_section_4_b fl-right">
                {" "}
                10:30 <span>2022-09-04</span>
              </div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          {/* -------------More details------------ */}
          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">More Details</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Unsold Tokens</div>
              <div className="inner_section_4_b fl-right">Burn</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Liquidity Lockup</div>
              <div className="inner_section_4_b fl-right"> 300 Days</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherInfo;
