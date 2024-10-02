import React from "react";
import Definitions from "./Definitions";

import "./Results.css";

export default function Results(props) {
  // console.log(props.result);
  const phonetic = props.result.phonetic;

  if (props.result) {
    return (
      <div className="Results">
        <h1>{props.result.word}</h1>
        <div className="definitions-container">
          <h2>wikitionary dictionary</h2>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Definitions meanings={meaning} phonetic={phonetic} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="welcome">Welcome! Type a word to start the search!</div>
    );
  }
}
