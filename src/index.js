import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = "Madrid"

function Hello(){
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>Let's build something fun.</p>
    </div>
  )
}

ReactDOM.render(
  // <h1 id="heading" className="cool-text">
  //   Hello from {city} 
  // </h1>,
  <Hello />,
  document.getElementById('root')
);