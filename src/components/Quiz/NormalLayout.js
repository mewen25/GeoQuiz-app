import React from "react";

import QuizInfos from "./Infos/QuizInfos";
import QuizHeader from "./QuizHeader";
import SmallsPanel from "./Infos/SmallsPanel";

export default function NormalLayout({
  find,
  guesses,
  guiColour,
  countryColour,
  handleSkip,
  handleShow,
  show,
  handleClick,
  data,
  mousePos,
  modifier,
  time,
  ...props
}) {
  return (
    <>
      <div className="game-view">
        <QuizInfos
          place={find?.simple}
          score={guesses?.score?.score}
          marks={guesses?.score?.marks}
          total={find?.totals?.all}
          colour={guiColour}
          time={time}
          handleSkip={handleSkip}
          handleShow={handleShow}
          show={show}
        />
        <div className="quiz-map">
          <SmallsPanel smalls={find.smalls} handleClick={handleClick} />
          {find.simple?.name && (
            <></>
            // <CreateMap
            //   started={!show}
            //   mapData={find.data}
            //   svgData={data.map}
            //   handleClick={handleClick}
            //   search={find.simple.name}
            //   list={find.list.length}
            //   total={find.totals.all}
            //   marks={guesses.score.marks}
            //   colour={countryColour}
            //   mousePos={mousePos}
            //   scoreData={find?.distance?.sorted}
            // />
          )}
        </div>
      </div>
      <div
        className="quiz-circle"
        style={{ top: mousePos.y - 25, left: mousePos.x - 25 }}
      />
    </>
  );
}