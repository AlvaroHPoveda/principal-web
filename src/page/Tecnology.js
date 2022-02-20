import React from "react";
import { Link } from "react-router-dom";
import { getAllProductsTecnology } from "../utils/dataTecnology";
import "../styles/tecnology.css"

const Tecnology = () => {
  const productsTecnology = getAllProductsTecnology();
  return (
    <main>
      <h1>Tecnologia</h1>
      <ul>
        {productsTecnology.map((productTecnology) => (
          <li key={productTecnology.id}>            
            <h2>              
              <Link to={"/tecnology/" + productTecnology.id}>{productTecnology.name}</Link>             
            </h2>
          </li>
        ))}
      </ul>       
    </main>
  );
};

export default Tecnology;
