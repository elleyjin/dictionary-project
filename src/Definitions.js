import React from "react";

import "./Definitions.css";

export default function Definitions(props) {
  console.log(props.meanings);

  return (
    <div className="Definitions">
      <h3>
        {props.meanings.partOfSpeech} | {props.phonetic}
      </h3>
      {props.meanings.definitions.map(function (definition, index) {
        // definition = props.meanings.definitions
        if (index < 3) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              {definition.example && (
                <p>
                  <strong>example</strong> {definition.example}
                </p>
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
