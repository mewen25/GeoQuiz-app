import React from "react";
import SearchList from "./SearchList";
import LearnQuizType from "./LearnQuizType";

export default function LearnQuizInfo(props) {
  return (
    <div className="learn-quiz-infos">
      <div className="learn-quiz-contents" data-aos="zoom-in">
        <h2 id="learn-quiz-search">
          Where is: <br />
          <span style={{ color: "#FF720C", textTransform: "uppercase" }}>
            {props.searchType != "flag" ? props.find : <img src={props.find} />}
          </span>
        </h2>
        <div className="learn-quiz-contents-places" data-aos="zoom-in">
          {props.searchType != "flag"
            ? props.searchList[props.searchType].map((c) => (
                <SearchList
                  text={c}
                  style={
                    !props.listArr[props.searchType].includes(c)
                      ? props.getHighlightColour()
                      : null
                  }
                  state={
                    !props.listArr[props.searchType].includes(c) ? true : false
                  }
                  misses={props.misses}
                />
              ))
            : null}
        </div>
      </div>
      <LearnQuizType type={props.searchType} />
    </div>
  );
}
