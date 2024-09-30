import React from "react";

export default function Dictionary() {
  return (
    <div>
      <nav>
        <form>
          <input type="search" placeholder="Search word" />
          <button type="submit" placeholder="search">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}
