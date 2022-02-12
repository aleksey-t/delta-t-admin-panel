import React from "react";
import data from "../fake-data/brands.json";

const BrandsPage = () => {
  return (
    <>
      <h1>Brands</h1>

        {/*todo: помимо name вывести еще и картинку бренда и все это дело завернуть в ссылку из react-router*/}
      {data.map((i) => (
        <div key={i.name}>{i.name}</div>
      ))}

    </>
  );
};

export default BrandsPage;
