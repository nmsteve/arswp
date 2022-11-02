import React from "react";

export default function LiveEditOffPrivateAdminModeMiddleP3(props) {
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
            <div className="app10_edit">
              <img src="/img/edit-2_bl.png" alt="" srcset="" />
              Edit
            </div>
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
            <div className="inner_section_4_a fl-left">{props.addr}</div>
            <div className="inner_section_4_b fl-right">
              {props.addrcont} <img src={props.addrimg} alt="" />{" "}
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>

          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">{props.saleon}</div>
            <div className="inner_section_4_b fl-right">
              {props.saleontime}
              <span>{props.saleondate}</span>
            </div>
          </div>

          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">{props.saleend}</div>
            <div className="inner_section_4_b fl-right">
              {" "}
              {props.saleendtime}
              <span>{props.saleenddate}</span>
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">{props.cap1}</div>
            <div className="inner_section_4_b fl-right">
              <img src={props.cap1img} className="mrbt6" alt="" />{" "}
              {props.cap1amt}
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>

          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">{props.cap2}</div>
            <div className="inner_section_4_b fl-right">
              <img src={props.cap2img} className="mrbt6" alt="" />{" "}
              {props.cap2amt}
            </div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>

          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">{props.liqper}</div>
            <div className="inner_section_4_b fl-right">{props.liqperct}</div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
          <div className="section_set_1">
            <div className="inner_section_4_a fl-left">{props.lockup}</div>
            <div className="inner_section_4_b fl-right">{props.lockupdays}</div>
          </div>
          <div className="clear hr_inner">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
