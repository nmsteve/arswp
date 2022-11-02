import React from "react";

export default function Topnavicon_admin_mode() {
  return (
    <>
      <div className="top-right-nav">
        <button className="button_name">
          <img className="icon-001" src="/images/mask group.png" /> 0xdd....ahs4
          <img className="icon-002" src="/images/bullet.jpeg" />{" "}
        </button>
        <a href="">
          <img src="/images/notification-bing.png" />
        </a>
        <div className="app8_button_admin_edit">
          <button>
            Admin Mode
            <label class="swih">
              <input type="checkbox" />
              <span class="slid round"></span>
            </label>
          </button>
        </div>

        {/* <a href="">
              <img src="assets/images/setting-2.png" />
            </a> */}
      </div>
    </>
  );
}
