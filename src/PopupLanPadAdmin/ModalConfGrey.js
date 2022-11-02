import React from "react";
// import "./modalstyle.css";

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal_new">
        <button onClick={onClose} className="btn-close1_new">
          close <img src="/img/close-circle.png" alt="" />
        </button>

        {/* set */}
        <>
          <div className="container_app7 ">
            <div></div>
            {/* app7_contain_section */}
            <div className=" app7_contain_section_new  model-content">
              {/* section1 */}
              <div className="app7_contain_section_block_1 clear">
                <div className="app7_join_pool_new fl-left ">
                  Manage Address
                </div>
                <div className="app7_close fl-right ">
                  {/* <a href="javascript:void(0)" onClick={onClose}>
                    close <img src="/img/close-circle.png" alt="" />
                  </a> */}
                </div>
              </div>
              {/* section2 */}
              <div className="block_section_3_bg admin_wit  clear">
                <div className="fl-left tet_dec contain1_block_section_3">
                  <a href="#">Add Users</a>
                </div>
                <div className="fl-left tet_dec contain2_block_section_3">
                  <a href="#">Remove Users</a>
                </div>
              </div>

              {/* section3 */}
              <div class="Airdropinfo_right_title_block_1_note_grey form_mb_2 form_app6 fl-left clear">
                <img src="/img/adminno.png" alt="" />
                Insert addresses to be whitelisted in format noted in the box
                below.
              </div>
              <div className="app7_contain_section_block_3 clear">
                <div className="app7_amount_new air_app10_mgtp_10 fl-left ">
                  Enter Addresses <span>*</span>{" "}
                  <img src="/img/Ques.png" alt="" />
                </div>
              </div>
              <div className="textarea_des">
                <textarea id="w3review" name="w3review" rows="6" cols="50">
                  Seperate address with line breaks. E.g :
                  0x425f6f6e4d1d5e43eebb551d3806715c2c082954
                  0xda365c6cf74996b9ab726967c8c945792d7c2721
                  0x210452d6d46be37d1f2aec10e85894b923271bf9
                </textarea>
              </div>
              <div className="app7_contain_section_block_3_new clear">
                <div className="address_found air_app10_mgtp_10  ">
                  <span>3</span> addresses found
                </div>
              </div>
            </div>
            <div className="app7_contain_bottom_section clear ">
              <div className="app7_contain_bottom_section_middle_confgrey">
                <button>Confirm</button>
              </div>
            </div>
          </div>
        </>
        {/* set */}
      </div>
    </div>
  );
};

export default Modal;
