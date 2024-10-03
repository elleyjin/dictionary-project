import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import MariamWebsterData from "./MariamWebsterData";
import Synonyms from "./Synonyms";
import Gallery from "./Gallery";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [data, setData] = useState("");
  const [mariamWebsterData, setMariamWebsterData] = useState("");
  const [image, setImage] = useState("");
  const [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    apiCall();
  }

  function handleResponse(response) {
    setData(response.data[0]);
  }

  function handleMariamWebsterApiResponse(response) {
    setMariamWebsterData(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiCall();
  }

  function handleImageResponse(response) {
    setImage(response.data);
  }

  function apiCall() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const mariamWebsterApiDictionaryKey = `b6561181-094f-4cd4-8a6f-53401bf58fbb`;

    const mariamWebsterApiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${mariamWebsterApiDictionaryKey}
    `;

    const sheCodesImageApiKey = `aed3fabf26t4afa48435e0ea0oed7b6e`;

    const sheCodesImageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${sheCodesImageApiKey}`;

    axios.get(apiUrl).then(handleResponse);

    axios.get(mariamWebsterApiUrl).then(handleMariamWebsterApiResponse);

    axios.get(sheCodesImageApiUrl).then(handleImageResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <section className="Dictionary container-fluid">
        <nav className="navbar navbar-light bg-light ">
          <form className="form-inline d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              value={word}
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
        </nav>
        <Results result={data} />
        <MariamWebsterData result={mariamWebsterData} />
        <hr />
        <Synonyms synonym={data} />
        <Gallery images={image} />
      </section>
    );
  } else {
    load();
  }
}
