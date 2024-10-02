import React from "react";

export default function MariamWebsterDefinitions(props) {
  // meanings = individual meanings with all info about the particular meaning
  console.log(props.meanings);

  return (
    <section>
      <div>
        <h3>
          {props.meanings.fl} | {props.meanings.hwi.hw}
        </h3>
        {props.meanings.shortdef.map(function (meaning, index) {
          if (index < 3) {
            return <div key={index}>{meaning}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </section>
  );
}
