import React from 'react';
import logo from './logo.svg';
import './App.css';
import { directive } from '@babel/types';
import Greet from './Greet';

function App() {
  return (
    <div>
      <h1>Hello React</h1>
    <Greet whom="alice"/>
    </div>
  );
}

export default App;
