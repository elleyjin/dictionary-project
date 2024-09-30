import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary defaultWord="sunrise" />
      </header>
    </div>
  );
}

export default App;
