import React from "react";

export default function PrivateAdminModeRightP1(props) {
  return (
    <>
      <div className="contain2">
        <div className="contain2_section1 clear">
          <div className="contain2_section1_sub1 fl-left ">{props.capname}</div>
          <div className="contain2_section1_sub2_adminmode fl-right">
            Upcoming
          </div>
        </div>

        {/* section1 */}
        <div className="contain2_section2 clear">
          <div className="contain2_section2_sub1 fl-left">
            <img src="/img/ARB_formla.png" alt="" srcset="" />
          </div>
          <div className="contain2_section2_sub2 mgtp2 fl-left">
            {props.amt}
          </div>
        </div>
        {/* section 2 */}
        <div className="contain2_section3 clear">
          <div className="contain2_section3_sub1 pg30 fl-left">
            {props.minall}
          </div>
          <div className="contain2_section3_sub2 pg30 fl-right">
            {props.minallamt}
          </div>
          <div className="clear"></div>
          <div className="contain2_section3_sub1 pg20 fl-left">
            {props.maxall}
          </div>
          <div className="contain2_section3_sub2 pg20 fl-right">
            {props.maxallamt}
          </div>
          <div className="clear"></div>
          <div className="contain2_section3_sub1_sm1 pg30 fl-left">
            {props.barlow}
          </div>
          <div className="contain2_section3_sub2_sm2 pg30 fl-right">
            {props.barhigh}
          </div>
          <div className="contain2_section3_bar fl-left">
            <div className="box3 clear">
              <div class="w3-light-grey">
                <div class="w3-container_0 w3-hei w3-green w3-center_right">
                  {props.per}
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="contain2_section4 clear">
          <div className="contain3_section_middle_done">
            <button>Join Sale</button>
          </div>
        </div>
        {/* section 4 */}
        <div className="contain2_section5 clear">
          <div className="contain_section5_middle">Sale Starts In</div>
          <div className="contain_section5_timer_day fl-left">
            00 <br /> <span>Days</span>
          </div>
          <div className="contain_section5_timer_dot">:</div>
          <div className="contain_section5_timer_day fl-right">
            04
            <br /> <span>Hours</span>
          </div>
          <div className="contain_section5_timer_dot">:</div>
          <div className="contain_section5_timer_day fl-left">
            21
            <br /> <span>Mins</span>
            <br /> <span></span>
          </div>
          <div className="contain_section5_timer_dot">:</div>
          <div className="contain_section5_timer_day fl-left">
            38
            <br /> <span>Secs</span>
          </div>
        </div>
      </div>
    </>
  );
}
