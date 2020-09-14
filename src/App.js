import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, Router } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  
  );
}

export default App;
