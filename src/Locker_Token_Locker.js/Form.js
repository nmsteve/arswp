import React, { useEffect, useState } from "react";
import TokenType from "./TokenType"
import TokenDetails from "./Locker_Lp_token";
import Preview from "./Preview";

import { lock } from "../connect/dataProccing";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    supply: "",
    decimals: "",
    address: "",
    amount: "",
    unlockdate: "",
    unlockTimestamp: "",
    lockPeriod: "",
    TokenType: "",
  });



  const FormTitles = ["TokenType", "TokenDetails", "Preview"];

  const PageDisplay = () => {
    if (page === 0) {
      return <TokenDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <Preview formData={formData} setFormData={setFormData} />;
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
                lock(formData)
              } else {
                setPage((currPage) => currPage + 1);
                console.log(formData);
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
