import React from 'react';
import {SWAPI_PEOPLE, SWAPI_ROOT } from '../../constants/constants';
import { getSwapiPeople } from '../../utils/network';
import './App.css';

function App() {
  getSwapiPeople(SWAPI_ROOT+SWAPI_PEOPLE).then(data => console.log(data))
  return (
    <h1>Start star wars app</h1>
  );
}

export default App;
