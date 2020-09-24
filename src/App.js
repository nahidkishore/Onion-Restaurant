import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Login from './components/Login/Login';
import NotMatch from './components/NotMatch/NotMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipment from './components/Shipment/Shipment';


export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  const [productCount,setProductCount]=useState([1]);
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser,productCount,setProductCount]}>
   
      
      <Router>
      <Header></Header>
      <Switch>
      
        <Route path="/home">
          <Home></Home>
          
        </Route>
        <Route exact path="/login">
            <Login></Login>

          </Route>
          
        <Route exact path="/">
          <Home></Home>

        </Route>
        <Route path="/item/:itemKey">
          <ItemDetails></ItemDetails>

        </Route>
        {/* <PrivateRoute path="/shipment">
        <Shipment></Shipment>
        </PrivateRoute> */}
        {/* <Route path="/cart">
          <Cart></Cart>
        </Route> */}
        
        <Route path="*">
            <NotMatch></NotMatch>
          </Route>

      </Switch>
        
      </Router>
      </UserContext.Provider>
  
  );
}

export default App;
