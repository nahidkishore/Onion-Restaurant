import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
  const {name, price, picture,id} = props.item;
  const style = {
    display: 'flex',
    margin:'20px',
    justifyContent: 'space-between'
}
  return (
    <div  className="col-md-3" style={style}>
     
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={picture}></Card.Img>
    <Card.Body>
  <Card.Title> <Link to={`/item/${id}`}>{name}</Link></Card.Title>
  <Card.Text> How We Dream About Our Future <br/>
   ${price} 

  </Card.Text>

    </Card.Body>
  </Card>
    
      
    </div>
  );
};

export default FoodItem;