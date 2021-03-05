import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function QuickItem({ data }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={data.link}
      className="contents-quickItem"
      style={{
        ...data.style,
        boxShadow: `0px 5px 0px ${data.shadow}`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="contents-quickItem-img">
        <img src={data.img} alt={data.alt} />
      </div>
      <div className="contents-quickItem-title">{data.title}</div>
    </Link>
  );
}
