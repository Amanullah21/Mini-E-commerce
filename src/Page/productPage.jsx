import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

import styled from "../style/ProductPage.module.css";
import { Link } from "react-router-dom";
import { addingToBag } from "../Redux/action";
import { useDispatch } from "react-redux";

const ProductPage = (props) => {
  let url =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/";
  const [data, setData] = useState([]);
  const getTodo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.data)) //store data
      .catch((error) => console.log(error));
  };

  useEffect(() => getTodo(), []);

  const dispatch = useDispatch();
  const productCard = (id) => {
    console.log(id);
  };
  const addtobag = (item) => {
    dispatch(addingToBag(item));
  };
  console.log(data);
  return (
    <div>
      <div className={styled.product_container}>
        {data.map((ele, index) => (
          <div className={styled.product_card} onClick={() => {productCard(index+1)}}>
            <Link to={`/product/${index + 1}`}>
              <img src={ele.image} alt={ele.title} />
              <h3>{ele.title}</h3>
              <span>Brand : {ele.brand}</span> <br />
              <span>Category : {ele.category}</span>
              <p>Price : $ {ele.price} </p>
            </Link>
            {/* <button onClick={() =>addTocart(ele)}>A to card</button> */}
            <button onClick={() => addtobag(ele)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
