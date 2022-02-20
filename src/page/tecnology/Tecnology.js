import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllProductsTecnology } from "../../utils/dataTecnology";
import "../../styles/tecnology.css";

const Tecnology = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productsTecnology = getAllProductsTecnology();
  const filter = searchParams.get("filter") ?? ""

  const handleFilter = (e) => {
    setSearchParams({ filter: e.target.value });
  };
  return (
    <main>
      <h1>Tecnologia</h1>
      <input value={filter} onChange={handleFilter} type="text" placeholder="filtro" />
      <ul>
        {productsTecnology.filter(productTecnology => {
          if(!filter) return true;

          const name = productTecnology.name.toLowerCase()
          return name.includes(filter.toLocaleLowerCase())
        }).map((productTecnology) => (
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
