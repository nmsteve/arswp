import React from "react";

export default function MiddleSectionRedThreelogo(props) {
  return (
    <>
      <div className="contain fl-left">
        <div className="block_section_1">
          <div className="contain_block_1 fl-left">
            <div className="img_top_right_block_1 fl-left">
              <img src={props.coinlogo} alt="" />
            </div>
            <div class="img_top_right_title_block_1 fl-right">
              <p>{props.coinname}</p>

              <span class="inner_img_top_right_button_block_1 fl-right">
                {props.private}
              </span>

              <div class="img_top_right_button_block_1 clear">
                <div class="img_bottom_right_title_block_1 top_back">
                  <span>{props.subtitle1}</span>
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
        <div className="block_section_3_bg clear">
          <div className="fl-left tet_dec contain1_block_section_3">
            <a href="#">Presale</a>
          </div>
          <div className="fl-left tet_dec contain2_block_section_3">
            <a href="#">Token</a>
          </div>
        </div>

        <div className="block_section_4 clear">
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Presale Starts on</div>
            <div className="inner_section_4_b fl-right">
              9:30 (UTC) <span>2022-09-04</span>
            </div>
          </div>

          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Presale Ends on</div>
            <div className="inner_section_4_b fl-right">
              {" "}
              10:30 (UTC) <span>2022-09-05</span>
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Soft Cap</div>
            <div className="inner_section_4_b fl-right">240,000 RBA</div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Tokens on Sale</div>
            <div className="inner_section_4_b fl-right">4,000,000 SXP</div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">To be Listed on</div>
            <div className="inner_section_4_b fl-right">
              {" "}
              <img src="/img/PancakeSwap (CAKE).png" alt="" /> Pancakeswap
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">Presale Address</div>
            <div className="inner_section_4_b fl-right">
              0xc197......42bbde <img src="/img/copy.png" alt="" />{" "}
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
