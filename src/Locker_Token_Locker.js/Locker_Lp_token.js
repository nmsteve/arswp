import { React, useState } from "react";
import Modal from "../ModalLocker";
import { Spinner } from "react-bootstrap";

import { fetchTokenDetails } from "../connect/dataProccing";

function SignUpInfo({ formData, setFormData }) {

  const [isProcessing, setIsProcessing] = useState(false)
  const [tokenDetails, setTokenDetails] = useState({})

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
                    value={formData.address}
                    onInput={async (event) => {
                      setFormData({ ...formData, address: event.target.value })
                      console.log(formData.address.length)
                      setIsProcessing(true)
                      if (formData.address.length === 42) {
                        const details = await fetchTokenDetails(formData.address)
                        console.log(details)
                        setTokenDetails(details)
                        setIsProcessing(false)
                      }
                    }

                    }
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
                <input type="text" placeholder="14,774,566" />
              </div>
              <div className="page1_section_form_part2 fl-right">SXP</div>
            </div>

            {/* <div className="page1_section_form_add fl-right ">
              <button>Add</button>
            </div> */}
            <Modal />
          </div>

          <div className="Airdropinfo_right_title_block_1 locker_mt_3 fl-left">
            <p>
              Unlock Date <span>*</span> <img src="/img/Ques.png" alt="" />{" "}
            </p>
          </div>
          <form action="#">
            <input
              type="datetime-local"
              id="birthdaytime_locker"
              name="birthdaytime"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpInfo;
