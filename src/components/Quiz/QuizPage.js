import React, { useState, useEffect, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";

import {
  assignColour,
  completeGuess,
  formatList,
  manageClass,
  getFlag,
  getClose,
  sortDistance,
  sortedData,
} from "../../utils/quizFunctions";

import { ReactComponent as Wave } from "../../assets/images/game/wave.svg";

import CorrectSFX from "../../assets/sounds/Correct4.mp3";
import WrongSFX from "../../assets/sounds/Wrong4.mp3";

import NormalLayout from "./NormalLayout";
import MultipleChoice from "./MultipleChoiceLayout";
import NewLayout from "./NewLayout";
// import HintedLayout from "./HintedLayout";

import QuizHeader from "./QuizHeader";
import "../Game/game1.css";
import "./quiz.css";
// import { useTimer } from "use-timer";

import styles from "./quiz.module.scss";

const countryColours = {
  blue: ["#CBE0ED", "#CCE3F2"],
  // green: ["#6FB191", "#79D3A7"],
  green: ["#6FB191", "#6FB191"],
  yellow: ["#F5E158", "#FCEB7B"],
  red: ["#F55858", "#FC7B7B"],
};
const guiColours = {
  blue: ["#90AEDB", "#fff"],
  green: ["#90AEDB", "#fff"],
  yellow: ["#90AEDB", "#fff"],
  red: ["#90AEDB", "#fff"],
};

function QuizPage({
  show,
  setShow,
  data,
  setFinished,
  finished,
  quizType,
  setResults,
}) {
  // const gameTimer = useTimer();
  const [theme, setTheme] = useState("green");
  // const [finished, setFinished] = useState(false);
  const [find, setFind] = useState({
    data: data?.data,
    savedData: Object.assign(data?.data, {}),
    simple: {
      name: undefined,
      image: undefined,
    },
    previous: null,
    list: formatList(data.data),
    totals: {
      all: formatList(data.data).length,
    },
    smalls: [],
    assists: [],
    close: [],
    sorted: {
      list: [],
      choice: [],
    },
    distance: {
      sorted: [],
    },
    timer: {
      total: 0,
      current: 0,
    },
    bgImg: data?.bgImage,
  });
  const [guesses, setGuesses] = useState({
    current: undefined,
    answers: {
      correct: [],
      wrong: [],
      skipped: [],
    },
    score: {
      points: 0,
      score: 0,
      marks: 1,
      misses: 0,
      time: 0,
    },
  });
  const [guessTime, setGuessTime] = useState(0);
  const [currentAttempts, setCurrentAttempts] = useState(0);
  const continent = data.continent;
  const [listArr, setListArr] = useState([]);
  let history = useHistory();
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [pointsFeedback, setPointsFeedback] = useState([]);
  const [quizCircles, setQuizCircles] = useState([]);
  const [isMuted, setMuted] = useState(false);

  const correctSound = useSound(CorrectSFX, {
    playbackRate: 1.8,
    volume: 0.3,
  });
  const wrongSound = useSound(WrongSFX, {
    playbackRate: 1.2,
  });
  const [generatedExtra, setGeneratedExtra] = useState([]);

  function getResults() {
    return {
      ...guesses.score,
      marks: `${guesses.answers.correct.length} / ${find.totals.all}`,
      // time: find.timer.total,
      accuracy: Math.round(
        (guesses.answers.correct.length /
          (guesses.score.misses + find.totals.all)) *
          100
      ),
    };
  }

  // useEffect(() => {
  //   setFind(prev => ({...prev, data}))
  // }, [data])

  useEffect(() => {
    console.log("updatiing?1", find.data);
    if (!find.data) return;
    // if (find.assists.length === 0) {
    // const smalls = Object.values(data.data)
    //   .reduce((acc, cur) => {
    //     return cur.small ? [...acc, cur] : [...acc];
    //   }, [])
    //   .sort((a, b) => a.small.order - b.small.order);
    // const assists = Object.values(data.data).reduce((acc, cur) => {
    //   return cur.assist ? [...acc, cur] : [...acc];
    // }, []);
    // setFind((prev) => ({
    //   ...find,
    //   smalls: smalls,
    //   assists: assists,
    // }));
    // }
    // window.addEventListener("click", updateMousePosition);

    // return () => window.removeEventListener("click", updateMousePosition);
  }, []);

  useEffect(() => {
    // TODO DOESN@ WORK
    // if(!show) gameTimer.start();
    if (generatedExtra.length === 0) makeExtras();
    console.log("UPDATE", show, data.data);
    const _data = data.data;
    if (show === false) {
      const smalls = Object.values(_data)
        .reduce((acc, cur) => {
          return cur.small ? [...acc, cur] : [...acc];
        }, [])
        .sort((a, b) => a.small.order - b.small.order);
      const assists = Object.values(_data).reduce((acc, cur) => {
        return cur.assist ? [...acc, cur] : [...acc];
      }, []);
      setFind((prev) => ({
        ...prev,
        data: data?.data,
        savedData: Object.assign(data?.data, {}),
        list: formatList(_data),
        totals: {
          all: formatList(_data).length,
        },
        smalls,
        assists,
      }));
    }
  }, [show, data.data]);

  useEffect(() => {
    // console.log("GUESS TIME", guessTime);
  }, [guessTime]);

  // const moveOnSvg = (e) => {
  //   // console.log(e.clientX, mousePos.x);
  //   setMousePos({
  //     x: e.clientX,
  //     y: e.clientY,
  //   });
  // };

  // useEffect(() => {
  //   const place = document.querySelector(`#${find.simple.name}`);
  //   if (!place) return;
  //   const bbox = place.getBBox();
  //   console.log(mousePos, bbox.x, bbox.y);
  //   console.log(Math.abs(mousePos.x - bbox.x), Math.abs(mousePos.y - bbox.y));
  // }, []);

  const getCountryPos = (place, bounding = false) => {
    const element = document.querySelector(`#${place.id || place.name}`);
    if (!element) return null;
    const bbox = bounding ? element.getBoundingClientRect() : element.getBBox();
    return { element, bbox };
  };

  useEffect(() => {
    console.log("updatiing?2");

    for (var small of find.smalls) {
      const { element, bbox } = getCountryPos(small) ?? {};
      if (!bbox) continue;
      appendSVGChild("circle", element, {
        class: "small-helper",
        // fill: `${small.styles[0]}`,
        cx: `${bbox.x + bbox.width / 2}`,
        cy: `${bbox.y + bbox.height / 2}`,
        r: "5",
      });
    }
  }, [find?.smalls]);

  useEffect(() => {
    console.log("updatiing?3");
    for (var assist of find.assists) {
      const place = document.querySelector(`#${assist.id || assist.name}`);
      if (!place) continue;
      const bbox = place.getBBox();
      const path = place.children[0];
      if (assist.assist === "ring") {
        if (bbox.width > 10 || bbox.height > 10) {
          appendSVGChild("ellipse", place, {
            class: "ring-helper",
            stroke: "#FFA3A3",
            "stroke-width": "2",
            "fill-opacity": "0",
            cx: `${bbox.x + bbox.width / 2}`,
            cy: `${bbox.y + bbox.height / 2}`,
            rx: `${Math.min(bbox.width, 40)}`,
            ry: `${Math.min(bbox.height, 30)}`,
          });
        } else {
          appendSVGChild("circle", place, {
            class: "ring-helper",
            stroke: "#FFA3A3",
            "stroke-width": "2",
            "fill-opacity": "0",
            cx: `${bbox.x + bbox.width / 2}`,
            cy: `${bbox.y + bbox.height / 2}`,
            r: "10",
          });
        }
      } else {
        appendSVGChild("rect", place, {
          class: "assist-helper",
          // fill: "orange",
          rx: "8",
          // stroke: "blue",
          // strokeWidth: "1",
          opacity: "0",
          "z-index": "2",
          x: `${bbox.x - 2}`,
          y: `${bbox.y - 2}`,
          width: `${bbox.width + 4}`,
          height: `${bbox.height + 4}`,
        });
      }
    }
  }, [find?.assists]);

  function appendSVGChild(element, target, attributes = {}, text = "") {
    let e = document.createElementNS("http://www.w3.org/2000/svg", element);
    Object.entries(attributes).map((a) => e.setAttribute(a[0], a[1]));
    if (text) {
      e.textContent = text;
    }
    target.appendChild(e);
    return e;
  }

  function validPosition(bounds = {}, options = {}) {
    var { absolute, rotation, x1, y1, w1, h1, imgSize } = options;
    var { x, y, width, height } = bounds;
    if (!x1) x1 = 0;
    if (!y1) y1 = 0;
    let objX = null;
    let objY = null;

    function getPosition() {
      if (!objX) {
        let _x = Math.floor(Math.random() * w1) + x1;
        if (_x > x && _x < width) {
          getPosition();
        } else {
          if (_x < x1 + imgSize) _x = _x + imgSize;
          else if (_x + imgSize > w1) _x = _x - imgSize;
          objX = _x;
        }
      }
      if (!objY) {
        let _y = Math.floor(Math.random() * h1);
        if (_y > y && _y < height) {
          getPosition();
        } else {
          if (_y < y1 + imgSize) _y = _y + imgSize;
          else if (_y + imgSize > h1) _y = _y - imgSize;
          objY = _y;
        }
      }
    }
    getPosition();

    return { x: objX, y: objY };
  }

  function makeExtras() {
    return;
    const mapElement = document.querySelector(`#learn-map`);
    const screenSpace = document.querySelector("#game-view");
    if (!mapElement || !screenSpace) return;
    const waves = 40;
    const bbox =
      mapElement.getBoundingClientRect() ?? mapElement.getBBox() ?? null;
    const screenBox =
      screenSpace.getBoundingClientRect() ?? screenSpace.getBBox() ?? null;
    console.log("THIS", bbox, screenBox);

    setGeneratedExtra(() => {
      let arr = [];
      [...Array(waves)].forEach((w) => {
        const pos = validPosition(bbox, {
          w1: screenBox.width,
          h1: screenBox.height,
          y1: screenBox.top,
          imgSize: 100,
        });
        console.log(pos);
        return arr.push({
          Component: Wave,
          top: pos.y,
          left: pos.x,
        });
      });
      return arr;
    });
  }

  const updateMousePosition = (ev) => {
    setMousePos({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    console.log("updatiing?4");

    if (!find.data) return;
    setFind((prevData) => ({
      ...prevData,
      data: assignColour(countryColours[theme], find.data),
    }));
  }, [theme]);

  useEffect(() => {
    console.log("updatiing?5");
    if (!find.previous || find.animSkip) return;

    // animate(find.previous, "pulsey", "", true);
    // animate(".quiz-page", "wipe", "", true);
    if (currentAttempts < 1) {
      const newID = Math.floor(Math.random() * 9999);
      console.log("NEW CIRCLE", newID, [mousePos.x, mousePos.y]);
      setQuizCircles((prev) => [
        ...prev,
        {
          id: newID,
          animation: "circle-complete",
          state: true,
          position: [mousePos.x, mousePos.y + 5],
        },
      ]);
      //animate(".quiz-circle", "circle-complete", "", true);
    }
  }, [find.previous]);

  useEffect(() => {
    console.log("updatiing?6");
    if (quizType === "multipleChoice") return;
    if (
      pointsFeedback.length > 0 &&
      pointsFeedback.some((p) => p.state === true)
    ) {
      setPointsFeedback((prev) =>
        prev.map((p) => {
          if (p.state === true && !find.animSkip) {
            animate(`#game-points-${p.id}`, "fadeOutUp");
            return { ...p, state: false };
          } else return p;
        })
      );
    }
  }, [pointsFeedback]);

  useEffect(() => {
    console.log("updatiing?7");
    if (quizCircles.length > 0 && quizCircles.some((c) => c.state === true)) {
      setQuizCircles((prev) =>
        prev.map((p) => {
          if (p.state === true && !find.animSkip) {
            animate(`#quiz-circle-${p.id}`, p.animation, "", true);
            return { ...p, state: false };
          } else return p;
        })
      );
    }
  }, [quizCircles]);

  useEffect(() => {
    if (find.list.length === find.totals.all) return;
    if (guesses.current === find.previous) manageScore("correct");
  }, [guessTime]);

  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  }

  const getFind = () => {
    if (quizType === "learn") {
    }

    const totalCountries = find.totals.all;
    if (guesses.answers.correct.length < totalCountries && find.list[0]) {
      setCurrentAttempts(0);
      const place = find.data[find.list[0]].name;
      const distSorted = sortDistance(find.data[find.list[0]]?.id || place);
      const distScored = sortedData(
        find.data[find.list[0]?.id] || place,
        find.data
      );
      setFind((prevData) => ({
        ...prevData,
        simple: {
          name: place,
          id: find.data[find.list[0]].id || null,
          image: getFlag(data.continentId, data.info.mode, place),
        },
        close: getClose(find.data[find.list[0]]?.id || place, find.data),
        distance: {
          sorted: distScored,
        },
      }));
    } else {
      setFinished(true);
      setResults(getResults());
    }
  };

  function handleClick(event, options = {}) {
    if (quizType === "learn") return;

    let clicked = event?.currentTarget?.id || event;
    if (clicked.value) clicked = clicked.value;
    const list = find.data;
    if (list[clicked].class.includes("complete")) return;

    const place = find.data[clicked].id || find.data[clicked].name;
    setGuesses((prevData) => ({
      ...prevData,
      current: place,
    }));
    handleGuess(place, false, options);
  }

  const manageScore = (state) => {
    let newPoints;
    const maxPoints = 200;
    let score = guesses.score.score;
    const thisTime = guessTime; //time;
    console.log("state", state);
    if (state === "correct") {
      newPoints = Math.min(
        Math.max(maxPoints - thisTime * 10, maxPoints * 0.5),
        maxPoints
      );
    } else if (state === "wrong") {
      newPoints = maxPoints * -0.2;
    } else if (state === "skipped") {
      newPoints = -50;
    }
    if (score + newPoints <= 0) {
      setGuesses((prev) => ({
        ...prev,
        score: {
          ...prev.score,
          score: 0,
        },
      }));
    } else {
      setGuesses((prev) => ({
        ...prev,
        score: {
          ...prev.score,
          score: prev.score.score + newPoints,
        },
      }));
    }
    const map = document.querySelector("#learn-map");
    // appendSVGChild("circle", map, {
    //   class: "points",
    //   fill: `#5DBCFB`,
    //   cx: `${mousePos.x}`,
    //   cy: `${mousePos.y}`,
    //   r: "10",
    // });
    const newID = Math.floor(Math.random() * 9999);
    console.log("NEW points", newPoints, newID, [mousePos.x, mousePos.y]);
    setPointsFeedback((prev) => [
      ...prev,
      {
        id: newID,
        points: newPoints,
        state: true,
        position: [mousePos.x, mousePos.y],
      },
    ]);
    // animate("#game-points", "fadeOutUp", undefined, false);
  };

  const animate = async (
    element,
    animation,
    prefix = "animate__",
    custom = false
  ) =>
    new Promise(async (resolve, reject) => {
      var classes = [];
      if (!custom) classes.push(`${prefix}animated`);
      classes.push(`${!custom ? prefix : ""}${animation}`);
      // const animationName = `${!custom ? prefix : ""}${animation}`;
      // await sleep(5000);
      const node = document.querySelector(element ?? `#${element}`) ?? null;
      if (!node) return;
      if (!custom) node.classList.add(classes[0], classes[1]);
      else node.classList.add(classes[0]);
      // node.classList.add([...classes]);

      function handleAnimationEnd() {
        if (!custom) node.classList.remove(classes[0], classes[1]);
        else node.classList.remove(classes[0]);

        if (animation === "fadeOutUp") {
          setPointsFeedback((prev) => {
            return prev.filter(
              (p, i) => p.id !== Number(element.split("-"[2]))
            );
          });
        } else if (animation === "circle-complete") {
          setQuizCircles((prev) => {
            return prev.filter((p) => p.id !== Number(element.split("-"[2])));
          });
        }

        // node.classList.remove([...classes]);
        node.removeEventListener("animationend", handleAnimationEnd);

        resolve("Animation ended");
      }

      node.addEventListener("animationend", handleAnimationEnd);
    });

  function animatee(name, animation, custom = false, instruction = false) {
    const node =
      document.querySelector(name) ?? document.querySelector(`#${name}`);
    node.classList.add("animate__animated", animation);
    node.onanimationend = () => {
      node.classList.remove("animate__animated", animation);
    };
  }

  const renderPoints = () => {
    return (
      <>
        {pointsFeedback.map((p) => (
          <p
            key={p.id}
            id={`game-points-${p.id}`}
            className={styles.gamePoints}
            style={{
              color: p.points > 0 ? "#468554" : "#b95353",
              left: p.position[0] - 10,
              top: p.position[1] - 30,
            }}
          >{`${p.points > 0 ? "+" : ""}${p.points}`}</p>
        ))}
      </>
    );
  };

  const renderCircles = () => {
    return (
      <>
        {quizCircles.map((p) => (
          <div
            key={p.id}
            id={`quiz-circle-${p.id}`}
            className="quiz-circle"
            style={{ left: p.position[0] - 20, top: p.position[1] - 20 }}
          />
        ))}
      </>
    );
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    getFind();
  }, [find.list]);

  useEffect(() => {
    // console.log("FIND", find);
  }, [find]);

  const handleSkip = () => {
    let tempArr = find.list;
    tempArr.push(tempArr.shift());
    setFind((prev) => ({
      ...prev,
      list: tempArr,
    }));
    getFind();
  };

  const handleShow = () => {
    // manageClass(find.data.id || find.data.name, "animated zoomIn");
    const newID = Math.floor(Math.random() * 9999);
    const { element, bbox } = getCountryPos(find.simple, true);
    console.log("NEW CIRCLE", newID, bbox);
    setQuizCircles((prev) => [
      ...prev,
      {
        id: newID,
        animation: "circle-reveal",
        state: true,
        position: [
          Math.floor(bbox.x) + bbox.width / 2,
          Math.floor(bbox.y) + bbox.height / 2,
        ],
      },
    ]);
    handleGuess(find.simple.id ?? find.simple.name, true);
  };

  const handleSoundEffect = (sfx, options = {}) => {
    const [play, obj] = sfx;
    if (!isMuted) play();
  };

  const mapOptions = {
    isMuted,
    setMuted,
  };

  return (
    <div className={styles.game} bg={theme}>
      <div className={styles.quizPage} onMouseMove={handleMouseMove}>
        {quizType === "normal" && pointsFeedback.length > 0 ? (
          renderPoints()
        ) : (
          <p id="points-dummy" className={styles.gamePoints}></p>
        )}
        {quizType === "normal" && quizCircles.length > 0 ? (
          renderCircles()
        ) : (
          <div
            id="quiz-circle"
            className={styles.quizCircle}
            style={{ top: 25, left: 25 }}
          />
        )}
        {/* {generatedExtra?.map((g, idx) => (
          <g.Component
            key={idx}
            className={styles.bgExtra}
            style={{ top: g.top, left: g.left }}
          />
        ))} */}
        {/* <Banner /> */}
        <QuizHeader
          history={history}
          gameScore={guesses.score}
          total={find.totals.all}
          show={show}
          setShow={setShow}
          handles={{ handleSkip, handleShow, setResults, setMuted }}
          setGuessTime={setGuessTime}
          place={find?.simple}
          quizType={quizType}
          listCount={find?.list?.length}
          currentAttempts={currentAttempts}
          finished={finished}
          isMuted={isMuted}
        />
        {/* <ThemeSwitch theme={theme} setTheme={setTheme} /> */}
        {quizType === "normal" || quizType === "learn" ? (
          <NewLayout
            find={find}
            guesses={guesses}
            guiColour={guiColours[theme]}
            countryColour={countryColours["green"]}
            show={show}
            handleShow={handleShow}
            handleSkip={handleSkip}
            handleClick={handleClick}
            data={data}
            styles={styles}
            learn={quizType === "learn"}
            quizType={quizType}
            // time={gameTimer.time}
            mousePos={mousePos}
          />
        ) : quizType === "multipleChoice" ? (
          <MultipleChoice
            find={find}
            guesses={guesses}
            guiColour={guiColours[theme]}
            countryColour={countryColours["green"]}
            show={show}
            handleShow={handleShow}
            handleSkip={handleSkip}
            handleClick={handleClick}
            data={data}
            styles={styles}
            learn={quizType === "learn"}
            quizType={quizType}
            // time={gameTimer.time}
            mousePos={mousePos}
            sounds={{
              handle: handleSoundEffect,
              sounds: [correctSound, wrongSound],
            }}
          />
        ) : quizType === "hinted" ? (
          <NormalLayout
            find={find}
            guesses={guesses}
            guiColour={guiColours[theme]}
            countryColour={countryColours["green"]}
            show={show}
            handleShow={handleShow}
            handleSkip={handleSkip}
            handleClick={handleClick}
            data={data}
            mousePos={mousePos}
            modifier="hinted"
          />
        ) : (
          <h1>not found</h1>
        )}
      </div>
    </div>
  );

  function handleGuess(place, skipped = false, options = {}) {
    const isCorrect =
      place === find.simple?.id || place === find.simple.name ? true : false;

    const { tries, skipAnimation } = options;
    // console.log("options", options);

    if (skipped === true) {
      manageScore("skipped");
      // console.log(place, find.list, find.simple);
      setGuesses((prevData) => ({
        ...prevData,
        answers: {
          ...prevData.answers,
          skipped: !guesses.answers.skipped.includes(place)
            ? [...prevData.answers.skipped, place]
            : prevData.answers.skipped,
        },
      }));
      setFind((prev) => ({
        ...prev,
        list: prev.list.filter((c) => c !== place),
        previous: place,
        data: manageClass(place, "complete-reveal", find.data),
      }));
      // animate(find.simple.id ?? find.simple.name, "zoomIn");
    } else if (isCorrect) {
      if (!skipAnimation) handleSoundEffect(correctSound);
      setFind((prevData) => ({
        ...prevData,
        list: prevData.list.filter((c) => c !== place),
      }));
      setGuesses((prevData) => ({
        ...prevData,
        answers: {
          ...prevData.answers,
          correct: [
            ...prevData.answers.correct,
            { place: place, attempts: currentAttempts },
          ],
        },
        score: {
          ...prevData.score,
          marks: prevData.score.marks + 1,
        },
      }));
      setFind((prev) => ({
        ...prev,
        data: completeGuess(place, currentAttempts, find.data),
        animSkip: skipAnimation,
      }));
      setFind((prev) => ({
        ...prev,
        previous: place,
        data: !skipAnimation
          ? manageClass(place, "complete", find.data)
          : prev.data,
      }));
    } else {
      manageScore("wrong");
      setCurrentAttempts((prev) => {
        if (prev > 0) return 2;
        return prev + 1;
      });
      setGuesses((prevData) => ({
        ...prevData,
        answers: {
          ...prevData.answers,
          wrong: !guesses.answers.wrong.includes(place)
            ? [...prevData.answers.wrong, place]
            : prevData.answers.wrong,
        },
        score: {
          ...prevData.score,
          misses: prevData.score.misses + 1,
        },
      }));
      if (!skipAnimation) {
        animate(place, "wrongSelect", "", true);
        handleSoundEffect(wrongSound, { rate: 0.1 });
      }
      if (tries === currentAttempts + 1) {
        setFind((prev) => ({
          ...prev,
          list: prev.list.filter((d, i) => i !== 0),
          data: completeGuess(place, currentAttempts, find.data),
          previous: place,
          animSkip: true,
        }));
      }
    }
  }
}

export default QuizPage;
