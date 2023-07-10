import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="App">
      {showOverlay && <div className="App-overlay"><button onClick={()=>setShowOverlay(false)}>Close Overlay</button></div>}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShowOverlay(true)}
        >
          Open overlay
        </button>
      </header>
    </div>
  );
}

export default App;
