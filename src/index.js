import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = "Madrid"

const lakeList = [
  { id: 1, name: "Echo", trailhead: "Echo"},
  { id: 2, name: "Maud", trailhead: "Wrights"},
  { id: 3, name: "Velma", trailhead: "Bayview"}
]

// function App ({ lakes }) {
//   return (
//     <div>
//       {lakes.map(lake => (
//         <div key={lake.id}>
//           <h2>{lake.name}</h2>
//           <p>Access by: {lake.trailhead}</p>
//         </div>
//       ))}
//     </div>

//   )
// }

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

function App(props) {
  return (
    <>
        <Lake />
    <SkiResort />
    </>
  )
}


ReactDOM.render(
  // <Hello library="React" number={123}/>,
  // <App lakes={lakeList}/>,
  <App season="winter" />, 
  document.getElementById('root')
);