import React from 'react';

import QuizInfos from "./Infos/QuizInfos";
import QuizHeader from "./QuizHeader";
import CreateMap from "../../pages/Game/CreateMap";
import SmallsPanel from "./Infos/SmallsPanel";

export default function NormalLayout({ find, guesses, guiColour, countryColour, handleSkip, handleShow, show, handleClick, data, mousePos, modifier }) {
    return (
        <>
        <div className="game-view">
          <QuizInfos
            place={find?.simple}
            score={guesses?.score?.score}
            marks={guesses?.score?.marks}
            total={find?.totals?.all}
            colour={guiColour}
            handleSkip={handleSkip}
            handleShow={handleShow}
          />
          <div className="quiz-map">
            <SmallsPanel smalls={find.smalls} handleClick={handleClick} />
            {find.simple?.name && (
              <CreateMap
                started={!show}
                mapData={find.data}
                svgData={data.map}
                handleClick={handleClick}
                search={find.simple.name}
                colour={countryColour}
                mousePos={mousePos}
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