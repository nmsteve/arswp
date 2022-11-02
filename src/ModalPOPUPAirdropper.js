import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

import Modal from "./PopupcomAirdropper/ModalStart";

export default function App({ onClose }) {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="app9_contain2 fl-right">
        <div className="contain3_section_heading clear">
          Admin Panel
          <hr />
        </div>
        <div className="contain3_section_inner_block app9_pdtp_10 clear">
          <div className="contain3_section_subpart1 pd-20px fl-left">
            Address Whitelisted
          </div>
          <div className="contain3_section_subpart2 pd-20px fl-right">105</div>
          <hr />
        </div>

        <div className="contain3_section clear">
          <div className="app9_contain3_section_middle_done air_drop_mar_9">
            <button>Add Address</button>
          </div>
          <div className="airapp8_contain3_section_middle_done">
            <button onClick={() => setShow(true)}>Start Airdrop</button>
          </div>
        </div>
      </div>
      <Modal show={show} onClose={() => setShow(false)}></Modal>
    </>
  );
}
