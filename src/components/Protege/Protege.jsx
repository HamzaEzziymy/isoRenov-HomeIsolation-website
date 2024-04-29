import React from "react";
import './Protege.css'
import { HiFaceFrown } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
const Companies = () => {
  return (
    <section className="c-wrapper">
      <p className="protected-para">Très protégé dans toutes les conditions <IoShieldCheckmarkOutline className="protege-icon"/></p>
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./pro1.png" alt="" />
        <img src="./pro2.png" alt="" />
        <img src="./pro3.png" alt="" />
        <img src="./pro4.png" alt="" />
      </div>
    </section>
  );
};

export default Companies;
