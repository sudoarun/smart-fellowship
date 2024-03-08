import React from "react";
import "../../components/Home/section-third.css";

const SectionsThird = () => {
  return (
    <div className="main-container container">
      <div className="left">
        <div className="heading">
          <span className="linear-g">Who</span> is it for?
        </div>
        <div className="para-text">
          <span className="white-text">
            The Smart Fellowship’s Uttar Pradesh edition is open for
          </span>
          <br />
          <span className="linear-g">
            ambitious young women who want to achieve growth and reach
            leadership positions.
          </span>
        </div>
      </div>
      <div className="right">
        {/* <img
          className="img-1"
          src={require("../../assets/All_combined.png")}
          alt="section3-.png"
        /> */}
      </div>
    </div>
  );
};

export default SectionsThird;
