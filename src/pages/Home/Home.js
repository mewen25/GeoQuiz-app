import React from "react";
import { ReactComponent as TitleImg } from "../../assets/images/frontPageTitle.svg";
import "./home.css";

import SelectContinent from "../../components/SelectContinent";

const Home = () => {
  return (
    <>
      <div id="home-page">
        <TitleImg id="home-img" data-aos="zoom-in" />
        <div className="select-continent">
          {/* <div className="select-continent-title">
          <h2 id="select-continent-title">Select a Continent</h2>
        </div> */}
          <div className="continents-container" data-aos="zoom-in">
            <div className="continents-row1">
              <SelectContinent title="Europe" name="eu" linkTitle="europe" />
              <SelectContinent
                title="North America"
                name="na"
                linkTitle="north-america"
              />
              <SelectContinent title="Africa" name="af" linkTitle="africa" />
            </div>
            <div className="continents-row2">
              <SelectContinent title="Asia" name="as" linkTitle="asia" />
              <SelectContinent
                title="South America"
                name="sa"
                linkTitle="south-america"
              />
              <SelectContinent title="Oceania" name="au" linkTitle="oceania" />
            </div>
          </div>
        </div>
      </div>
      <footer>&copy; Copyright 2020 Geoquiz.app</footer>
    </>
  );
};

export default Home;
