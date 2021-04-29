import React, { useState, useEffect } from "react";

import styles from "../../Quiz/quiz.module.scss";

export default function DisplayMap(props) {
  const { mapValues, options, handles, updates } = props ?? {};

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const { dataFor, id, locked, learn } = options;
  const { svgData, mapData, solos } = mapValues;
  const { handleClick } = handles;
  const { search, find } = updates;

  return (
    <svg
      className={styles.gameMap}
      id="learn-map"
      data-for={"search"}
      data-locked={locked}
      data-tip={!learn ? "true" : null}
      viewBox={svgData.viewBox ?? "0 0 898 690"}
      label={svgData.label}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsEv="http://www.w3.org/2001/xml-events"
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0.5" dy="1.4" stdDeviation=".5" />
        </filter>
      </defs>
      <RenderElements {...options} {...mapValues} {...handles} {...updates} />
    </svg>
  );
}

function RenderElements(props) {
  const { mapData, svgData, search, solos } = props;

  const groups =
    svgData?.elements &&
    svgData.elements.map((obj, idx) => {
      if (obj.render.length < 1) return;

      const elements = obj.render.map((e, _idx) => {
        let element = <></>;
        let elementProps = { key: _idx, ...e.attributes };

        if (solos?.length > 0 && solos.includes(obj.id))
          elementProps["data-hidden"] = true;

        if (e.type === "path") element = <path {...elementProps} />;
        else if(e.type === "rect") element = <rect { ...elementProps } style={{ fill: "red", opacity: "0" }} />;
            // prettier-ignore
            else if(e.type === "circle") element = <ellipse { ...elementProps } style={{ fill: "white", fillOpacity: "0", stroke: "rgb(228,95,95)", strokeWidth: "2px" }} />;
        return element;
      });

      const handles = getHandles({ key: idx, id: obj.id });
      // prettier-ignore
      const answer = mapData?.[obj.id]?.name === search ? { ["data-answer"]: true } : {};
      return (
        <g {...handles} {...answer}>
          {elements}
        </g>
      );
    });

  return <>{groups}</>;

  function getHandles(_values, mapType = "quiz") {
    const { key, id } = _values;
    const { small, assist, name, toolTipPos, toolTipOffset, finished, colour } =
      mapData?.[id] ?? {};

    const datas = {
      ["data-small"]: small ? true : false,
      ["data-assist"]: assist ? true : false,
      ["data-tip"]: name,
      ["data-for"]: "search",
      ["data-place"]: toolTipPos ?? null,
      ["data-offset"]: toolTipOffset ?? null,
      ["data-attempts"]: finished ?? "",
      fill: colour ?? "#e67",
    };

    return {
      ..._values,
      ...datas,
    };
  }
}
