import React from "react";
import "./MariamWebsterDefinitions.css";

export default function MariamWebsterDefinitions(props) {
  // meanings = individual meanings with all info about the particular meaning
  // console.log(props.meanings);

  return (
    <section className="MariamWebsterDefinitions">
      <div className="definitions">
        <h3>{props.meanings.fl}</h3>
        {props.meanings.shortdef.map(function (meaning, index) {
          if (index < 3) {
            return (
              <div key={index}>
                <p className="definition-meaning">: {meaning}</p>
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
