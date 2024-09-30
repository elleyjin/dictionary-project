import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary defaultWord="sunrise" />
      </header>
      <footer>
        <a
          href="https://github.com/elleyjin/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by ElleyJin
      </footer>
    </div>
  );
}

export default App;
