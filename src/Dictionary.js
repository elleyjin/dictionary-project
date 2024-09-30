import React from "react";

export default function Dictionary() {
  return (
    <div className="Dictionary container-fluid">
      <nav className="navbar navbar-light bg-light ">
        <form className="form-inline d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search word"
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
    </div>
  );
}
