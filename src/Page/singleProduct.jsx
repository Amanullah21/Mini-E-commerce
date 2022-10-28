import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "../style/ProductPage.module.css";

const SingleProduct = (props) => {
  const [data, setData] = useState([]);
  const { userId } = useParams();
  console.log(userId);
  let url =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${userId}";
  const getTodo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.data)) //store data
      .catch((error) => console.log(error));
  };
  useEffect(() => getTodo(), []);
  console.log(data);
  return (
    <div>
      <div className={styled.product_container}>
        <div className={styled.product_card}>
          <img src={data.image} alt={data.title} />
          <h3>{data.title}</h3>
          <span>Brand : {data.brand}</span> <br />
          <span>Category : {data.category}</span>
          <p>Price : $ {data.price} </p>
          <h2>dsdsa</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
