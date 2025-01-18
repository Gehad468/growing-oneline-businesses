import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import '../ProductBlock.css'; 

const ProductBlock = ({ image, title, price, backgroundColor }) => {
  return (
    <div className="product-block">
      <div
        className="product-background"
        style={{ backgroundColor: backgroundColor }}
      >
        <img src={image} alt={title} className="product-image" />
      </div>
      <h4 className="product-title">{title}</h4>
      <hr></hr>
      <p className="product-price">${price}</p>
      <button className="cart-button">
        <BsFillCartFill />
      </button>
    </div>
  );
};

export default ProductBlock;
