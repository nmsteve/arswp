import { React, useState } from "react";
import Modal from "../ModalLocker";
import { Spinner } from "react-bootstrap";
import moment from 'moment/moment'

import { fetchTokenDetails } from "../connect/dataProccing";

function TokenDetails({
  formData, setFormData,
  tokenAddressError, setTokenAddressError,
  tokenAmountError, setAmountError,
  unlockDateError, setUnlockDateError
}) {

  const [isProcessing, setIsProcessing] = useState(false)
  const [tokenDetails, setTokenDetails] = useState({})


  const displayTokenDetails = async (event) => {
    console.log(event.target.value.length)
    try {

      if (event.target.value.length != 42) {
        setTokenAddressError('Invalid data')
      }
      else if (event.target.value === "0x0000000000000000000000000000000000000000") {
        setTokenAddressError('invalid Address')
        console.log("invalid Address")
      }
      else {
        setTokenAddressError('')
        setIsProcessing(true)

        const details = await fetchTokenDetails(event.target.value)

        if (details) {
          console.log(details.name, details.symbol, details.supply)
          setTokenDetails(details)

          setFormData({
            ...formData, address: event.target.value, name: details.name, symbol: details.symbol,
            decimals: details.decimals, supply: details.supply
          })
          setIsProcessing(false)
        } else {
          setTokenAddressError('incorrect Address')
          setIsProcessing(false)

        }


      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const captureAmount = async (event) => {
    const amount = event.target.value
    if (amount > 0) {
      setAmountError('')
      setFormData({ ...formData, amount: amount })

    } else {
      setAmountError('Amount less than zero')

    }


  }
  const captureDate = async (event) => {
    const unlockTimestamp = Date.parse(event.target.value)
    const diff = unlockTimestamp - Date.now()
    if (diff < 0) {
      setUnlockDateError('Unlock date less than current.')
    } else {
      setUnlockDateError('')

      const duration = moment.duration(diff, "millisecond") //.asDays()).toFixed()
      const daysDuration = duration.asDays().toFixed()
      const secsDuration = (diff / 1000).toFixed()

      console.log('Duration', daysDuration)

      console.log(unlockTimestamp)
      setFormData({ ...formData, unlockdate: event.target.value, unlockTimestamp: unlockTimestamp, lockPeriod: daysDuration, duration: secsDuration })
    }
  }

  return (
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="" className="active_form">
            {" "}
            <span class="dot_green"></span>Lock details
          </a>

          <a href="">Preview</a>

        </div>
        <div className="block_section_1_airdrop_form">
          <div className="right-block">
            <div className="contain_block_1_form fl-left">
              <div class="Airdropinfo_right_title_block_1 form_app6 fl-left">
                <p>
                  Token Address <span>*</span>{" "}
                </p>

                <div class="inputarea_top_rightform_block_1 clear ">
                  <input
                    type="text"
                    placeholder="Address"
                    onChange={displayTokenDetails}

                  />

                  {isProcessing
                    ? <>
                      <div class="spinner-border text-primary mt-2" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      {' '}Processing...
                    </>
                    : ""
                  }

                  <p id="tokenAddressError" className="fs-6 mt-1 text-danger">{tokenAddressError}</p>

                </div>
              </div>
            </div>
          </div>

          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">
                Token address Details
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Name</div>
              <div className="inner_section_4_b fl-right">{tokenDetails.name}</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Symbol</div>
              <div className="inner_section_4_b fl-right">{tokenDetails.symbol}</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Decimals</div>
              <div className="inner_section_4_b fl-right">{tokenDetails.decimals}</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>

            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Total supply</div>
              <div className="inner_section_4_b fl-right">{tokenDetails.supply}</div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>

            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">More Details</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          <div className="block_section_ clear">
            <div className="Airdropinfo_right_title_block_1 fl-left">
              <p>
                Amount to be locked <span>*</span>{" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </p>
            </div>
            <div className="page1_section_form_no_amt fl-left ">
              <div className="page1_section_form_part1 fl-left">
                <input
                  id="amount"
                  type="text"
                  placeholder="14,774,566"
                  onChange={captureAmount}
                />
              </div>
              <div className="page1_section_form_part2 fl-right">{tokenDetails.symbol}</div>
              <p id="tokenAddressError" className="fs-6 mt-1 text-danger">{tokenAmountError}</p>
            </div>
            {/* <Modal /> */}
          </div>
          <div className="mt-5"></div>
          <div className="Airdropinfo_right_title_block_1 locker_mt_3 fl-left ">
            <p>
              Unlock Date <span>*</span> <img src="/img/Ques.png" alt="" />{" "}
            </p>
          </div>
          <input
            type="datetime-local"
            id="unLockDate"
            name="birthdaytime"
            onChange={captureDate}
          />
          <p id="unlockDateError" className="fs-6 mt-1 text-danger">{unlockDateError}</p>
          <div>

          </div>
        </div>
      </div>
    </>
  );


}

export default TokenDetails;
