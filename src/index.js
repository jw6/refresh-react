import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = "Madrid"

function Hello(props){
  console.log(Object.keys(props));
  return (
    <div>
      <h1 id="heading" className="cool-text">
        Hello from {city}
        fun with {props.library}
        <p>{props.number} Number </p>
        <p>{Object.keys(props).length}</p>
      </h1>
    </div>
  )
}

ReactDOM.render(
  <Hello library="React" number={123}/>,
  document.getElementById('root')
);