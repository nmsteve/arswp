import React from "react";
import Aside from "./Components/Aside";
import Slider from "./Components/Slider";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Live_end_upcom from "./Components/LiveONEndUpcom";
import Sort_by from "./Components/Sort_by";
import My_Pools from "./Components/My_Pools";
import Search_sec from "./Components/Search_sec";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
import LaunchpadPoolsBox from "./Components/Box_section/LaunchpadPoolsBox";
import LiveEndONUpcom from "./Components/LiveEndONUpcom";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* content1 */}
        <Aside />
        {/*  */}
        <div className="form-block">
          <TopNavAllThree
            breadimg="/img/LaunchedIcon.png"
            title="Launchpad"
            subtitle="Pools"
            mainpara="Discover upcoming or live sales."
          />

          <Topnavicon2 />

          <div className="clear"></div>
          {/* content1 slider */}

          <Slider />

          {/* content1 slider */}
          <div className="clear"></div>

          {/* content */}
          <div className="fl-container">
            <div className="outer_box_1 fl-left" id="outer_box_1_moble">
              <LiveEndONUpcom />
            </div>
            <div className="outer_box_2 fl-left " id="outer_box_2_moble">
              <My_Pools />
            </div>
            <Sort_by />
            <div className="outer_box_4 fl-right">
              <Search_sec />
            </div>
          </div>

          <div className="outer_box">
            {/* box1 */}
            <Link to="/LaunchpadPool/pools/Ended/Launchpadpool2">
              <LaunchpadPoolsBox
                coinlogo="/img/RIP_logo (1).png"
                coinname="Swipe Coin"
                subtitle1="Payment"
                subtitle2="Web3"
                percent="25"
                capimg="/img/RIP.png"
                capamt="240,000"
                midtitle1="120,000 RBA"
                midtitle2="240,000 RBA"
                nodays="140 Days"
              />
            </Link>

            {/* box2 */}
            <Link to="/LaunchpadPool/pools/Ended/Launchpadpool2">
              <LaunchpadPoolsBox
                coinlogo="/img/RIP_logo(6).png"
                coinname="Venus"
                subtitle1="DEFI"
                subtitle2="DEX"
                percent="80"
                capimg="/img/RIP (1).png"
                capamt="14,000"
                midtitle1="10,000 BNB"
                midtitle2="14,000 BNB"
                nodays="110 Days"
              />
            </Link>

            {/* box3 */}
            <Link to="/LaunchpadPool/pools/Ended/Launchpadpool2">
              <LaunchpadPoolsBox
                coinlogo="/img/RIP_logo (2).png"
                coinname="Voyager Tokent"
                subtitle1="Payment"
                subtitle2="Web3"
                percent="10"
                capimg="/img/RIP (2).png"
                capamt="72,000"
                midtitle1="7,200 ETH"
                midtitle2="72,000 ETH"
                nodays="110 Days"
              />
            </Link>

            {/* box4 */}
            <Link to="/LaunchpadPool/pools/Ended/Launchpadpool2">
              <LaunchpadPoolsBox
                coinlogo="/img/RIP_logo (3).png"
                coinname="Waxp"
                subtitle1="NFT"
                subtitle2="Blockchain"
                percent="25"
                capimg="/img/RIP (1).png"
                capamt="7,400"
                midtitle1="3,700 BNB"
                midtitle2="7,400 BNB"
                nodays="110 Days"
              />
            </Link>

            {/* box5 */}
            <Link to="/LaunchpadPool/pools/Ended/Launchpadpool2">
              <LaunchpadPoolsBox
                coinlogo="/img/RIP_logo (4).png"
                coinname="XSG Token"
                subtitle1="Blockchain"
                subtitle2="Meta"
                percent="80"
                capimg="/img/RIP.png"
                capamt="240,000"
                midtitle1="200,000 RBA"
                midtitle2="240,000 RBA"
                nodays="110 Days"
              />
            </Link>

            {/* box6 */}
            <Link to="/LaunchpadPool/pools/Ended/Launchpadpool2">
              <LaunchpadPoolsBox
                coinlogo="/img/RIP_logo (3).png"
                coinname="Gnosis"
                subtitle1="Payment"
                subtitle2="Web3"
                percent="15"
                capimg="/img/RIP (3).png"
                capamt="1,200,000"
                midtitle1="120,000 USDT"
                midtitle2="1,200,000 USDT"
                nodays="110 Days"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
