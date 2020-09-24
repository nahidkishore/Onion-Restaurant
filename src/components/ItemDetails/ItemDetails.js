import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './ItemDetails.css';




const ItemDetails = () => {

/*   let history = useHistory();
  const handleCheckout= () => {
  history.push("/shipment")
  } */
  const {itemKey}= useParams();
  const [details,setDetails] = useState({});
  const {name,price, picture}=details;

  useEffect(() =>{
    const selectedItem=fakeData.find(item => item.id ==itemKey)
    setDetails(selectedItem)
  },[itemKey])
  //const item=fakeData.find(data=>data.id===itemKey);
  //(item);
  //console.log(details);

const handleAddItem= (item) => {
console.log('product added',item);
}
  return (
  
<div className="container">
  <div className="row">
    <div className="col-md-6 left-side">
        <h2>{name}</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse provident facilis enim, dolorum repudiandae quas tempore veritatis id, autem officia ad corrupti ipsum aperiam magni exercitationem mollitia maiores eveniet?</p>
        <h2> ${price}</h2>
        <br/>
        <br/>
        <button onClick={()=> handleAddItem(details)} className="btn btn-danger"><FontAwesomeIcon icon={faCartPlus} />Add Cart</button>
        <br/>
        <br/>
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