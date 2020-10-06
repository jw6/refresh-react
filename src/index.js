import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = "Madrid"

const catNames = [
  "Catterina",
  "Pluto",
  "Lorre"
];

function App ({cats}) {
  return (
    <ul>
      {cats.map( name => (<li>{ name }</li>))}
    </ul>
  )
}

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
  // <Hello library="React" number={123}/>,
  <App cats={catNames}/>,
  document.getElementById('root')
);