import React from "react";
import loading from "../../assets/img/loading.gif";

const Preloader = () => {
  return (
    <div className="preloader">
      <img className="preloader__icon" src={loading} alt="preloader" />
    </div>
  );
};

export default Preloader;
