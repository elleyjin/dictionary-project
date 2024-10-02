import React from "react";
// import Definitions from "./Definitions";
import MariamWebsterDefinitions from "./MariamWebsterDefinitions";

export default function MariamWebsterData(props) {
  console.log(props.result);

  if (props.result) {
    return (
      <div className="definitions-container">
        <h2>mariam webster </h2>
        {props.result.map(function (meaning, index) {
          return (
            <div>
              <MariamWebsterDefinitions meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
