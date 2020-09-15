import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Login from './components/Login/Login';
import NotMatch from './components/NotMatch/NotMatch';


function App() {
  return (
    <div>
      
      <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
          
        </Route>
        <Route path="/login">
            <Login></Login>

          </Route>
          
        <Route exact path="/">
          <Home></Home>

        </Route>
        <Route path="/item/:itemKey">
          <ItemDetails></ItemDetails>

        </Route>
        <Route path="*">
            <NotMatch></NotMatch>
          </Route>

      </Switch>
        
      </Router>
      
    </div>
  
  );
}

export default App;
