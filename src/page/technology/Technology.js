import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllProductsTechnology } from "../../utils/dataTechnology";
import "../../styles/technology.css";

const Technology = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productsTechnology = getAllProductsTechnology();
  const filter = searchParams.get("filter") ?? "";

  const handleFilter = (e) => {
    setSearchParams({ filter: e.target.value });
  };
  return (
    <main className="mainTechnologies">
      <h1 className="h1Technologies">Tecnologia</h1>
      <input
      className="inputTechnologies"
        value={filter}
        onChange={handleFilter}
        type="text"
        placeholder="filtro"
      />
      <ul className="ulTechnologies">
        {productsTechnology
          .filter((productTechnology) => {
            if (!filter) return true;
            const name = productTechnology.name.toLowerCase();
            return name.includes(filter.toLocaleLowerCase());
          })
          .map((productTechnology) => (
            <li key={productTechnology.id}>
              <Link to={productTechnology.id.toString()} className="link">
                <h3>{productTechnology.name}</h3>
                <img src={productTechnology.imageFront} alt="" />
                <strong>{productTechnology.price}</strong>
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Technology;
