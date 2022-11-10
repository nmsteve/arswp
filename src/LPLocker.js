import React from "react";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import Form from "./Locker_Lp_Locker/Form";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        <div className="form-block">
          <TopNavAllThree
            breadimg="/img/lockerlogotop.png"
            title="Locker"
            subtitle="Token Locker"
            mainpara="Lock your assets for proof of lock."
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
