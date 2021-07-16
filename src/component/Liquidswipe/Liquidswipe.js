import React, { useRef, useState, useEffect } from "react";
import { Page } from "./Page";
import "./styles/style.css";

export const Liquidswipe = ({ components, style }) => {
  const sizeOfSwipe = components.length;
  const [isActive, setActive] = useState(0);
  const [elm, setElm] = useState();
  const parentElement = useRef(null);

  useEffect(() => {
    setElm(
      <Page
        key={isActive}
        index={isActive}
        prev={components[isActive - 1] || null}
        current={components[isActive]}
        next={components[isActive + 1] || null}
        setActive={setActive}
        parentElement={parentElement}
      />
    );
  }, [isActive, components]);

  if (sizeOfSwipe !== 0) {
    return (
      <>
        <div ref={parentElement} className="lqsw_container" style={style}>
          {elm}
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
