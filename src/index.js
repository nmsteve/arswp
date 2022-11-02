import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Live from "./AirdropperAirdrop1";
import Ended from "./AirdropperAirdrop2";
import Timed from "./AirdropperAirdrop3";
import LaunchpadPoolMain from "./LaunchpadPools1ALive";
import LaunchpadPoolMainEnd from "./LaunchpadPools1BEnded";
import LaunchpadPoolMainUpcoming from "./LaunchpadPools1CUpcoming";
import LaunchpadPool from "./LaunchpadPools1ALive";
import LaunchpadPoolsBox from "./LaunchpadPools3";
import LaunchpadpoolUpcoming2 from "./LaunchpadPools6a";
import LaunchpadpoolBox2 from "./LaunchpadPools4a";
import LaunchpadpoolBox3 from "./LaunchpadPools6";
import LaunchpadpoolBoxEnd1 from "./LaunchpadPools5a";
import AirdropTypeTimed from "./AirdropperAirdrop4";
import AirdropTypeLive from "./AirdropperAirdrop5";
import AirdropTypeEnd from "./AirdropperAirdrop6";
import Createpageform from "./AirdropperAirdropForm7";
import Createsale from "./LaunchpadPools7";
import Fairlaunch from "./App14_form_Fairlaunch";
import Standard from "./App12_form_Standard_sale";
import Private from "./App13_form_private_sale";
import AirdropperFormPage from "./AirdropperAirdropForm7";
import LockerHome from "./LockerLockerAsset1";
import LockerHome3 from "./LockerLockerAsset2";
import LockerHome2 from "./LockerLockerAsset3";
import LockerHome1 from "./LocLocAsstLiq";
import LockerHome3pages from "./LockerLockerAsset4";

import Createsalelocker from "./LockerLockerAsset5";
import TokenLocker from "./LockerLPToken";
import LPLocker from "./LockerLPLocker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/LaunchpadPool" element={<LaunchpadPoolMain />} />
        {/* Live  */}
        <Route path="/LaunchpadPool/pools/Live" element={<LaunchpadPool />} />

        <Route
          path="/LaunchpadPool/pools/Live/launchpoolbox"
          element={<LaunchpadPoolsBox />}
        />
        <Route
          path="/LaunchpadPool/pools/Live/Launchpadpool2"
          element={<LaunchpadpoolBox2 />}
        />
        <Route
          path="/LaunchpadPool/pools/Live/Launchpadpool3"
          element={<LaunchpadpoolBox3 />}
        />
        {/* Live  */}

        {/* ended */}
        <Route
          path="/LaunchpadPool/pools/Ended"
          element={<LaunchpadPoolMainEnd />}
        />
        <Route
          path="/LaunchpadPool/pools/Ended/Launchpadpool2"
          element={<LaunchpadpoolBoxEnd1 />}
        />

        {/* ended */}
        {/* upcoming */}
        <Route
          path="/LaunchpadPool/pools/Upcoming"
          element={<LaunchpadPoolMainUpcoming />}
        />
        <Route
          path="/LaunchpadPool/pools/Upcoming/Launchpadpool2"
          element={<LaunchpadpoolUpcoming2 />}
        />

        {/* upcoming */}

        <Route path="live" element={<Live />} />
        <Route path="ended" element={<Ended />} />
        <Route path="timed" element={<Timed />} />
        <Route path="/timed/boxlive" element={<AirdropTypeTimed />} />
        <Route path="/live/boxpage1" element={<AirdropTypeLive />} />
        <Route path="/ended/boxpage2" element={<AirdropTypeEnd />} />
        <Route path="/airdropform1" element={<Createpageform />} />
        <Route path="/Createsale" element={<Createsale />} />
        <Route path="/Createsale/Fairlaunch" element={<Fairlaunch />} />
        <Route path="/Createsale/Standard" element={<Standard />} />
        <Route path="/Createsale/Private" element={<Private />} />
        <Route path="/live/Airdropperform" element={<AirdropperFormPage />} />
        <Route path="/Locker" element={<LockerHome />} />
        <Route path="/Locker2" element={<LockerHome2 />} />
        <Route path="/Lockertab" element={<LockerHome1 />} />
        <Route path="/Locker3" element={<LockerHome3 />} />
        <Route
          path="/Locker3/LockerHome3pages"
          element={<LockerHome3pages />}
        />
        <Route path="/Createsalelocker" element={<Createsalelocker />} />
        <Route path="/Createsalelocker/TokenLocker" element={<TokenLocker />} />
        <Route path="/Createsalelocker/LPLocker" element={<LPLocker />} />
        {/* <Routh path='/popupstandard' element={< />} */}
        {/* <Route path='/Createsalelocker/ ' element={< />}/> */}
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
