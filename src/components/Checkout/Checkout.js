import React from 'react';
import DeliveryForm from './DeliveryForm';
import OrderDetails from './OrderDetails';

const Checkout = () => {
  return (
    <div className = 'row justify-content-around '>
    <div className = 'col-6 col-sm-6'>
        <DeliveryForm></DeliveryForm> 
    </div>
    <div className = 'col-6 col-sm-6'>
        <OrderDetails></OrderDetails>
    </div>          
</div>
  );
};

export default Checkout;