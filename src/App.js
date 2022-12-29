import React from "react";
import Header from "./Header";
import GuidBtn from "./GuidBtn"
import Reward from "./Reward";
import Schedule from "./Schedule";
import LeaderBoard from "./LeaderBoard";

function App() {

  return (
    <div className="app">
      <GuidBtn />
      <div id="main">
        <Header />
        <Reward />
        <Schedule />
        <LeaderBoard />
      </div>
    </div>
  );
}

export default App;
