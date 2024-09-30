import React from "react";

export default function Results(props) {
  console.log(props.result);

  if (props.result) {
    return (
      <div className="Results">
        <h1>{props.result.word}</h1>
        <div className="definitions">
          <h2>oxford dictionary</h2>
          <h3>noun | pro.nun.cia.tion</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula, odio quis condimentum imperdiet, nisl risus iaculis neque,
            faucibus facilisis orci mi at mi. Aliquam quis mi est.
          </p>
        </div>
        <hr />
      </div>
    );
  } else {
    return null;
  }
}
