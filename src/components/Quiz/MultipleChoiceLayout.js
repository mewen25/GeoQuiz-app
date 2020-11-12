import React, {useState, useEffect} from 'react';

import QuizInfos from "./Infos/QuizInfos";
import QuizScore from "./Infos/QuizScore";
import QuizHeader from "./QuizHeader";
import CreateMap from "../../pages/Game/CreateMap";
import SmallsPanel from "./Infos/SmallsPanel";

export default function NormalLayout({ find, guesses, guiColour, countryColour, handleSkip, handleShow, show, handleClick, data, mousePos }) {

  const upHandler = ({ key }) => {
    console.log(key, find?.close[0]);
    if(!find?.close[0]) return;
    if (key === '1') handleClick(find?.close[0])
    if (key === '2') handleClick(find?.close[1])
    if (key === '3') handleClick(find?.close[2])
  };

  useEffect(() => {
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keyup', upHandler);
    };
  }, [find?.close]);
  
  return (
        <>
          <div className="game-view-multipleChoice">
            <div style={{width: "40%", margin: "0 auto", marginTop: "20px"}}>
              <QuizScore marks={guesses?.score?.marks} total={find?.totals?.all} score={guesses?.score?.score} colour={guiColour} />
            </div>
            <div className="quiz-map-multipleChoice">
              <div className="quiz-map-multipleChoice-options-side">
                <div className="quiz-map-multipleChoice-options-container">
                  <h2>Click the correct answer</h2>
                  <div className="quiz-map-multipleChoice-options">
                    <div className="quiz-choice" onClick={() => handleClick(find?.close[0].value)}>
                      <p>1.</p>
                      <h2>{find?.close[0]?.name}</h2>
                    </div>
                    <div className="quiz-choice" onClick={() => handleClick(find?.close[1].value)}>
                      <p>2.</p>
                      <h2>{find?.close[1]?.name}</h2>
                    </div>
                    <div className="quiz-choice" onClick={() => handleClick(find?.close[2].value)}>
                      <p>3.</p>
                      <h2>{find?.close[2]?.name}</h2>
                    </div>
                  </div>
                </div>
              </div>
              {find.simple?.name && (
                <CreateMap
                  started={!show}
                  mapData={find.data}
                  svgData={data.map}
                  handleClick={handleClick}
                  search={find.simple.name}
                  colour={countryColour}
                  mousePos={mousePos}
                  find={find?.simple?.name}
                  mode={"choice"}
                />
              )}
            </div>
          </div>
          <div
            className="quiz-circle"
            style={{ top: mousePos.y - 25, left: mousePos.x - 25 }}
          />
        </>
    )
}