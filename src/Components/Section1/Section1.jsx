import React from "react";
import "./Section1.scss";
import Design1 from "./../../assets/vector-right.png";
import Design2 from "./../../assets/vector-left.png";

import Football from "./../../assets/football.png";
function Section1() {
  return (
    <div className="main">
      <div className="section1">
        <div className="left">
          <img src={Design1} />
        </div>
        <div className="right">
          <img src={Design2} />
        </div>
      </div>
      <div className="secton1-upper">
        <div className="left-upper-layer">
          <div className="banner-section">
            <p>
              New Sport World <br />
              In <span>Vientiane</span>
            </p>
            <button>BOOK NOW >> </button>
          </div>
        </div>
        <div className="right-upper-layer">
          <img src={Football} />
        </div>
      </div>
      {/* <div className="divider-text">
        <p>WHO ARE WE</p>
      </div> */}
    </div>
  );
}

export default Section1;
