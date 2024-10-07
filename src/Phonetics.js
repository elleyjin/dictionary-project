import React from "react";

export default function Phonetics(props) {
  if (props.text) {
    return <span>{props.text}</span>;
  }
}
