import React, { useEffect, useState } from "react";
import TokenType from "./TokenType"
import TokenDetails from "./Locker_Lp_token";
import Preview from "./Preview";

import { lock } from "../connect/dataProccing";

function Form() {
  const [isProccessing, setIsProcessing] = useState(false)
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
    tokenType: "",
  });

  const FormTitles = ["TokenType", "TokenDetails", "Preview"];

  const PageDisplay = () => {
    if (page === 0) {
      return <TokenType formData={formData} setFormData={setFormData} page={page} setPage={setPage} />
    }
    else if (page === 1) {
      return <TokenDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Preview formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header"></div>

        <div className="body">{PageDisplay()}</div>

        {page === 0 ? "" :
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
                  lock(setIsProcessing, formData)

                } else {

                  setPage((currPage) => currPage + 1);
                  console.log(formData);
                }
              }}
            >
              {isProccessing ?
                <>
                  <div class="spinner-border text-primary mt-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  {' '}Processing...
                </>
                :
                page === FormTitles.length - 1 ? "Lock" : "Next"}
            </button>

          </div>}

      </div>
    </div>
  );

}

export default Form;
