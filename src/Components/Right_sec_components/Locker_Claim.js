import React from "react";

export default function Locker_Claim() {
  return (
    <>
      <div className="Locker_admin_contain2 fl-right">
        <div className="contain2_section1 clear">
          <div className="contain2_section1_sub1 mg-bt-2 fl-left ">Amount</div>
        </div>
        {/* section1 */}
        <div className="contain2_section2 clear">
          <div className="contain2_section2_sub1 fl-left">
            <img src="/img/locker_admin_logo.png" alt="" srcset="" />
          </div>
          <div className="contain2_section2_sub2 fl-left">14,774,566</div>
        </div>

        <div className="contain2_section4 clear">
          <div className="app5_contain2_section4_middle_join mg-5">
            <button>Claim</button>
          </div>
        </div>
        {/* section 4 */}
        <div className="contain2_section5 clear">
          <div className="contain_section5_middle">Unlocks In</div>
          <div className="contain_section5_timer_day fl-left">
            24 <br /> <span>Days</span>
          </div>
          <div className="contain_section5_timer_dot">:</div>
          <div className="contain_section5_timer_day fl-right">
            06
            <br /> <span>Hours</span>
          </div>
          <div className="contain_section5_timer_dot">:</div>
          <div className="contain_section5_timer_day fl-left">
            47
            <br /> <span>Mins</span>
            <br /> <span></span>
          </div>
          <div className="contain_section5_timer_dot">:</div>
          <div className="contain_section5_timer_day fl-left">
            53
            <br /> <span>Secs</span>
          </div>
        </div>
      </div>
    </>
  );
}
