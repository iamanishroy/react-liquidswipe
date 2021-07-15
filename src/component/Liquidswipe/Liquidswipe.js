import React, { useState, useEffect } from "react";
import { Page } from "./Page";
import "./styles/style.css";

export const Liquidswipe = ({ components }) => {
  const sizeOfSwipe = components.length;
  const [isActive, setActive] = useState(0);
  const [elm, setElm] = useState();

  useEffect(() => {
    const key = isActive;
    if (isActive === 0) {
      // first swipe
      setElm(
        <Page
          key={key}
          index={key}
          prev={null}
          current={components[key]}
          next={components[key + 1]}
          setActive={setActive}
        />
      );
    } else if (isActive === sizeOfSwipe - 1) {
      // last swipe
      setElm(
        <Page
          key={key}
          index={key}
          prev={components[key - 1]}
          current={components[key]}
          next={null}
          setActive={setActive}
        />
      );
    } else {
      // middle swipes
      setElm(
        <Page
          key={key}
          index={key}
          prev={components[key - 1]}
          current={components[key]}
          next={components[key + 1]}
          setActive={setActive}
        />
      );
    }
  }, [isActive, sizeOfSwipe, components]);

  if (sizeOfSwipe !== 0) {
    return (
      <>
        <div className="lqsw_container">{elm}</div>
      </>
    );
  } else {
    return <></>;
  }
};
