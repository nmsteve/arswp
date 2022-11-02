import React from "react";

export default function LockedAssetsMiddleSec(props) {
  return (
    <>
      <div className="contain fl-left">
        <div className="block_section_1">
          <div className="contain_block_1 fl-left">
            <div className="img_top_right_block_1 fl-left">
              <img src={props.coinlogo} alt="" />
            </div>
            <div class="L_app4_right_title_block_1 fl-left">
              <p>{props.coinname}</p>

              {props.subtitle1}
            </div>
          </div>
          <div className="contain_block_1 block-right fl-right">
            <img src={props.rightlogo3} alt="" srcset="" />
          </div>
        </div>

        <div className="block_section_4 clear">
          <div className="section_set_1">
            <div className="Locker_mid_inner_section_4_a">Lock Details</div>
          </div>

          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">LP Locked</div>
            <div className="inner_section_4_b fl-right">14,774,566</div>
          </div>

          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Amount in ($)</div>
            <div className="inner_section_4_b fl-right"> 474,080,454</div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Locked By</div>
            <div className="inner_section_4_b fl-right">
              0xc197......42hode
              <img src="/img/copy.png" alt="" />{" "}
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>

          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Unlock Date</div>
            <div className="inner_section_4_b fl-right">
              {" "}
              9:30 (UTC) <span>2022-09-04</span>
            </div>
          </div>
          <div className="clear app10_hr_pad">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="Locker_mid_inner_section_4_a">LP Details</div>
          </div>

          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Quote Pair</div>
            <div className="inner_section_4_b fl-right">
              {" "}
              <img src="/img/RIP (1).png" alt="" /> WBNB
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Base pair</div>
            <div className="inner_section_4_b fl-right">
              <img src="/img/SXP_logo.png" alt="" /> SXP
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Symbol</div>
            <div className="inner_section_4_b fl-right">WBNB/SXP</div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">LP supply</div>
            <div className="inner_section_4_b fl-right">79,014,470</div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Dex Listed</div>
            <div className="inner_section_4_b fl-right">
              <img src="/img/RIP.png" alt="" />
              Arborswap
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
