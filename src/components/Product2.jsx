import React from 'react'
import PlasticImg from "../assets/innoson-plastic.png";
import "../styles/Product2.css";

const arrow = (
  <svg
    width="24"
    height="16"
    viewBox="0 0 24 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM0 9H23V7H0V9Z"
      fill="#F7F7F7"
    />
  </svg>
);

const Product2 = () => {
  return (
    <>
      <section className="container product-2">
        <div className="product2-box">
          <div className="product2-text">
            <h4>Plastic Manufactionring</h4>
            <p>
              Innoson Technical & Industrial Co. Ltd manufactures high quality household
              and industrial plastics, health & safety accessories, storage containers,
              fixtures & fittings, electrical components & accessories. Plastic products
              manufactured include; plastic chairs, tables, trays, plates, spoons, cups,
              jerry cans of different sizes and many other allied products.
            </p>
          </div>
          <button className="button-text">Learn more {arrow}</button>
        </div>
        <div className="innoson-plastic">
          <img src={PlasticImg} alt="innoson-plastic" />
        </div>
      </section>
    </>
  );
}

export default Product2




