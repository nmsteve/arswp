import React from "react";
import styles from "./modalstyle.css";
import "./modalstyle.css";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal">
        <button onClick={onClose} className="btn-close">
          close <img src="/img/close-circle.png" alt="" />
        </button>

        {/* set */}
        <>
          <div className="container_app7">
            <div className="app7_contain_section">
              {/* section1 */}
              <div className="app7_contain_section_block_1 clear">
                <div className="app7_join_pool fl-left ">Add to Locker</div>
                <div className="app7_close fl-right ">
                  {/* <a href="#">
                    close <img src="/img/close-circle.png" alt="" />
                  </a> */}
                </div>
              </div>

              <div className="section_locker_token padtop_padbot clear">
                <div className="section_locker_token_part_1 fl-left">
                  Amount
                </div>
                <div className="section_locker_token_part_2 fl-right">
                  Total: 758,546
                </div>
              </div>
              <div className="page1_section_form_locker_token clear ">
                <div className="page1_section_form_part1 fl-left">504,558</div>
                <div className="page1_section_form_part2 fl-right">~ $---</div>
                <div className="page1_section_form_part3 clear">
                  <div className="page1_section1_form_percen loker_token_per_bg1 fl-left">
                    25%
                  </div>
                  <div className="page1_section1_form_percen loker_token_per_bg1 fl-left">
                    50%
                  </div>
                  <div className="page1_section1_form_percen loker_token_per_bg1 fl-left">
                    75%
                  </div>
                  <div className="page1_section1_form_percen loker_token_per_bg2 fl-right">
                    Max
                  </div>
                </div>
              </div>
            </div>

            <div className="app7_contain_bottom_section clear ">
              <div className="app7_contain_bottom_section_middle">
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
