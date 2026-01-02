import React from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  return <div style={{ padding: 16 }}>Edit Product: {id}</div>;
};

export default EditProduct;
