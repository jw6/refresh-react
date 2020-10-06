import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = "Madrid"

function Lake ({ name }) {
  return <h1>{name}</h1>
}

function App () {
  return (
    <div>
      <Lake name="Lake Dallas" />
      <Lake name="Lake Michigan" />
    </div>
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
  <App />,
  document.getElementById('root')
);