import React, { Component } from 'react';
import state from "state-local";

const [getState, setState] = state.create({ x: 0, y: 1 });

// ...
function anotherFn() {
  // ...
  const state = getState();
  console.log("aa1", state);
  setState({ y: 4 });
  console.log("aa2", state);
}


export default class App extends Component {
    render() {
        console.log('aaaa--', anotherFn())
        return (
            <div className="app">
                <h1 className="app-heading">JOffer First Page!</h1>
           </div>
        );
    }
}