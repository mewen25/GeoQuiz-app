import React, { useState, useEffect } from "react";

export default function SearchList(props) {
  const [thisStyle, setThisStyle] = useState(props.style);

  useEffect(() => {
    setThisStyle(props.style);
  }, [props.state]);

  return <p style={thisStyle}>{props.text}</p>;
}
