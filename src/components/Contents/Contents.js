import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import data from "../../data/gameData/gameSelect";
import QuizLink from "./QuizLink";
import "./Contents.css";

const ContentsItem = ({ data }) => {
  const { title, items } = data;
  console.log("itm", title, items);
  return (
    <div className="contents-items-container">
      <h2>{title}</h2>
      {title && items && <div className="contents-items">
        {items.map(i => (
          <Link to={i.link} className="contents-item">
            <img src={i.img} className="contents-item-link-img" alt={i.alt ?? i.name} />
            <p className="contents-item-link-name">{i.name}</p>
          </Link>
        ))}
      </div>}
    </div>
  )
}

const FilterItem = ({ data, filterClick, selected, modeClick }) => {
  const { heading, state, selectColour, items } = data;
  return (
    <div className="filter-items" data-filterState={data.state}>
      <h3>{heading}</h3>
      {state === "mode" ? items.map(i => (
        <h5 data-selectedMode={selected === i ? "true" : "false"} onClick={() => modeClick(i)}>{i}</h5>
      )) : items.map(i => (
        <h5 onClick={() => filterClick(i.state)}>{i}</h5>
      ))}
    </div>
  )
}

export default function Contents({ match }) {
  const [mode, setMode] = useState("Default");

  // const history = useHistory();
  // console.log(match);
  // let { contents } = match.params ?? {};
  // contents = contents[0].toUpperCase()+contents.slice(1)
  // if (contents !== "Quiz" && contents !== "Learn") history.push("/");
  const contents = "quizz";

  // const links = Object.values(data[0]).map(l => {
  //     console.log(l);
  //     return [...l?.quiz?.links, ...l?.learn?.links]
  // });

  // console.log("links boi", links);

  const linksList = [
    {
      title: "Europe",
      items: [
        {
          name: "Europe Countries",
          link: "/quiz/europe/countries",
          alt: "europe-countries",
          img: require("../../assets/images/game/links/europe-countries.png")
        },
        {
          name: "Europe Capitals",
          link: "/quiz/europe/capitals",
          alt: "europe-capitals",
          img: require("../../assets/images/game/links/europe-capitals.png")
        }
      ]
    },
    {
      title: "North America",
      items: [
        {
          name: "NA Countries",
          link: "/quiz/north-america/countries",
          img: require("../../assets/images/game/links/NA-countries.png"),
          alt: "north-america-countries",
        },
        {
          name: "NA Capitals",
          link: "/quiz/north-america/capitals",
          img: require("../../assets/images/game/links/NA-capitals.png"),
          alt: "north-america-capitals",
        },
        {
          name: "USA States",
          link: "/quiz/north-america/states",
          img: require("../../assets/images/game/links/NA-states.png"),
          alt: "us-states",
        },
        {
          name: "State Capitals",
          link: "/quiz/north-america/state-capitals",
          img: require("../../assets/images/game/links/NA-state-capitals.png"),
          alt: "us-state-capitals",
        }
      ]
    },
    {
      title: "Asia",
      items: [
        {
          name: "Asia Countries",
          link: "/quiz/asia/countries",
          img: require("../../assets/images/game/links/asia-countries.png"),
          alt: "asia-countries",
        },
        {
          name: "Asia Capitals",
          link: "/quiz/asia/capitals",
          img: require("../../assets/images/game/links/asia-capitals.png"),
          alt: "asia-capitals",
        }
      ]
    },
    {
      title: "Africa",
      items: [
        {
          name: "Africa Countries",
          link: "/quiz/africa/countries",
          img: require("../../assets/images/game/links/africa-countries.png"),
          alt: "africa-countries",
        },
        {
          name: "Africa Capitals",
          link: "/quiz/africa/capitals",
          img: require("../../assets/images/game/links/africa-capitals.png"),
          alt: "africa-capitals",
        }
      ]
    },
    {
      title: "South America",
      items: [
        {
          name: "SA Countries",
          link: "/quiz/south-america/countries",
          img: require("../../assets/images/game/links/SA-countries.png"),
          alt: "SA-countries",
        },
        {
          name: "SA Capitals",
          link: "/quiz/south-america/capitals",
          img: require("../../assets/images/game/links/SA-capitals.png"),
          alt: "SA-capitals",
        }
      ]
    },
    {
      title: "Oceania",
      items: [
        {
          name: "Oceania Countries",
          link: "/quiz/oceania/countries",
          img: require("../../assets/images/game/links/oceania-countries.png"),
          alt: "oceania-countries",
        },
        {
          name: "Oceania Capitals",
          link: "/quiz/oceania/capitals",
          img: require("../../assets/images/game/links/oceania-capitals.png"),
          alt: "oceania-capitals",
        }
      ]
    }
  ]

  const filtersList = [
    {
      heading: "Game Mode",
      state: "mode",
      selectColour: "#F67A98",
      items: [
        "Default",
        "Multiple",
        "Hinted"
      ]
    },
    {
      heading: "Quiz",
      state: "quiz",
      selectColour: "#7ACAF6",
      items: [
        "Europe",
        "Asia",
        "North America",
        "Africa",
        "Oceania",
        "South America",
        "States & Provinces"
      ]
    },
    {
      heading: "Learn",
      state: "learn",
      selectColour: "#C0F67A",
      items: [
        "Europe",
        "States & Provinces"
      ]
    }
  ]

  const handleFilterClick = (state) =>  {
    console.log(state);
  }

  const handleModeClick = (newMode) => setMode(newMode);

  return (
    <div className="contents-page">
      <div className="contents-header">
        <h2>{contents}</h2>
        <p>Ready to take on some Quizzes?</p>
      </div>
      <div className="contents-list-wrapper">
          <aside className="contents-filter">
            <div className="filter-wrapper">
            {filtersList.map(f => <FilterItem data={f} selected={mode} modeClick={handleModeClick} filterClick={handleFilterClick} />)}
            </div>
          </aside>
          <section className="contents-list">
            {linksList.map(l => <ContentsItem data={l} />)}
          </section>
      </div>
    </div>
  );
}
