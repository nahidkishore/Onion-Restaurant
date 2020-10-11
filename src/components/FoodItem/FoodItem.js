import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./FoodItem.css";
const FoodItem = (props) => {
  //console.log(props);
  const { name, price, picture, id, details, handleAddItem } = props.item;

  let history = useHistory();
  const handleDetails = () => {
    history.push(`/item/${id}`);
  };
  return (
    <div className="col-md-4 mb-2">
      <div className="card px-2 shadow" onClick={handleDetails}>
        <img src={picture} alt="" className="img-fluid" width="100%" />
        <div className="card-body text-center">
          <div className="card-title">
            <p className="card-text">{name}</p>
            <p className="card-text">{details}</p>
            <p className="card-text">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
