import React from "react";

export default function UserPanel1(props) {
  return (
    <>
      <div className="app10_contain2 fl-right">
        {/* section1 */}
        <div className="app10_section_heading_middle">
          User Panel
          <hr />
        </div>

        <div className="app10_contain2_section1 clear">
          <div className="app10_contain2_section1_inner_a fl-left">
            Amount Allocated
          </div>
          <div className="app10_contain2_section1_inner_b fl-right">
            {props.addr}
          </div>
          <div className="app10_hr_pad clear">
            <hr />
          </div>
          <div className="app10_contain2_section1_inner_a fl-left">
            Amount Bought
          </div>
          <div className="app10_contain2_section1_inner_b fl-right">
            {props.brgt}
          </div>
          <div className="app10_hr_pad clear">
            <hr />
          </div>
          <div className="clear"></div>
          <div className="app10_contain2_section1_inner_a_userpanel">
            Available to Claim
          </div>
          <div className="clear"></div>
          <div className="contain2_section2_sub1_img fl-left">
            <img src="/img/SXP_logo.png" alt="" srcset="" />{" "}
            <span>{props.logoamt}</span>
          </div>
        </div>
        <div className="clear"></div>
        <div class="contain2_section4 clear">
          <div class="app5_contain2_section4_middle_join">
            <button>Claim</button>
          </div>
        </div>
      </div>
    </>
  );
}
