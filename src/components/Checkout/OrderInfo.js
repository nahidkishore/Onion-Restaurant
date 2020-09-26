import React, { useContext } from 'react';
import { UserContext } from '../../App';

const OrderInfo = () => {
  const [loggedInUser, setLoggedInUser]=useContext(UserContext);
  return (
    <div className = 'text-center text-success'>
    <h3>Dear, {loggedInUser.name} </h3>
    <h1>Order-Placed</h1>
</div>
  );
};

export default OrderInfo;