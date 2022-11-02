import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="">
            {" "}
            <span class="dot_grey"></span> Token Info
          </a>
          <a href="">
            {" "}
            <span class="dot_grey"></span> Presale
          </a>
          <a href="" className="active_form">
            <span class="dot_green"></span> Project Details
          </a>
          <a href="">Preview</a>
        </div>
        <div className="block_section_1_airdrop_form">
          <div className="right-block">
            <div className="contain_block_1_form fl-left">
              <div class="Airdropinfo_right_title_block_1 form_app6 fl-left">
                <p>
                  Project Logo <span>*</span>{" "}
                </p>
              </div>
            </div>
            <div class="imgarea_top_rightform_block_1 clear">
              <div className="img_name_section1 fl-left">
                <img src="/img/EMpty Image Box (1).png" alt="" />
              </div>
              <div className="img_name_section2_newupdate fl-right">
                JPG,PNG or GIF 300 x 300 Size Recommended MAX 10MB
              </div>
              <div className="img_name_section3_newupdate fl-right">
                {" "}
                <img src="/img/export.png" alt="" /> Upload File
              </div>
            </div>
            {/* content2 */}
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left prodet_mg_tp_3">
              <p>
                Description{" "}
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputarea_top_rightform_block_1 clear">
                <input
                  type="text"
                  placeholder="Describe about your project"
                  value={formData.Description}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      Description: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            {/* content3 */}
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
              <p>
                Tags{" "}
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <input
                  type="text"
                  // placeholder="Describe about your project"
                  value="Payment,Web3."
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      Tags: event.target.value,
                    })
                  }
                />
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
          </div>
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
            <p>
              Website <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                value="https://bscscan.com/"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    Website: event.target.value,
                  })
                }
              />
              <img src="/img/Tel_logo.png" alt="" />
            </div>
          </div>
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
            <p>
              Twitter <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                value="https://bscscan.com/"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    Website: event.target.value,
                  })
                }
              />
              <img src="/img/Twit_logo.png" alt="" />
            </div>
          </div>
          {/* <div className="clear">
            <div className="button_form_section  fl-right">
              <button>Next</button>
            </div>
            <div className="fl-right go_next">
              <button>
                <img src="/img/Arrow - Right.png" alt="" />
                Go back
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
