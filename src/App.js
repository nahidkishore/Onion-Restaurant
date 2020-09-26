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



export const UserContext = createContext();
/* export const  orderItem = createContext(); */

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  const [cart,setCart]=useState([]);
  const [newCart, setNewCart] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser,cart,setCart,newCart,setNewCart]}>
   
   <h3>{loggedInUser.name}</h3>
      
      <Router>
      <Route path="/home">
          <Home></Home>
          
        </Route>
      <Switch>
      
      <Route path="/item/:itemKey">
          <ItemDetails></ItemDetails>

        </Route>
        <Route exact path="/login">
            <Login></Login>

          </Route>
          
        <Route exact path="/">
          <Home></Home>

        </Route>
     
       
     {/*  <Route path="/checkout">
        <Checkout></Checkout>

      </Route> */}
          <Route path="/cart">
          <Cart></Cart>
        </Route>
        
        <Route path="*">
            <NotMatch></NotMatch>
          </Route>

      </Switch>
        
      </Router>
  
      </UserContext.Provider>
  
  );
}

export default App;
