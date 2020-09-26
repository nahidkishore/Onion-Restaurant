import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './ItemDetails.css';
import { UserContext } from '../../App';


const ItemDetails = () => {

  /*  let history = useHistory();
  const handleCheckout= () => {
  history.push("/checkout")
  }  */
/*   const [cart,setCart,newCart,setNewCart]=useContext(UserContext); */

  /* const[item,setItem]=useContext(orderItem); */
/*   const [cart,setCart]=useState([]); */
  /* const [selectedFood, setSelectedFood]=useState({}); */

  const {itemKey}= useParams();
  const [details,setDetails] = useState({});
  const {name,price, picture,description}=details;
  

  useEffect(() =>{
    const selectedItem=fakeData.find(item => item.id ==itemKey)
    setDetails(selectedItem)
  },[itemKey])

  /*  const handleAddItem=(itemId)=>{
    console.log('product added',itemId);
    const food=fakeData.find(i => i.id==itemId);
    const newFood=[...item,food];
    setItem(newFood);
  } */
   const [cart,setCart]=useState([]);
  const handleAddItem=(item)=>{
    console.log('product added',item);
    const newCart=[...cart,item];
    setCart(newCart);
  } 

 

console.log(cart);
  return (
  
<div className="container">
  <div className="row">
    <div className="col-md-6 left-side">
        <h2>{name}</h2> 
       <p>{description}</p>
        <h2> ${price}</h2>
        <br/>
        <br/>
      
        <button  onClick={() =>handleAddItem( details)} className="btn btn-danger"><FontAwesomeIcon icon={faCartPlus} />Add Cart</button>
        <br/>
        <br/>
        <Link to="/home"><button>Back to home</button></Link>
        <img src={picture} alt=""/>
      </div>

    <div className="col-md-6 img-style">
                <img src={picture} alt="" />
         </div>
    </div>
 
</div>

  );
};

export default ItemDetails;