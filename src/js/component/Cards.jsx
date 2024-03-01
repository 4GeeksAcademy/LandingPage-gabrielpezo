import React from "react";

const Cards = (props) => {
  console.log (props.product)
	return (
    <div className="card" style={{"width": "18rem;"}}>
      <img src={props.product.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">{props.product.description}</p>
        <p className="card-text">{props.product.price}</p>
        <a href="#" className="btn btn-primary">Purchase</a>
      </div>
    </div>
	);
};
export default Cards;
