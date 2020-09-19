import React from 'react';
import image1 from '../Resource/Image/adult-blur-blurred-background-687824.png'
import avatar1 from '../Resource/ICON/bus.png'
import image2 from '../Resource/Image/chef-cook-food-33614.png';
import avatar2 from '../Resource/ICON/notification.png'

import image3 from '../Resource/Image/architecture-building-city-2047397.png';
import avatar3 from '../Resource/ICON/car.png'
import { Card, CardGroup } from 'react-bootstrap';

const WhyChoose = () => {
  return (
    <div className="container text-left character-block">
            <h2>Why You Choose Us</h2>
            <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at boy prosperous increasing surrounded. 
            </p>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src={image1} />
    <Card.Body>
      <Card.Title>
      <div> <img src={avatar1} alt="" /> </div>
        <div>Fast Delivery</div>
        </Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <h4 style={{color: 'green'}}>see more</h4>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={image2} />
    <Card.Body>
      <Card.Title>
      <div> <img src={avatar2} alt="" /> </div>
        <div>Good Responder</div>
        </Card.Title>
      <Card.Text> This card has supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <h4 style={{color: 'green'}}>see more</h4>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={image3} />
    <Card.Body>

      <Card.Title>
        <div> <img src={avatar3} alt="" /> </div>
        <div>Home Deliver</div>
      </Card.Title>

      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <h4 style={{color: 'green'}}>see more</h4>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
  );
};

export default WhyChoose;