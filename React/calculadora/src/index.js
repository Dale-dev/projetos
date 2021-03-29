import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Calculadora from './main/calculadora/Calculadora'

ReactDOM.render(
  <div>
    <h1> Calculadora</h1>
    <Calculadora></Calculadora>
  </div>
  ,document.getElementById('root')
);
