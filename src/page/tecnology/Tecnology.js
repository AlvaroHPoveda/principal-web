import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllProductsTecnology } from "../../utils/dataTecnology";
import "../../styles/tecnology.css";

const Tecnology = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productsTecnology = getAllProductsTecnology();

  const handleFilter = (e) => {
    setSearchParams({ filter: e.target.value });
  };
  return (
    <main>
      <h1>Tecnologia</h1>
      <input onChange={handleFilter} type="text" placeholder="filtro" />
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
