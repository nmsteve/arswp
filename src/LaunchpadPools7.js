import React from "react";
import Aside from "./Components/Aside";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./asidebar.css";

export default function LaunchpadPools7() {
  const navigate = useNavigate();
  const [data, setData] = useState("Standard");
  const handleChange = (value) => {
    setData(value);
  };

  return (
    <>
      <div>
        <Aside />

        <div className="form-block">
          <TopNavAllThree
            title="Launchpad"
            subtitle="Create sale"
            mainpara="Launch your project with Arborswap."
          />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}

          <div className="form_section_radio">
            <div className="inner_form_seting">
              <form>
                <p>Choose Presale Type</p>
                <div class="label fl-left clear lappadpoolactive">
                  <input
                    type="radio"
                    className="fl-right"
                    id="Standard"
                    name="Presale"
                    value="Standard"
                    onChange={(e) => {
                      handleChange(e.target.value);
                    }}
                  />
                   {" "}
                  <label for="Standard" className="fl-left">
                    Standard
                  </label>
                  <br />
                </div>
                <div class="label fl-right ">
                  <input
                    type="radio"
                    className="fl-right"
                    id="Fairlaunch"
                    name="Presale"
                    value="Fairlaunch"
                    onChange={(e) => {
                      handleChange(e.target.value);
                    }}
                  />
                   {" "}
                  <label for="Fairlaunch" className="fl-left">
                    Fairlaunch
                  </label>
                  <br />
                </div>
                <div class="label fl-left">
                  <input
                    type="radio"
                    className="fl-right"
                    id="Private"
                    name="Presale"
                    value="Private"
                    onChange={(e) => {
                      handleChange(e.target.value);
                    }}
                  />
                   {" "}
                  <label for="Private" className="fl-left">
                    Private
                  </label>
                  <br />
                </div>
              </form>
              <div className="clear"></div>
              <div className="app6_form_section_button fl-right">
                <button onClick={() => navigate(`/Createsale/${data}`)}>
                  Next
                </button>
              </div>
            </div>
            {/* <div class="main-class text-center">
              <a
                class="btn btn-default lappadpoolactive"
                href="#step1"
                data-toggle="tab"
              >
                Step 1
              </a>
              <a class="btn btn-default" href="#step2" data-toggle="tab">
                Step 2
              </a>
              <a class="btn btn-default" href="#step3" data-toggle="tab">
                Step 3
              </a>
            </div> */}
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </>
  );
}
