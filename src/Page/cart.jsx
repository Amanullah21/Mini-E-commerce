import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "../style/ProductPage.module.css";

const Cart = (props) => {
  const data = useSelector((store) => store.cartProducts);
  const dispatch = useDispatch();
  const addtobag = (item) => {
    dispatch(addtobag(item));
  };
  console.log(props, "////////");
  return (
    <div>
      <div className={styled.product_container}>
        {data.map((ele, index) => (
          <div className={styled.product_card}>
            <img src={ele.image} alt={ele.title} />
            <h3>{ele.title}</h3>
            <span>Brand : {ele.brand}</span> <br />
            <span>Category : {ele.category}</span>
            <p>Price : $ {ele.price} </p>
            <button onClick={() => addtobag(ele)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
