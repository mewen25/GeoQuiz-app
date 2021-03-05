import React from "react";
import { Helmet } from "react-helmet";

import HomeBtns from "../../components/Home/HomeBtns";
import QuickLinks from "../../components/Home/QuickLinks";
import AllLinks from "../../components/Home/AllLinks";
import ShowCards from "../../components/Home/Cards/ShowCards";
import Spacer from "../../components/Utils/Spacer";

// import ScrollPage1 from "./ScrollPage1";
import Scrollpage from "./Scrollpage/Scrollpage";

import { ReactComponent as WorldSvg } from "../../assets/images/home/bg-world.svg";
import { ReactComponent as Wave } from "../../assets/images/home-top-wave.svg";
import { ReactComponent as Stars1 } from "../../assets/images/home/button_stars_1.svg";
import { ReactComponent as Stars2 } from "../../assets/images/home/button_stars_2.svg";

import "./Home1.css";

function ScrollPage1() {
  return (
    <div className="scrollpage1">
      <div className="scroll-cards-modes">
        <ShowCards
          cards={[
            {
              title: "Point & Click",
              description:
                "What we consider the traditional quiz method, Point & Click will test precision ",
              subTextHandled: true,
              subText: (
                <h5 className="card-top-subText difficulty-hard">Hardest</h5>
              ),
              image: {
                src: require("../../assets/images/home/scroll/card-hard.png"),
                name: "card-hard",
              },
            },
            {
              title: "Multiple Choice",
              description:
                "What we consider the traditional quiz method, Point & Click will test precision ",
              subTextHandled: true,
              subText: (
                <h5 className="card-top-subText difficulty-medium">Medium</h5>
              ),
              image: {
                src: require("../../assets/images/home/scroll/card-medium.png"),
                name: "card-medium",
              },
            },
            {
              title: "Hinted",
              description:
                "What we consider the traditional quiz method, Point & Click will test precision ",
              subTextHandled: true,
              subText: (
                <h5 className="card-top-subText difficulty-easy">Easiest</h5>
              ),
              image: {
                src: require("../../assets/images/home/scroll/card-easy.png"),
                name: "card-easy",
              },
            },
          ]}
        />
        {/* <div className="scroll-bar-blue" /> */}
      </div>
      <div className="scroll-quizzesButton">
        <Stars1 />
        <button>View all Quizzes</button>
        <Stars2 />
      </div>
    </div>
  );
}

function Home1(props) {
  return (
    <>
      <Helmet>
        <title>Interactive Geography Quiz - GeoQuiz</title>
      </Helmet>
      <div className="home-page">
        <div className="home-page-top">
          <div className="home-page-top-content-container">
            <div className="home-main-container">
              <HomeBtns />
              <WorldSvg className="home-world" id="world-img" />
            </div>
          </div>
          <div className="home-page-top-wave">
            {/* <img src={require('../../assets/images/home-top-wave.svg')} id="top-wave" className="wave" /> */}
            <Wave className="wave" id="top-wave" />
          </div>
        </div>
        <ScrollPage1 />
        {/* <Scrollpage /> */}
        <footer style={{ height: "15vh", width: "100%" }}></footer>
      </div>
    </>
  );
}

export default Home1;
