import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProductTechnology,
  getProductTechnology,
} from "../../utils/dataTechnology";

const ProductTechnology = () => {
  const params = useParams();
  const navigate = useNavigate();

  const productTechnology = getProductTechnology(
    parseInt(params.productTecnologyid)
  );

  const handleDelete = () => {
    deleteProductTechnology(productTechnology.id);
    navigate("/technology", { replace: true });
  };

  if (!productTechnology){
    return <div>Producto no existe</div>
  }

  return (
    <div>
      <hr />
      {productTechnology.name}
      <div>
        <strong>Descripcion: </strong> {productTechnology.description}
      </div>
      <div>
        <strong>Precio: </strong> {productTechnology.price}
      </div>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductTechnology;
