import React from "react";

import QuizInfos from "./Infos/QuizInfos";
import QuizHeader from "./QuizHeader";
// import CreateMap from "../../pages/Game/CreateMap";
import SmallsPanel from "./Infos/SmallsPanel";
import DisplayMap from "../Utils/Map/DisplayMap";

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
  learn = false,
  quizType,
  ...props
}) {
  return (
    <>
      <div className={styles.gameView} id="game-view" data-quiz_type={quizType}>
        {/* <div className={styles.quizMap}> */}
        {/* <SmallsPanel smalls={find?.smalls} handleClick={handleClick} /> */}
        <div className={styles.gameMapContainer}>
          {find.simple?.name && (
            <DisplayMap
              mapValues={{
                svgData: data.map,
                mapData: find.data,
                solos: null,
                continent: data?.info?.continent ?? null,
                quizName: data?.info?.quizType ?? null,
              }}
              updates={{ search: find?.simple?.name, find }}
              handles={{ handleClick }}
              options={{ locked: false, learn }}
            />
          )}
        </div>
      </div>
      {/* <div
        className="quiz-circle"
        style={{ top: mousePos.y - 25, left: mousePos.x - 25 }}
      /> */}
    </>
  );
}

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
//   bgImg={find?.bgImg}
//   styles={styles}
//   learn={learn}
//   hasSmalls={find?.smalls?.length > 0}
// />
