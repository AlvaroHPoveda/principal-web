import React from "react";
import { Link } from "react-router-dom";
import { getAllProductsTecnology } from "../../utils/dataTecnology";
import "../../styles/tecnology.css";

const Tecnology = () => {
  const productsTecnology = getAllProductsTecnology();
  return (
    <main>
      <h1>Tecnologia</h1>
      <ul>
        {productsTecnology.map((productTecnology) => (
          <li key={productTecnology.id}>
            <Link to={productTecnology.id.toString()}>
              {productTecnology.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Tecnology;
