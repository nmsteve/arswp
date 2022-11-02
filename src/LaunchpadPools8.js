import React from "react";
import { useState } from "react";

export default function LaunchpadPools8() {
  // const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }
  return (
    <>
      <div className="container_app7 ">
        <div></div>
        {/* app7_contain_section */}
        <div className=" app7_contain_section  model-content">
          {/* section1 */}
          <div className="app7_contain_section_block_1 clear">
            <div className="app7_join_pool fl-left ">Join Pool</div>
            <div className="app7_close fl-right ">
              <a href="#">
                close <img src="/img/close-circle.png" alt="" />
              </a>
            </div>
          </div>
          {/* section2 */}
          <div className="app7_contain_section_block_2 clear">
            <div className="app7_from fl-left ">From</div>
            <div className="app7_RBA fl-right ">
              <img src="/img/RIP.png" alt="" /> RBA
            </div>
          </div>
          {/* section3 */}
          <div className="app7_contain_section_block_3 clear">
            <div className="app7_amount fl-left ">Amount</div>
            <div className="app7_balance fl-right ">Balance: 140,114</div>
          </div>
          {/* section4 */}
          <div className="appy7_contain_section_block_4 clear">
            <div className="app7_num fl-left ">138,147</div>
            <div className="app7_half fl-right ">Half</div>
            <div className="clear"></div>
            {/* <div className="app7_hr_rotate90 fl-left">
        <hr />
      </div> */}
            <div className="app7_num2 fl-left ">~ $108,070</div>
            <div className="app7_max fl-right ">MAX</div>
          </div>

          <div className="app7_contain_middle_translogo clear">
            <img src="/img/Switch.png" alt="" />
          </div>
          {/* section2 b*/}
          <div className="app7_contain_section_block_2 clear">
            <div className="app7_from fl-left ">You’ll get</div>
            <div className="app7_RBA app7_logo_hei fl-right ">
              <img src="/img/RIP_logo (1).png" alt="" /> SXP
            </div>
          </div>
          {/* section3 b */}
          <div className="app7_contain_section_block_3 clear">
            <div className="app7_amount fl-left ">Amount</div>
          </div>
          {/* section4 */}
          <div className="appy7_contain_section_block_4 clear">
            <div className="app7_num fl-left ">18,070</div>
            <div className="app7_dolend fl-right ">~ $---</div>
          </div>
        </div>
        <div className="app7_contain_bottom_section clear ">
          <div className="app7_contain_bottom_section_middle">
            <button>Claim</button>
          </div>
        </div>
      </div>
    </>

    // <>
    //   <button onClick={toggleModal} className="btn-modal">
    //     Open
    //   </button>
    //   {modal && (
    //     <div className="modal">
    //       <div onClick={toggleModal} className="overlay"></div>
    //       <div className="modal-content">
    //         <h2>Hello Modal</h2>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
    //           perferendis suscipit officia recusandae, eveniet quaerat assumenda
    //           id fugit, dignissimos maxime non natus placeat illo iusto!
    //           Sapiente dolorum id maiores dolores? Illum pariatur possimus
    //           quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
    //           placeat tempora vitae enim incidunt porro fuga ea.
    //         </p>
    //         <button className="close-modal" onClick={toggleModal}>
    //           CLOSE
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
}
