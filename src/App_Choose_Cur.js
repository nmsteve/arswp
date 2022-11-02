import React from "react";

export default function App_Dex() {
  return (
    <>
      <form className="form_are">
        <p className="Airdropinfo_right_title_block_1">
          Choose Currency <span>*</span>
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
            <img src="/img/Binance Coin (BNB)_formla.png" alt="" />
            <span className="cur_name">BNB</span>

            <span className="cur_logo_nm ">Binance</span>
          </label>
          <br />
        </div>
        <div class="label fl-right ">
          <input
            type="radio"
            className="fl-right"
            id="html"
            name="Presale"
            value="HTML"
          />
           {" "}
          <label for="html" className="fl-left">
            <img src="/img/ARB_formla.png" alt="" />
            <span className="cur_name">Rba</span>
            <span className="cur_logo_nm ">Roburna</span>
          </label>
          <br />
        </div>
        <div class="label fl-left">
          <input
            type="radio"
            className="fl-right"
            id="Standard"
            name="Presale"
            value="Standard"
          />
           {" "}
          <label for="html" className="fl-left">
            <img src="/img/GUSD_formla.png" alt="" />
            <span className="cur_name">GUSD</span>
            <span className="cur_logo_nm ">Gnosis</span>
          </label>
          <br />
        </div>

        <div class="label fl-right">
          <input
            type="radio"
            className="fl-right"
            id="html"
            name="Presale"
            value="HTML"
          />

          <label for="html" className="fl-left">
            <img src="/img/Tether (USDT)_formla.png" alt="" />
            <span className="cur_name">USDT</span>
            <span className="cur_logo_nm ">Tether</span>
          </label>
          <br />
        </div>
      </form>
    </>
  );
}
