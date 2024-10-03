import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonym);

  if (props.synonym) {
    return (
      <section className="Synonyms">
        <h4>synonym</h4>
        <div className="row">
          {props.synonym.meanings.map(function (meaning, index) {
            return (
              <div className="synonym col" key={index}>
                <ul>
                  {meaning.synonyms.map(function (synonym, i) {
                    if (i < 10) {
                      return <li>{synonym}</li>;
                    } else {
                      return null;
                    }
                  })}
                </ul>
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
