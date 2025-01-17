import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { orderItem, UserContext } from '../../App';

const DeliveryForm = () => {
  const [loggedInUser, setLoggedInUser]=useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm();
  console.log(watch("example")); // watch input value by passing the name of it
  const onSubmit = data => {
    console.log('form submitted',data);
  };
  
  
 
  return (
    <div className = 'deliver-form'>
    <h4>Edit Delivery Details</h4>
    <hr/>
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
      {errors.name && <span className="error">Name is required</span>}
<br/>
<br/>
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email address" />
      {errors.email && <span className="error">Email is required</span>}
<br/> <br/>
      <input name="address" ref={register({ required: true })} placeholder="Your Address" />
      {errors.address && <span className="error">Address is required</span>}
<br/>
<br/>

      <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
      {errors.phone && <span className="error">Phone number is required</span>}
      
    <br/> <br/>
      <button className="btn btn-info" type="submit">Save & Continue</button>
      
    </form>
</div>
  );
};

export default DeliveryForm;