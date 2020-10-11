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
    <div className="col-md-4  d-flex justify-content-between">
      <div className="card px-2 shadow mb-5" onClick={handleDetails}>
        <img src={picture} alt="" className="img-fluid ml-5 " width="80%" />
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
