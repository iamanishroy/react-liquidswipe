import React from "react";
import { storiesOf } from "@storybook/react";
import LiquidSwipe from "../src";
import randomColor from "randomcolor";

const stories = storiesOf("LiquidSwipe Test", module);

stories.add("Basic", () => {
  const ids = ["1", "2", "3", "4", "5", "6"];
  var componentsToRender = [];
  for (var i = 0; i < ids.length; i++) {
    componentsToRender.push(
      <div
        style={{
          backgroundColor: `${randomColor({ luminosity: "light" })}`,
          color: "#fff",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // color: "#333333",
        }}
      >
        <h1>{ids[i]}</h1>
      </div>
    );
  }

  return (
    <>
      <LiquidSwipe components={componentsToRender} />
    </>
  );
});

stories.add("With Style", () => {
  const ids = ["1", "2", "3", "4", "5", "6"];
  var componentsToRender = [];
  for (var i = 0; i < ids.length; i++) {
    componentsToRender.push(
      <div
        style={{
          backgroundColor: `${randomColor({ luminosity: "light" })}`,
          color: "#fff",
          height: "inherit",
          width: "inherit",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // color: "#333333",
        }}
      >
        <h1>{ids[i]}</h1>
      </div>
    );
  }

  return (
    <>
      <LiquidSwipe
        components={componentsToRender}
        style={{
          height: "80vh",
          width: "80vw",
          margin: "10vh auto",
          borderRadius: "20px",
        }}
      />
    </>
  );
});