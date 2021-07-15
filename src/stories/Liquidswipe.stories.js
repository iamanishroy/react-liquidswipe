import React from 'react';
import {storiesOf} from '@storybook/react';
import { Liquidswipe  } from '../component/Liquidswipe';
import randomColor from "randomcolor";

const stories = storiesOf('App Test', module);

stories.add('App',()=>{
    const ids = ["1", "2", "3", "4", "5", "6"];
    var componentsToRender = [];
    for (var i = 0; i < ids.length; i++) {
      componentsToRender.push(
        <div
          style={{
            backgroundColor: `${randomColor({ luminosity: "light" })}`,
            color: "#fff",
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#333333'
          }}
        >
         <h1>{ids[i]}</h1>
        </div>
      );
    }
  
    return (
      <>
        <Liquidswipe components={componentsToRender} />
      </>
    );
});

