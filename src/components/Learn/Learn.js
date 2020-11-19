import React, { useState, useEffect, useContext } from 'react';
import _ from "lodash";
import { GameContext } from "../Utils/gameContext";

import learnData from "../../data/gameData/learningData";

import LearnPage from "./LearnPage";

export default function Learn1({ match }) {
  console.log(match);
  const { setHeaderState } = useContext(GameContext);
  const [learnValues, setLearnValues] = useState();
  const [show, setShow] = useState(true);
  const gameSetup = () => {
      let data = _.cloneDeep(learnData[0][match.params.continent][match.params.learn]);
      const links = learnData[0][match.params.continent].regions;
    if (data) {
      setLearnValues({
        current: {
          title: data.title,
          link: match.params.learn,
          data: data
        },
        map: data.map,
        countries: data.countries[0],
        links: links,
      });
    }
  };
 
  useEffect(() => {
    gameSetup();
    setHeaderState(false);

    return () => {
      setHeaderState(true);
    }
  }, [match]);

    return (
        <>
        {learnValues?.map ? <LearnPage show={show} data={learnValues} /> : null}
        </>
    )
}