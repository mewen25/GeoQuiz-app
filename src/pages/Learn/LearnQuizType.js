import React, { useState, useEffect } from "react";

export default function LearnQuizType(props) {
  const [prevType, setPrevType] = useState(undefined);
  const [types, setTypes] = useState({
    country: {
      done: false,
      current: false,
    },
    capital: {
      done: false,
      current: false,
    },
    flag: {
      done: false,
      current: false,
    },
  });

  useEffect(() => {
    setPrevType(props.type);
  }, []);

  useEffect(() => {
    setPrevType(props.type);
    var newTypeObj = Object.assign({}, types);
    newTypeObj[props.type].current = true;
    if (prevType) {
      newTypeObj[prevType] = {
        done: true,
        current: false,
      };
    }
    setTypes(newTypeObj);
  }, [props.type]);

  return (
    <div className="learn-quiz-types">
      <p
        style={{
          margin: "5px",
          padding: "0 4px",
          backgroundColor: types["country"].current ? "#72C54B" : null,
        }}
      >
        Countries
      </p>
      <p
        style={{
          margin: "5px",
          padding: "0 4px",
          backgroundColor: types["capital"].current ? "#72C54B" : null,
        }}
      >
        Capitals
      </p>
      <p
        style={{
          margin: "5px",
          padding: "0 4px",
          backgroundColor: types["flag"].current ? "#72C54B" : null,
        }}
      >
        Flags
      </p>
    </div>
  );
}
