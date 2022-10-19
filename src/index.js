import React from "react";
import ReactDOM from "react-dom";

import Stopwatch from "./Stopwatch";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <p>
        made by patmaz{" "}
        <a
          href="https://patmazurkiewicz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          patmazurkiewicz.com
        </a>
      </p>
      <Stopwatch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
