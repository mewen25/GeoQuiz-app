import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const SelectContinent = props => {
  let btnPath = `/game/${props.linkTitle}`;
  if (props.disabled == true) {
    btnPath = "/";
  }
  return (
    <div>
      <LinkContainer to={btnPath}>
        <button
          className={
            props.disabled == true ? "selectBtn disabled" : "selectBtn"
          }
          id={props.name}
        >
          {props.title}
        </button>
      </LinkContainer>
    </div>
  );
};

export default SelectContinent;
