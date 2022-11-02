import React from "react";

export default function App_choose_cur() {
  return (
    <>
      <form>
        <p className="Airdropinfo_right_title_block_1">
          Choose DEX to be listed on <span>*</span>
        </p>
        <div class="label fl-left clear">
          <input
            type="radio"
            className="fl-right"
            id="Standard"
            name="Presale"
            value="Standard"
          />
           {" "}
          <label for="html" className="fl-left">
            <img src="/img/RIP.png" alt="" />
            <span className="cur_name">Arborswap</span>
          </label>
          <br />
        </div>
        <div class="label fl-left ">
          <input
            type="radio"
            className="fl-right"
            id="html"
            name="Presale"
            value="HTML"
          />
           {" "}
          <label for="html" className="fl-left">
            <img src="/img/PancakeSwap (CAKE).png" alt="" />
            <span className="cur_name">Pancakeswap</span>
          </label>
          <br />
        </div>
      </form>
    </>
  );
}
