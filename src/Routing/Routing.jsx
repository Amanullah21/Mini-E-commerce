import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../Page/ProductPage";
import SingleProduct from "../Page/SingleProduct";
import Cart from "../Page/Cart";
import Orderpage from "../Page/OrderPage";
import { useSelector } from "react-redux";

export const Routing = () => {
  const cartProducts = useSelector((store) => store.cartProducts);
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/adidas" element={<ProductPage />} />
        <Route path="/product/:userId" element={<SingleProduct data={cartProducts}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Orderpage />} />
      </Routes>
    </div>
  );
};
