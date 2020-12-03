import React from "react";
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
      {title && items && <div className="contents-item">
        {items.map(i => (
          <Link to={i.link}>
          <div className="contents-item-link">
            <img src={i.img} className="contents-item-link-img" alt={i.name} />
            <p className="contents-item-link-name">{i.name}</p>
          </div>
          </Link>
        ))}
      </div>}
    </div>
  )
}

export default function Contents({ match }) {
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
          img: require("../../assets/images/game/links/europe-countries.png")
        },
        {
          name: "Europe Capitals",
          link: "/quiz/europe/capitals",
          img: require("../../assets/images/game/links/europe-countries.png")
        }
      ]
    },
    {
      title: "North America",
      items: [
        {
          name: "NA Countries",
          link: "/quiz/north-america/countries",
          img: require("../../assets/images/game/links/europe-countries.png")
        },
        {
          name: "NA Capitals",
          link: "/quiz/north-america/capitals",
          img: require("../../assets/images/game/links/europe-countries.png")
        },
        {
          name: "USA States",
          link: "/quiz/north-america/states",
          img: require("../../assets/images/game/links/europe-countries.png")
        },
        {
          name: "State Capitals",
          link: "/quiz/north-america/state-capitals",
          img: require("../../assets/images/game/links/europe-countries.png")
        }
      ]
    },
    {
      title: "Asia",
      items: [
        {
          name: "Asia Countries",
          link: "/quiz/asia/countries",
          img: require("../../assets/images/game/links/europe-countries.png")
        },
        {
          name: "Asia Capitals",
          link: "/quiz/asia/capitals",
          img: require("../../assets/images/game/links/europe-countries.png")
        }
      ]
    },
    {
      title: "Africa",
      items: [
        {
          name: "Africa Countries",
          link: "/quiz/africa/countries",
          img: require("../../assets/images/game/links/europe-countries.png")
        },
        {
          name: "Africa Capitals",
          link: "/quiz/africa/capitals",
          img: require("../../assets/images/game/links/europe-countries.png")
        }
      ]
    },
    {
      title: "South America",
      items: [
        {
          name: "SA Countries",
          link: "/quiz/south-america/countries",
          img: require("../../assets/images/game/links/europe-countries.png")
        },
        {
          name: "SA Capitals",
          link: "/quiz/south-america/capitals",
          img: require("../../assets/images/game/links/europe-countries.png")
        }
      ]
    },
    {
      title: "Oceania",
      items: [
        {
          name: "Oceania Countries",
          link: "/quiz/oceania/countries",
          img: require("../../assets/images/game/links/europe-countries.png")
        },
        {
          name: "Oceania Capitals",
          link: "/quiz/oceania/capitals",
          img: require("../../assets/images/game/links/europe-countries.png")
        }
      ]
    }
  ]

  return (
    <div className="contents-page">
      <div className="contents-header">
        <h2>{contents}</h2>
        <p>Ready to take on some Quizzes?</p>
      </div>
      <div className="contents-list-wrapper">
          <aside className="contents-filter">
            <h3>side filters</h3>
          </aside>
          <section className="contents-list">
            <h1>content here</h1>
            {/* {linksList.map(l => <Contents data={l} />)} */}
          </section>
      </div>
    </div>
  );
}
