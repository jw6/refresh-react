import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = "Madrid"

function Lake() {
  return (
      <h1>Lake</h1>
  )
}

function SkiResort() {
  return (
    <h1>Ski Resort</h1>
  )
}

function App() {
  //hook
  const [status, setStatus] = useState("Open");
  return (
    <div>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open")}>
        Open
      </button>
      <button onClick={() => setStatus("Closed")}>
        Closed
      </button>
      <button onClick={() => setStatus("Back in 5")}>
        Break
      </button>
    </div>
  );
}

ReactDOM.render(
  <App season="winter" />, 
  document.getElementById('root')
);