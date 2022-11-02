import React from "react";
import Modal from "./PopUpLocker/Modal";

export default function ModalPOPUPLOCKER(props) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="page1_section_form_add fl-right ">
      <>
        <button onClick={() => setShow(true)}>Add</button>
      </>
      <Modal show={show} onClose={() => setShow(false)}></Modal>
    </div>
  );
}
