import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = "Madrid"

function Hello(){
  return (
    <div>
      <h1 id="heading" className="cool-text">
        Hello from {city} 
      </h1>
    </div>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);