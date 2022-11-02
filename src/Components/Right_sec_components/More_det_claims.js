import React from "react";

export default function More_det_claims() {
  return (
    <>
      <div className="contain2">
        <div className="contain3_section_heading clear">
          More Details
          <hr />
        </div>
        <div className="contain3_section_inner_block clear">
          <div className="contain3_section_subpart1 pd-20px fl-left">
            Amount Allocated
          </div>
          <div className="contain3_section_subpart2 pd-20px fl-right">
            5,000 RBA
          </div>
          <hr />
        </div>
        <div className="contain3_section_inner_block clear">
          <div className="contain3_section_subpart1 pd-20px fl-left">
            Amount Recieved
          </div>
          <div className="contain3_section_subpart2 pd-20px fl-right">
            411,285 SXP
          </div>
          <hr />
        </div>
        <div className="contain3_section_inner_block clear">
          <div className="contain3_section_subpart1 pd-20px fl-left">
            Claimable Now
          </div>
          <div className="contain3_section_subpart2 pd-20px fl-right">
            4,285 SXP
          </div>
          <hr />
        </div>
        <div className="contain3_section clear">
          <div className="contain3_section_middle">
            <button>Claim</button>
          </div>
        </div>
      </div>
    </>
  );
}
