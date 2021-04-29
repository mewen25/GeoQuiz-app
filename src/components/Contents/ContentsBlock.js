import React from "react";
import { Link } from "react-router-dom";

export default function ContentsBlock({ data }) {
  return (
    <div className="contents-block">
      <div className="contents-block-title">
        <h4>{data.title}</h4>
        <img src={data.img} alt="" />
      </div>
      <ul className="contents-block-list">
        {data?.items?.map((l, idx) => (
          <Link key={idx} to={l.link}>
            <li>{l.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
