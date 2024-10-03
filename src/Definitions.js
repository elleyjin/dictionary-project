import React from "react";

import "./Definitions.css";

export default function Definitions(props) {
  return (
    <section className="Definitions">
      <div className="definitions">
        <h3>
          {props.meanings.partOfSpeech} | {props.phonetic}
        </h3>
        {props.meanings.definitions.map(function (definition, index) {
          // definition = props.meanings.definitions
          if (index < 3) {
            return (
              <div className="definition-group" key={index}>
                <p className="definition-meaning">: {definition.definition}</p>
                {definition.example && (
                  <p className="definition-example">{definition.example}</p>
                )}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </section>
  );
}
