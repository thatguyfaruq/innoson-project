import React from 'react'
import SuvImg from "../assets/innoson-suv.png"
import "../styles/Product1.css";

const Product1 = () => {
  return (
    <>
      <section className="container product-1">
        <div className="product-1img"></div>
        <div className="container product1-box">
          <div className="product1-text">
            <h4>Automobile Manifacturing</h4>
            <p>
              Innoson Vehicle Manufacturing [IVM] introduces automotive products from
              China, Japan and Germany. Our product line includes heavy duty vehicles,
              middle and high level buses, special environment friendly vehicles. The
              company carries out optimization design and assembly according to African
              road condition so as produce suitable products at affordable prices.
            </p>
          </div>
          <button className="button-text">Learn more</button>
        </div>
      </section>
    </>
  );
}

export default Product1