import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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

import { ReactComponent as Exit } from "../../assets/images/game/exit.svg";

import NormalLayout from "./NormalLayout";
import MultipleChoice from "./MultipleChoiceLayout";
// import HintedLayout from "./HintedLayout";

import QuizInfos from "./Infos/QuizInfos";
import QuizHeader from "./QuizHeader";
import CreateMap from "../../pages/Game/CreateMap";
import ThemeSwitch from "../Utils/Game/ThemeSwitch";
import SmallsPanel from "./Infos/SmallsPanel";
import "../Game/game1.css";
import "./quiz.css";
import svgData from "../../data/mapData/Continents/Europe/old/svgData";
// import { useTimer } from "use-timer";


const countryColours = {
  blue: ["#CBE0ED", "#CCE3F2"],
  green: ["#3E7D53", "#4A9B61"],
  yellow: ["#F5E158", "#FCEB7B"],
  red: ["#F55858", "#FC7B7B"],
};
const guiColours = {
  blue: ["#90AEDB", "#fff"],
  green: ["#90AEDB", "#fff"],
  yellow: ["#90AEDB", "#fff"],
  red: ["#90AEDB", "#fff"],
};

function QuizPage({ show, data }) {
  // const gameTimer = useTimer();
  const [theme, setTheme] = useState("blue");
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
  const [currentAttempts, setCurrentAttempts] = useState(0);
  const continent = data.continent;
  const [listArr, setListArr] = useState([]);
  let history = useHistory();
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const smalls = Object.values(data.data)
      .reduce((acc, cur) => {
        return cur.small ? [...acc, cur] : [...acc];
      }, [])
      .sort((a, b) => a.small.order - b.small.order);
    const assists = Object.values(data.data).reduce((acc, cur) => {
      return cur.assist ? [...acc, cur] : [...acc];
    }, []);
    setFind((prev) => ({
      ...find,
      smalls: smalls,
      assists: assists,
    }));

    window.addEventListener("click", updateMousePosition);

    return () => window.removeEventListener("click", updateMousePosition);
  }, []);

  useEffect(() => {
    // if(!show) gameTimer.start();
  }, [show])

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

  useEffect(() => {
    for (var small of find.smalls) {
      const place = document.querySelector(`#${small.id || small.name}`);
      if (!place) continue;
      const bbox = place.getBBox();
      appendSVGChild("circle", place, {
        class: "small-helper",
        fill: `${small.styles[0]}`,
        cx: `${bbox.x + 5}`,
        cy: `${bbox.y + 5}`,
        r: "10",
      });
    }
  }, [find?.smalls]);

  useEffect(() => {
    for (var assist of find.assists) {
      const place = document.querySelector(`#${assist.id || assist.name}`);
      if (!place) continue;
      const bbox = place.getBBox();
      const path = place.children[0];
      console.log(assist, bbox);
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
          fill: "orange",
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

  const updateMousePosition = (ev) => {
    setMousePos({ x: ev.clientX, y: ev.clientY });
    console.log(ev.clientX, ev.clientY);
  };

  useEffect(() => {
    if (!find.data) return;
    setFind((prevData) => ({
      ...prevData,
      data: assignColour(countryColours[theme], find.data),
    }));
  }, [theme]);

  useEffect(() => {
    if (!find.previous) return;
    // animate(find.previous, "pulsey", "", true);
    // animate(".quiz-page", "wipe", "", true);
    if (currentAttempts < 1)
      animate(".quiz-circle", "circle-complete", "", true);
  }, [find.previous]);

  const getFind = () => {
    const totalCountries = find.totals.all;
    if (guesses.answers.correct.length < totalCountries && find.list[0]) {
      setCurrentAttempts(0);
      const place = find.data[find.list[0]].name;
      const distSorted = sortDistance(find.data[find.list[0]]?.id || place);
      const distScored = sortedData(
        find.data[find.list[0]?.id] || place,
        find.data
      );
      // console.log(place, find.data);
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
    }
  };

  const handleClick = (event) => {
    const clicked = event?.currentTarget?.id || event;
    const list = find.data;
    if (list[clicked].class.includes("complete")) return;

    const place = find.data[clicked].id || find.data[clicked].name;
    setGuesses((prevData) => ({
      ...prevData,
      current: place,
    }));
    handleGuess(place);
  };

  const manageScore = (state) => {
    let newPoints;
    const maxPoints = 200;
    let score = guesses.score.score;
    const thisTime = 0; //time;
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
          score: score + newPoints,
        },
      }));
    }
    // setPointFeedback({
    //   points: newPoints,
    //   state: true,
    // });
    // animate("#game-pointsScore", "fadeOutUp", false, true);
  };

  const animate = (element, animation, prefix = "animate__", custom = false) =>
    new Promise((resolve, reject) => {
      var classes = [];
      if (!custom) classes.push(`${prefix}animated`);
      classes.push(`${!custom ? prefix : ""}${animation}`);
      // const animationName = `${!custom ? prefix : ""}${animation}`;
      const node =
        document.querySelector(element) ??
        document.querySelector(`#${element}`);

      if (!custom) node.classList.add(classes[0], classes[1]);
      else node.classList.add(classes[0]);
      // node.classList.add([...classes]);

      function handleAnimationEnd() {
        if (!custom) node.classList.remove(classes[0], classes[1]);
        else node.classList.remove(classes[0]);

        // node.classList.remove([...classes]);
        node.removeEventListener("animationend", handleAnimationEnd);

        resolve("Animation ended");
      }

      node.addEventListener("animationend", handleAnimationEnd);
    });

  function animatee(name, animation, custom = false, instruction = false) {
    const node =
      document.querySelector(name) ?? document.querySelector(`#${name}`);
    console.log("name", name, node);
    node.classList.add("animate__animated", animation);
    node.onanimationend = () => {
      node.classList.remove("animate__animated", animation);
    };
  }

  useEffect(() => {
    getFind();
  }, [find.list]);

  const handleSkip = () => {
    let tempArr = find.list;
    tempArr.push(tempArr.shift());
    setFind((prev) => ({
      ...prev,
      list: tempArr,
    }));
    getFind();
  };

  const handleShow = () => {};

  return (
    <div className="game" bg={theme}>
      <div className="quiz-page">
        <Exit className="exit" onClick={() => history.push("/")} />
        {/* <QuizHeader /> */}
        <ThemeSwitch theme={theme} setTheme={setTheme} />
        {data.layout === "normal" ? (
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
            // time={gameTimer.time}
            mousePos={mousePos}
          />
        ) : data.layout === "multipleChoice" ? (
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
            mousePos={mousePos}
          />
        ) : data.layout === "hinted" ? (
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

  function handleGuess(place) {
    const isCorrect =
      place === find.simple?.id || place === find.simple.name ? true : false;
    if (isCorrect) {
      manageScore("correct");
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
      }));
      setFind((prev) => ({
        ...prev,
        previous: place,
        data: manageClass(place, "complete", find.data),
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
      animate(place, "wrongSelect", "", true);
    }
  }
}

export default QuizPage;
