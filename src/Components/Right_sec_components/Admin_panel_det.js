import React from "react";

export default function Admin_panel_det() {
  return (
    <>
      <div className="app10_contain2 fl-right">
        {/* section1 */}
        <div className="app10_section_heading_middle">
          Admin Panel
          <hr />
        </div>
        <div className="app10_contain2_section1 clear">
          <div className="app10_contain2_section1_inner_a fl-left">
            Participants
          </div>
          <div className="app10_contain2_section1_inner_b fl-right">1,874</div>
          <div className="app10_hr_pad clear">
            <hr />
          </div>
        </div>
        {/* section 2 */}
        <div className="app10_contain2_section1 clear">
          <div className="app10_contain2_section1_inner_a fl-left">
            Contributions
          </div>
          <div className="app10_contain2_section1_inner_b fl-right">
            <img src="/img/RIP.png" alt="" />
            48,486
          </div>
          <div className="app10_hr_pad clear">
            <hr />
          </div>
        </div>
        {/* section 3 */}
        <div className="app10_contain2_section1 clear">
          <div className="app10_contain2_section1_inner_a fl-left">
            Tokens Remaining
          </div>
          <div className="app10_contain2_section1_inner_b fl-right">
            1,475,478
          </div>
          <div className="app10_hr_pad clear">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
