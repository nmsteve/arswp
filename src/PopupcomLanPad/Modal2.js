import React from "react";
import styles from "./modalstyle.css";
import "./modalstyle.css";

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal">
        <button onClick={onClose} className="btn-close1">
          close <img src="/img/close-circle.png" alt="" />
        </button>

        {/* set */}
        <>
          <div className="container_app7 ">
            <div></div>
            {/* app7_contain_section */}
            <div className=" app7_contain_section  model-content">
              {/* section1 */}
              <div className="app7_contain_section_block_1 clear">
                <div className="app7_join_pool fl-left ">Finalize Sale</div>
                <div className="app7_close fl-right ">
                  {/* <a href="javascript:void(0)" onClick={onClose}>
                    close <img src="/img/close-circle.png" alt="" />
                  </a> */}
                </div>
              </div>
              {/* section2 */}
              <div className="app10_contain2_section1 mgtp_md_16  clear">
                <div className="app10_contain2_section1_inner_a fl-left">
                  Unsold Tokens
                </div>
                <div className="app10_contain2_section1_inner_b fl-right">
                  0
                </div>
                <div className="app10_hr_pad clear">
                  <hr />
                </div>
              </div>

              {/* section3 */}
              <div className="app7_contain_section_block_3 clear">
                <div className="app7_amount air_app10_mgtp_10 fl-left ">
                  Listing Time (UTC) <span>*</span>{" "}
                  <img src="/img/Ques.png" alt="" />
                </div>
              </div>
              <form action="#">
                <input
                  type="datetime-local"
                  id="birthdaytime"
                  name="birthdaytime"
                />
              </form>
            </div>
            <div className="app7_contain_bottom_section clear ">
              <div className="app7_contain_bottom_section_middle">
                <button>Claim</button>
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
