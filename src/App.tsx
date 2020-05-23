import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import { Game } from './components/Game';

import {calculateWinner} from './helpers';

const squares = [
	null, null, null,
	'X', 'X', 'X',
	null, null, null,
];

function App() {
	console.log('calculateWinner(squares) :>> ', calculateWinner(squares));
  return (
    <div className="App">
      <Game />
{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
