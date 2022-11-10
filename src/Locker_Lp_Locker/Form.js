import React, { useState } from "react";
import TokenDetails from "./TokenDetails";
import Preview from "./Preview";

import { lock, approve } from "../connect/dataProccing";

function Form() {
  const [isProccessing, setIsProcessing] = useState(false)
  const [page, setPage] = useState(1);
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
    tokenType: "LP",
  });

  //Error handling
  const [tokenAddressError, setTokenAddressError] = useState('')
  const [tokenAmountError, setAmountError] = useState('')
  const [unlockDateError, setUnlockDateError] = useState('')

  const validateData = () => {
    if (formData.address === "") {
      alert("Enter token address")
    } else if (formData.amount === "") {
      alert("Enter token amount")
    } else if (formData.unlockdate === "") {
      alert("please enter the unlock date")
    }
    else if (tokenAddressError === '' && tokenAddressError === '' && unlockDateError === '') {
      setPage((currPage) => currPage + 1);
      console.log(formData)
    } else {
      alert('Please correct error in your input')
    }
  }

  const PageDisplay = () => {

    if (page === 1) {
      return <TokenDetails formData={formData} setFormData={setFormData}
        tokenAddressError={tokenAddressError} setTokenAddressError={setTokenAddressError}
        tokenAmountError={tokenAmountError} setAmountError={setAmountError}
        unlockDateError={unlockDateError} setUnlockDateError={setUnlockDateError} />;
    } else if (page === 2) {
      return <Preview formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
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
            disabled={page === 1}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            <img src="/img/Arrow - Right.png" alt="" />
            Go back
          </button>

          <button
            className="footer"
            onClick={async () => {

              if (page === 1) {
                validateData()

              }
              else if (page === 2) {
                console.log(formData);
                await approve(setIsProcessing, formData, setPage)

              }
              else if (page === 3) {
                console.log(formData)
                await lock(setIsProcessing, formData, setPage)
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
              page === 1 ? "Next" : page === 2 ? "Approve" : page === 3 ? "Lock" : ""}
          </button>

        </div>

      </div>
    </div>
  );

}

export default Form;
