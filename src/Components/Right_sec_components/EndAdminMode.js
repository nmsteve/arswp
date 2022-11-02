import React from "react";

export default function LiveAdminMode(props) {
  return (
    <>
      <div className="app10_contain2 fl-right">
        {/* section1 */}
        <div className="app10_section_heading_middle">
          Admin Panel
          <hr />
        </div>
        <div className="contain2_section1 clear">
          <div className="contain2_section1_sub1 fl-left ">{props.cap}</div>
          <div className="contain2_section1_sub2_end fl-right">Ended</div>
        </div>
        {/* section 2 */}

        <div className="contain2_section2_sub1 fl-left">
          <img src="/img/ARB_formla.png" alt="" srcset="" />
        </div>
        <div className="contain2_section2_sub2 mgtp2 fl-left">{props.amt}</div>
        <div className="clear"></div>

        <div className="contain2_section3_bar fl-left">
          <div className="contain2_section3_sub1_sm1 pg30 fl-left">
            {props.barlow}
          </div>
          <div className="contain2_section3_sub2_sm2 pg30 fl-right">
            {props.barhigh}
          </div>
          <div className="box3 clear">
            <div class="w3-light-grey">
              <div class="w3-container w3-hei w3-green w3-center_right">
                {props.per}
              </div>
            </div>
            <br />
          </div>
        </div>

        <div className="app10_contain2_section1 clear">
          <div className="app10_contain2_section1_inner_a fl-left">
            {props.contri}
          </div>
          <div className="app10_contain2_section1_inner_b fl-right">
            {props.addr}
          </div>
          <div className="app10_hr_pad clear">
            <hr />
          </div>
        </div>
        <div className="clear"></div>
        <div className="contain3_section clear">
          <div className="contain3_section_middle">
            <button>Finalize Sale</button>
          </div>
        </div>
      </div>
    </>
  );
}
