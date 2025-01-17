import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
  const [loggedInUser, setLoggedInUser]=useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log('form submitted',data);
  };

  console.log(watch("example")); // watch input value by passing the name of it
  let history = useHistory();
  const handleSave= () => {
  history.push("/home")
  }
  return (
    <div>
<div className="col-6 col-md-6">
<form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
      {errors.name && <span className="error">Name is required</span>}

      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email address" />
      {errors.email && <span className="error">Email is required</span>}

      <input name="address" ref={register({ required: true })} placeholder="Your Address" />
      {errors.address && <span className="error">Address is required</span>}

      <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
      {errors.phone && <span className="error">Phone number is required</span>}
      
    <br/>
      <button onClick={handleSave} className="btn btn-info" type="submit">Save & Continue</button>
      
    </form>
</div>
<div className="col-6 col-md-6">
<h3>Cart Details</h3>

</div>
    </div>
    
  );
};

export default Shipment;