import React from "react";
import data from "../fake-data/brands.json";
import {Link} from "react-router-dom";

const BrandsPage = () => {
  return (
    <>
      <h1>Brands</h1>

        <h5>Нажмите на бренд, чтобы отредактировать его</h5>
        {/*todo: помимо name вывести еще и картинку бренда и все это дело завернуть в ссылку из react-router*/}
      {data.map((i) => (
        <div key={i.name}>{i.name}</div>
      ))}
        {data.map((i) => (
           <div key={i.image}><Link to="/brands/all">{i.image}</Link></div>
        ))}

    </>
  );
};

export default BrandsPage;
