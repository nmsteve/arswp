import React from "react";

import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";

import Form from "./Form/Form";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";

class Home extends React.Component {
  render() {
    return (
      <div className="mainly">
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <TopNavAllThree
            breadimg="/img/airdropperlogomob.png"
            title="Airdropper"
            subtitle="Create Airdrop"
            mainpara="Airdrop to multiple users in few clicks."
          />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}
          {/* <Locker_coin_sec /> */}
          <Form />
          {/* <Project_details /> */}
          {/* content2 */}
          {/* <Airdrops_arbor_right_sec /> */}
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
