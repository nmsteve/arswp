import React, { useEffect, useState } from "react";
import SignUpInfo from "./Locker_Lp_token";
import OtherInfo from "./Preview";


function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    tokentype: "",
    address: "",
    amount: "",
    unlockdate: "",
    distription: "",
  });



  const FormTitles = ["OtherInfo", "Sign Up"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header"></div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer1">
          <button
            className="go_next"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            <img src="/img/Arrow - Right.png" alt="" />
            Go back
          </button>
          <button
            className="footer"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Lock" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
