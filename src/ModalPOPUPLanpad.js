import React from "react";
// import Modal from "./PopupcomLanPad/Modal";
import Modal from "./PopupLanPadAdmin/Model2ConfGrey";

export default function App(props) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="container contai text-center">
      {/* <Head /> */}
      <>
        <div className="app10_contain2 fl-right">
          {/* section1 */}
          <div className="app10_section_heading_middle">
            Admin Panel
            <hr />
          </div>
          <div className="contain2_section1 clear">
            <div className="contain2_section1_sub1 fl-left ">Soft/Hard Cap</div>
            <div className="contain2_section1_sub2_adminmode fl-right">
              Upcoming
            </div>
          </div>
          {/* section 2 */}

          <div className="contain2_section2_sub1 fl-left">
            <img src="/img/ARB_formla.png" alt="" srcset="" />
          </div>
          <div className="contain2_section2_sub2 mgtp2 fl-left">
            {props.amt}
          </div>
          <div className="clear"></div>
          <br />
          <div className="app10_contain2_section1 clear">
            <div className="app10_contain2_section1_inner_a fl-left">
              Address Whitelisted
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
            <div className="app9_contain3_section_middle_done">
              <button onClick={() => setShow(true)}>Manage Address</button>
            </div>
          </div>
        </div>
      </>

      <Modal show={show} onClose={() => setShow(false)}></Modal>
    </div>
  );
}
