import React from "react";

export default function AirdropArborMiddleSec(props) {
  return (
    <>
      <div className="contain fl-left">
        <div className="block_section_1">
          <div className="contain_block_1 fl-left">
            <div className="img_top_right_block_1 fl-left">
              <img src={props.coinlogo} alt="" />
            </div>
            <div class="L_app4_right_title_block_1 air_app4 fl-left">
              <p>{props.coinname}</p>
              <div class="img_top_right_button_block_1 clear">
                <div class="img_bottom_right_title_block_1 top_back">
                  <span> {props.subtitle1}</span>
                  <span>{props.subtitle2}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contain_block_1 block-right fl-right">
            <img src={props.rightlogo1} alt="" srcset="" />
            <img src={props.rightlogo2} alt="" srcset="" />
            <img src={props.rightlogo3} alt="" srcset="" />
          </div>
        </div>
        <div className="block_section_2 block_middle-2 clear">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus magna fringilla
            urna, porttitor.
          </p>
        </div>

        <div className="block_section_4 clear">
          <div className="section_set_1">
            <div className="Locker_mid_inner_section_4_a">Token Details</div>
          </div>

          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Token Address</div>
            <div className="inner_section_4_b fl-right">
              0xc197......42bbde <img src="/img/copy.png" alt="" />
            </div>
          </div>

          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Name</div>
            <div className="inner_section_4_b fl-right"> Swipe Token</div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Symbol</div>
            <div className="inner_section_4_b fl-right">SXP</div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>

          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Total supply</div>
            <div className="inner_section_4_b fl-right">200,000,000 SXP</div>
          </div>
          <div className="clear app10_hr_pad">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="Locker_mid_inner_section_4_a">Airdrop Details</div>
          </div>

          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Airdrop Address</div>
            <div className="inner_section_4_b fl-right">
              0xc197......42hode <img src="/img/copy.png" alt="" />
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Start On</div>
            <div className="inner_section_4_b fl-right">
              9:30 (UTC) <span>2022-09-04</span>
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Ends On</div>
            <div className="inner_section_4_b fl-right">
              10:30 (UTC) <span>2022-09-05</span>
            </div>
          </div>

          <div className="clear hr_inner">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
