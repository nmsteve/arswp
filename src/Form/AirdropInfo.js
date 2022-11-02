import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    // <div className="sign-up-container">
    //   <input
    //     type="text"
    //     placeholder="Email..."
    //     value={formData.email}
    //     onChange={(event) =>
    //       setFormData({ ...formData, email: event.target.value })
    //     }
    //   />
    //   <input
    //     type="text"
    //     placeholder="Password..."
    //     value={formData.password}
    //     onChange={(event) =>
    //       setFormData({ ...formData, password: event.target.value })
    //     }
    //   />
    //   <input
    //     type="text"
    //     placeholder="Confirm Password..."
    //     value={formData.confirmPassword}
    //     onChange={(event) =>
    //       setFormData({ ...formData, confirmPassword: event.target.value })
    //     }
    //   />
    // </div>

    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="" className="active_form">
            {" "}
            <span class="dot_green"></span> Airdrop Info
          </a>
          <a href="">Project Details</a>
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
          <div className="block_section_ clear">
            <div className="Airdropinfo_right_title_block_1 fl-left">
              <p>
                Amount to be airdropped <span>*</span>{" "}
              </p>
            </div>
            <div className="page1_section_form_no_amt fl-left ">
              <div className="page1_section_form_part1 fl-left">
                <input type="text" placeholder="14,774,566" />
              </div>
              <div className="page1_section_form_part2 fl-right">SXP</div>
            </div>
            <div className="page1_section_form_add fl-right ">
              <button>Add</button>
            </div>
          </div>
          {/* <div className="button_form_section clear fl-right">
            <button>Next</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default SignUpInfo;
