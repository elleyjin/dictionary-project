import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [data, setData] = useState("");

  function handleResponse(response) {
    setData(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiCall();
  }

  function apiCall() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary container-fluid">
      <nav className="navbar navbar-light bg-light ">
        <form className="form-inline d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search word"
            onChange={handleWordChange}
          />
          <button
            className="btn btn-outline-dark my-2 my-sm-0"
            type="submit"
            placeholder="search"
          >
            Search
          </button>
        </form>
        <div className="Languages">
          <button className="btn btn-outline-dark">Eng</button>
          {/* another components */}
          <button className="btn btn-outline-dark">Kor</button>
          <button className="btn btn-outline-dark">Chi</button>
        </div>
      </nav>
      <Results result={data} />
    </div>
  );
}
