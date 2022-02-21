import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProductTecnology,
  getProductTecnology,
} from "../../utils/dataTecnology";

const ProductTecnology = () => {
  const params = useParams();
  const navigate = useNavigate();

  const productTecnology = getProductTecnology(
    parseInt(params.productTecnologyid)
  );

  const handleDelete = () => {
    deleteProductTecnology(productTecnology.id);
    navigate("/tecnology", { replace: true });
  };

  if (!productTecnology){
    return <div>Producto no existe</div>
  }

  return (
    <div>
      <hr />
      {productTecnology.name}
      <div>
        <strong>Phone: </strong> {productTecnology.phone}
      </div>
      <div>
        <strong>Website: </strong> {productTecnology.website}
      </div>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductTecnology;
