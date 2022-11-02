import React from "react";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import Form from "./Lapad_form_salety_private/Form";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <TopNavAllThree
            breadimg="/img/airdropperlogomob.png"
            title="Launchpad"
            subtitle="Create sale"
            mainpara="Launch your project with Arborswap."
          />

          <Topnavicon2 />

          <div className="clear mar-22"></div>

          <Form />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;
