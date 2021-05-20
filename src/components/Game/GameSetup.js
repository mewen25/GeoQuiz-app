import React, { useState, useEffect, useContext } from "react";
import _ from "lodash";
import QuizPage from "../Quiz/QuizPage";
import PreQuizModal from "../Quiz/Modal/PreQuizModal";
import EndModal from "../Quiz/Modal/EndModal";
import gameData from "../../data/config/continentData";
import { GameContext } from "../Utils/gameContext";
import { useHistory } from "react-router-dom";

export default function GameSetup({ match }) {
  const { setHeaderState } = useContext(GameContext);
  const [quizValues, setQuizValues] = useState({});
  const [show, setShow] = useState(true);
  const [finished, setFinished] = useState(false);
  const history = useHistory();
  const [keyTest, setKeyTest] = useState("quiz");
  const [quizType, setQuizType] = useState("normal");
  const [results, setResults] = useState({});
  const [customData, setCustomData] = useState(null);

  const [modeList, setModeList] = useState([]);

  const gameSetup = () => {
    let data = _.cloneDeep(gameData[match.params.continent]);
    if (data && match.params.quiz) {
      if (!data?.mode?.[match?.params?.quiz]) loadFailed();
      else {
        console.log("SETUP", data);
        setModeList(getModes(data?.mode));
        setKeyTest();
        setQuizValues((prev) => ({
          info: {
            continent: data.continent,
            mode: data.mode[match.params.quiz].title,
            quizType: data.mode[match.params.quiz].quizType,
            count:
              data?.mode?.[match.params.quiz]?.data &&
              Object.entries(data.mode[match.params.quiz].data).length,
          },
          continentId: data.continentId,
          regions: data.regions ?? {},
          continent: data.continent,
          map: data.mode[match.params.quiz].map,
          data: customData ?? data.mode[match.params.quiz].data,
          allData: data.mode[match.params.quiz].data,
          layout: data.mode[match.params.quiz].layout || "normal",
          bgImage: getBGImage(data.continentId),
        }));
      }
    }
  };

  function getBGImage(key) {
    let img = null;
    try {
      img = require(`../../assets/maps/${key}_bg.svg`);
    } catch (e) {}
    return img;
  }

  function getModes(list) {
    let temp = [];
    if (!list) return temp;
    for (var key in list) {
      temp.push({
        label: key === "countries" ? "Default" : list[key]?.title,
        modeName: key === "countries" ? "default" : key,
      });
    }
    temp.push({
      label: "Learn",
      modeName: "learn",
    });
    return temp;
  }

  function dataRefresh() {
    // setCustomData(null);
    setKeyTest("modeReset");
    console.log("done", keyTest, quizValues.map);
    setQuizValues((prev) => ({ ...prev, data: _.cloneDeep(prev?.allData) }));
  }

  function loadFailed() {
    history.push("/quiz");
  }

  useEffect(() => {
    if (show && !finished) {
      console.log("reset???");
      dataRefresh();
    }
  }, [show]);

  useEffect(() => {
    // console.log(match, match.params, history.location);

    if (!match.params.quiz) {
      // history.go(`/quiz/europe/countries`);
      history.replace(`${history.location.pathname}/countries`);
      return;
    }

    gameSetup();
    setHeaderState(false);

    return () => {
      setHeaderState(true);
    };
  }, [match]);

  const getPathInfo = (path) => {
    const newPath = path.slice(1).split("/");
    return {
      type: newPath[0],
      continent: newPath[1],
      mode: newPath[2],
      fullPath: path.slice(1),
    };
  };

  const modalModes = [
    {
      label: "Default",
      modeName: "default",
    },
    {
      label: "Multiple Choice",
      modeName: "multiple-choice",
    },
    {
      label: "Learn",
      modeName: "learn",
    },
  ];

  const handleGameStart = (mode, list) => {
    console.log("start game?", mode, list);
    const path = getPathInfo(history.location.pathname);
    // console.log("Handling start", mode, path);
    history.replace(
      `${
        mode === "default"
          ? "countries"
          : mode === "learn"
          ? `${path.mode}`
          : mode
      }`
    );
    setKeyTest("quiz");
    if (mode.split("-").includes("choice")) {
      setQuizType("multipleChoice");
    } else if (mode === "learn") {
      setQuizType("learn");
    } else setQuizType("normal");

    let _list = {};
    if (list && Array.isArray(list)) {
      list.forEach((l) => {
        const _data = quizValues.data?.[l];
        if (_data) {
          _list[_data.id ?? _data.name] = _data;
        }
      });
      console.log("changing", quizValues.data, "to", _list);
      setCustomData(_list);
    }
    setShow(false);

    // setQuizValues((prev) => {
    //   let _list = {};
    //   if (list && Array.isArray(list)) {
    //     list.forEach((l) => {
    //       const _data = prev.data?.[l];
    //       if (_data) {
    //         _list[_data.id ?? _data.name] = _data;
    //       }
    //     });
    //     console.log("changing", prev.data, "to", _list);
    //   } else _list = prev.allData;
    //   return {
    //     ...prev,
    //     data: _list,
    //     ready: true,
    //   };
    // });
  };

  // useEffect(() => {
  //   if (quizValues.ready) {
  //     console.log("starting", quizValues);
  //     setShow(false);
  //   }
  // }, [customData]);

  useEffect(() => {
    if (!finished && !show) {
      setShow(true);
      dataRefresh();
    }
  }, [finished]);

  return (
    <>
      {quizValues?.map ? (
        <QuizPage
          key={keyTest}
          show={show}
          setShow={setShow}
          setFinished={setFinished}
          finished={finished}
          data={quizValues}
          quizType={quizType}
          setResults={setResults}
        />
      ) : null}
      <EndModal
        show={finished}
        handleButton={setFinished}
        info={{
          title: "Total Score",
          sub: "0",
        }}
        stats={results}
      />
      <PreQuizModal
        info={{
          title: `${quizValues?.info?.continent} ${quizValues?.info?.mode} Quiz`,
          sub: `${quizValues?.info?.count} Countries`,
        }}
        modalModes={modeList}
        show={show && !finished}
        modeSelected={match?.params?.quiz ?? null}
        gameStart={handleGameStart}
        quizData={quizValues?.data}
        regions={quizValues?.regions}
      />
    </>
  );
}
