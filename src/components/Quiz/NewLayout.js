import React from "react";

import QuizInfos from "./Infos/QuizInfos";
import QuizHeader from "./QuizHeader";
import CreateMap from "../../pages/Game/CreateMap";
import SmallsPanel from "./Infos/SmallsPanel";

export default function NewLayout({
  find,
  guesses,
  guiColour,
  countryColour,
  handleSkip,
  handleShow,
  show,
  handleClick,
  data,
  styles,
  mousePos,
  modifier,
  time,
  ...props
}) {
  return (
    <>
      <div className={styles.gameView}>
        {/* <div className={styles.quizMap}> */}
        {find.simple?.name && (
          <CreateMap
            started={!show}
            mapData={find.data}
            svgData={data.map}
            handleClick={handleClick}
            search={find.simple.name}
            list={find.list.length}
            total={find.totals.all}
            marks={guesses.score.marks}
            colour={countryColour}
            mousePos={mousePos}
            scoreData={find?.distance?.sorted}
            styles={styles}
          />
        )}
        {/* </div> */}
      </div>
      <div
        className="quiz-circle"
        style={{ top: mousePos.y - 25, left: mousePos.x - 25 }}
      />
    </>
  );
}
