import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (props.result) {
    function renderAudio(phonetics) {
      if (phonetics.audio) {
        return (
          <a href={phonetics.audio} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-play"> Listen</i>
          </a>
        );
      }
    }

    function renderPhonetics(phonetics) {
      return phonetics.map(function (phonetic, index) {
        return <Phonetics text={phonetic.text} key={index} />;
      });
    }

    return (
      <section className="Results">
        <div className="main">
          <h1>{props.result.word}</h1>
          {renderAudio(props.result.phonetics[0])}
        </div>
        <div className="definitions-container">
          <h2>wikitionary</h2>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Definitions
                  meanings={meaning}
                  phonetic={renderPhonetics(props.result.phonetics)}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <div className="welcome">Welcome! Type a word to start the search!</div>
    );
  }
}
