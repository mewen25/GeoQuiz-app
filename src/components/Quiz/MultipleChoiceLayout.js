import React, { useState, useEffect } from "react";

import QuizInfos from "./Infos/QuizInfos";
import QuizScore from "./Infos/QuizScore";
import QuizHeader from "./QuizHeader";
import CreateMap from "../../pages/Game/CreateMap";
import SmallsPanel from "./Infos/SmallsPanel";
import SelectInput from "@material-ui/core/Select/SelectInput";

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
  styles,
  mousePos,
  modifier,
  time,
  quizType,
  sounds,
  ...props
}) {
  const [selected, setSelected] = useState(null);
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [previousResult, setPreviousResult] = useState("");
  const [answer, setAnswer] = useState(find?.simple?.name);

  const upHandler = ({ key }) => {
    if (!find?.close[0] || selected !== null || !show) return;
    console.log(key, find?.close[0], find.close, find, selected, answer);
    if (key === "1") setSelected(find?.close[0]);
    if (key === "2") setSelected(find?.close[1]);
    if (key === "3") setSelected(find?.close[2]);
  };

  useEffect(() => {
    window.addEventListener("keyup", upHandler);
    setAnswer(find?.simple?.name);
    return () => {
      window.removeEventListener("keyup", upHandler);
    };
  }, [find, selected, show]);

  useEffect(() => {
    handleQuestion();
  }, [answer]);

  useEffect(() => {
    handleQuestion();
  }, [selected]);

  const getStatusAnim = () => {
    if (!answer || (!selected?.name && previousResult !== "wrong"))
      return "animateIn";

    if (selected?.name === answer) return "correct";
    else if (selected?.name !== answer) return "wrong";

    return "";
  };

  const getStatus = (n) => {
    if (!selected) return "";

    if (selected?.name === n && n === answer) return "correct";
    else if (selected?.name !== answer && n === answer) return "wrong";

    return "";
  };

  async function handleQuestion() {
    setCurrentAnimation(getStatusAnim());
    if (selected) {
      if (selected?.name !== answer) {
        await sleep(1800 / 1.5);
        sounds.handle(sounds?.sounds?.[1]);
        await sleep(1800 / 2.5);
        setPreviousResult("wrong");
        setSelected(null);
        handleClick(selected, {
          tries: 1,
          skipAnimation: true,
        });
      } else {
        await sleep(900 / 3.5);
        sounds.handle(sounds?.sounds?.[0]);
        await sleep(900 / 2.5);
        setPreviousResult("correct");
        setSelected(null);
        handleClick(selected, {
          tries: 1,
          skipAnimation: true,
        });
      }
    }
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <>
      <div className={styles.gameView}>
        <div className={styles.gameMultipleChoice}>
          <div className={styles.multipleChoiceSide}>
            <div
              data-selected={selected !== null}
              className={`${styles.multipleChoiceBoxes} ${
                styles[getStatusAnim()] ?? ""
              }`}
            >
              {find?.close?.map((b, idx) => (
                <button
                  key={idx}
                  className={`${styles.box}`}
                  data-status={getStatus(b.name) ?? "n/a"}
                  onClick={(e) => !selected && setSelected(b)}
                >
                  <div>{idx + 1}</div>
                  <div>{b.name}</div>
                </button>
              ))}
            </div>
          </div>
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
              locked={true}
            />
          )}
        </div>
      </div>
    </>
  );
}
