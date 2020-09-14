import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';


const ItemDetails = () => {
  const {itemKey}= useParams();
  const [details,setDetails] = useState({});

  const itemDetails=fakeData.find(data=>data.name===itemKey);
  setDetails(itemDetails);
  console.log(details);

  
  return (
    <div>
      <h1>Food item details pages</h1> 
      <Card>
        <Card.Body>
  <Card.Title>{details.name}</Card.Title>
  <Card.Text>description here</Card.Text>
  <Card.Text>${details.price}</Card.Text> 

        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetails;