import React from "react";
import { Helmet } from "react-helmet";

import HomeBtns from "../../components/Home/HomeBtns";
import QuickLinks from "../../components/Home/QuickLinks";
import AllLinks from "../../components/Home/AllLinks";
import ScrollPage1 from "./ScrollPage1";

import { ReactComponent as WorldSvg } from "../../assets/images/home-bg-extra.svg";
import { ReactComponent as Wave } from "../../assets/images/home-top-wave.svg";

import "./Home1.css";

function Home1(props) {
  return (
    <>
      <Helmet>
        <title>Interactive Geography Quiz - GeoQuiz</title>
      </Helmet>
      <div className="home-page">
        <div className="home-page-top">
          <div className="home-page-top-content-container">
            <div className="home-page-top-content">
              <HomeBtns />
              <WorldSvg id="world-img" />
            </div>
          </div>
          <div className="home-page-top-wave">
            {/* <img src={require('../../assets/images/home-top-wave.svg')} id="top-wave" className="wave" /> */}
            <Wave className="wave" id="top-wave" />
          </div>
        </div>
          <ScrollPage1 />
          {/* <AllLinks /> */}
        <footer style={{height: "50vh", width: "100%"}}></footer>
      </div>
    </>
  );
}

export default Home1;
