import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';
import FoodItem from '../FoodItem/FoodItem';


const ItemDetails = () => {
  const {itemKey}= useParams();
  //const [details,setDetails] = useState({});

  //const item=fakeData.find(data=>data.id===itemKey);
  //(item);
  //console.log(details);


  return (
    <div>
      <h1>Food item details pages</h1> 
  <h3>Id:{itemKey}</h3>
  <p>name:{}</p>
  
    </div>
  );
};

export default ItemDetails;