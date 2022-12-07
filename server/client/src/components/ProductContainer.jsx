import React from "react";
import "../App.css";
import { update_product } from "../controllers/seller";
const ProductContainer = (props) => {

  let counterFront =0;
  const button = async(e) => {
    e.preventDefault();
    counterFront += 1;
    console.log(counterFront);
  }
  return (
    <>
      <div className="prod-container">
        <div className="product-name">{props.name}</div>
        <div className="product-description">{props.description}</div>
        <div className="product-id">ID: {props.p_id}</div>
        <button className="" onClick={button}>{counterFront}</button>
      </div>
    </>
  );
};

export default ProductContainer;
