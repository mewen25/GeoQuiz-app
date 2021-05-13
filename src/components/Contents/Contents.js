import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import data from "../../data/config/continentData";
import QuizLink from "./QuizLink";
import "./Contents.css";
import "./contents.scss";
import QuickItem from "./QuickItem";
import ContentsBlock from "./ContentsBlock";

const ContentsItem = ({ data }) => {
  const { title, items } = data;
  console.log("itm", title, items);
  return (
    <div className="contents-items-container">
      <h2>{title}</h2>
      {title && items && (
        <div className="contents-items">
          {items.map((i, idx) => (
            <Link key={idx} to={i.link} className="contents-item">
              <img
                src={i.img}
                className="contents-item-link-img"
                alt={i.alt ?? i.name}
              />
              <p className="contents-item-link-name">{i.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterItem = ({ data, filterClick, selected, modeClick }) => {
  const { heading, state, selectColour, items } = data;
  return (
    <div className="filter-items" data-filterState={data.state}>
      <h3>{heading}</h3>
      {state === "mode"
        ? items.map((i, idx) => (
            <h5
              key={idx}
              data-selectedMode={selected === i ? "true" : "false"}
              onClick={() => modeClick(i)}
            >
              {i}
            </h5>
          ))
        : items.map((i, idx) => (
            <h5 key={idx} onClick={() => filterClick(i.state)}>
              {i}
            </h5>
          ))}
    </div>
  );
};

export default function Contents({ match }) {
  const [mode, setMode] = useState("Default");
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const _scrolled = winScroll / height;

      setScrolled(_scrolled > 0 ? true : false);
    });
  }, []);

  const linksList = [
    {
      title: "Europe",
      img: require("../../assets/images/game/links/europe-countries.png"),
      items: [
        {
          name: "Europe Countries",
          link: "/quiz/europe/countries",
        },
        {
          name: "Europe Capitals",
          link: "/quiz/europe/capitals",
        },
      ],
    },
    {
      title: "North America",
      img: require("../../assets/images/game/links/NA-countries.png"),
      items: [
        {
          name: "NA Countries",
          link: "/quiz/north-america/countries",
        },
        {
          name: "NA Capitals",
          link: "/quiz/north-america/capitals",
          img: require("../../assets/images/game/links/NA-capitals.png"),
          alt: "north-america-capitals",
        },
      ],
    },
    {
      title: "United States",
      img: require("../../assets/images/game/links/NA-states.png"),
      items: [
        {
          name: "USA States",
          link: "/quiz/north-america/states",
        },
        {
          name: "State Capitals",
          link: "/quiz/north-america/state-capitals",
        },
      ],
    },
    {
      title: "Asia",
      img: require("../../assets/images/game/links/asia-countries.png"),
      items: [
        {
          name: "Asia Countries",
          link: "/quiz/asia/countries",
        },
        {
          name: "Asia Capitals",
          link: "/quiz/asia/capitals",
        },
      ],
    },
    {
      title: "Africa",
      img: require("../../assets/images/game/links/africa-countries.png"),
      items: [
        {
          name: "Africa Countries",
          link: "/quiz/africa/countries",
        },
        {
          name: "Africa Capitals",
          link: "/quiz/africa/capitals",
        },
      ],
    },
    {
      title: "South America",
      img: require("../../assets/images/game/links/SA-countries.png"),
      items: [
        {
          name: "SA Countries",
          link: "/quiz/south-america/countries",
        },
        {
          name: "SA Capitals",
          link: "/quiz/south-america/capitals",
        },
      ],
    },
    {
      title: "Oceania",
      img: require("../../assets/images/game/links/oceania-countries.png"),
      items: [
        {
          name: "Oceania Countries",
          link: "/quiz/oceania/countries",
        },
        {
          name: "Oceania Capitals",
          link: "/quiz/oceania/capitals",
        },
      ],
    },
  ];

  const popularList = [
    {
      title: (
        <p>
          Europe <br />
          <span>Countries</span>
        </p>
      ),
      img: require("../../assets/images/contents/europe_countries.png"),
      alt: "europe_countries",
      link: "/quiz/europe/countries",
      shadow: "#4A95CB",
      style: {
        backgroundColor: "#5BB0ED",
        color: "#fff",
      },
    },
    {
      title: <span>US States</span>,
      img: require("../../assets/images/contents/us_states.png"),
      alt: "us_states",
      link: "/quiz/north-america/states",
      shadow: "#D0AB27",
      style: {
        backgroundColor: "#FFD541",
        color: "#192B4D",
      },
    },
    {
      title: (
        <p>
          Asia <br />
          <span>Countries</span>
        </p>
      ),
      img: require("../../assets/images/contents/asia_countries.png"),
      alt: "asia_countries",
      link: "/quiz/asia/countries",
      shadow: "#7E2121",
      style: {
        backgroundColor: "#B82E2E",
        color: "#fff",
      },
    },
    {
      title: (
        <p>
          Europe <br />
          <span>Capitals</span>
        </p>
      ),
      img: require("../../assets/images/contents/europe_capitals.png"),
      alt: "europe_capitals",
      link: "/quiz/europe/capitals",
      shadow: "#667B42",
      style: {
        backgroundColor: "#8DAA5C",
        color: "#fff",
      },
    },
  ];

  const filtersList = [
    {
      heading: "Game Mode",
      state: "mode",
      selectColour: "#F67A98",
      items: ["Default", "Multiple", "Learn"],
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
        "States & Provinces",
      ],
    },
    // {
    //   heading: "Learn",
    //   state: "learn",
    //   selectColour: "#C0F67A",
    //   items: ["Europe", "States & Provinces"],
    // },
  ];

  const handleFilterClick = (state) => {
    console.log(state);
  };

  const handleModeClick = (newMode) => setMode(newMode);

  return (
    <div className="contents-page">
      <div className="contents-page-container">
        <div className="filter-top-extra" />

        <div className="contents-header">
          <h3>Choose a quiz</h3>
        </div>
        <div className="contents-list-wrapper">
          <aside
            className="contents-filter"
            style={{ paddingTop: scrolled ? "8%" : null }}
          >
            <div className="filter-wrapper">
              {filtersList.map((f, idx) => (
                <FilterItem
                  key={idx}
                  data={f}
                  selected={mode}
                  modeClick={handleModeClick}
                  filterClick={handleFilterClick}
                />
              ))}
            </div>
          </aside>
          <main className="contents-list">
            <section className="contents-popular">
              {popularList.map((p, idx) => (
                <QuickItem key={idx} data={p} />
              ))}
            </section>
            <section className="contents-block-container">
              {linksList.map((l, idx) => (
                <ContentsBlock key={idx} data={l} />
              ))}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
