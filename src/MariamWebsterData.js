import React from "react";
import MariamWebsterDefinitions from "./MariamWebsterDefinitions";

import "./MariamWebsterData.css";

export default function MariamWebsterData(props) {
  if (props.result) {
    return (
      <section className="MariamWebsterData">
        <div className="definitions-container">
          <h2>mariam webster </h2>
          {props.result.map(function (meaning, index) {
            return (
              <div className="definition-group" key={index}>
                <MariamWebsterDefinitions meanings={meaning} />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
