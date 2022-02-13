import React from "react";
import data from "../fake-data/brands.json";

const BrandsPage = () => {
  return (
    <>
      <h1>Brands</h1>

      <h5>Нажмите на бренд, чтобы отредактировать его</h5>
      {data.map(function (currentArrayElement, currentIndex) {
        return (
          <div key={currentIndex}>
            <h4>{currentArrayElement.name}</h4>
            <div className="brand-image">
              <img src={currentArrayElement.image} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BrandsPage;
