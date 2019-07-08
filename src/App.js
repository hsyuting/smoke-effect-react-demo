import React from "react";
import "./App.css";
import SmokeElement from "smoke-effect-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SmokeElement
          src="./images/quickText.png"
          opacity="2"
          smokeSrc="./images/smoke_PNG55217.png"
          smokeOpacity="0.3"
        />
      </header>
    </div>
  );
}

export default App;
