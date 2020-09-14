import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
  const {name, price, picture,key} = props.item;
  const style = {
    display: 'flex',
    margin: '60px',
    justifyContent: 'space-between'
}
  return (
    <div style={style}>
     
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={picture}></Card.Img>
    <Card.Body>
  <Card.Title> <Link to={`/item/${key}`}>{name}</Link></Card.Title>
  <Card.Text> How We Dream About Our Future <br/>
   ${price} 

  </Card.Text>

    </Card.Body>
  </Card>
    
      
    </div>
  );
};

export default FoodItem;