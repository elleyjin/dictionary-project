import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import MariamWebsterData from "./MariamWebsterData";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [data, setData] = useState("");

  const [mariamWebsterData, setMariamWebsterData] = useState("");

  //   const [load, setLoad] = useState(false);

  function handleResponse(response) {
    setData(response.data[0]);
  }

  function handleMariamWebsterApiResponse(response) {
    // console.log(response.data);

    setMariamWebsterData(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiCall();
    // setLoad(true);
  }

  function apiCall() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const mariamWebsterApiDictionaryKey = `b6561181-094f-4cd4-8a6f-53401bf58fbb`;

    const mariamWebsterApiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${mariamWebsterApiDictionaryKey}
    `;

    axios.get(apiUrl).then(handleResponse);

    axios.get(mariamWebsterApiUrl).then(handleMariamWebsterApiResponse);
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
      <MariamWebsterData result={mariamWebsterData} />
      <hr />
    </div>
  );
}
