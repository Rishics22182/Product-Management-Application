import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import type { Product } from "./interface/Product";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Omit<Product, "id"> | null>(null);

  useEffect(() => {
    const products: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const existing = products.find((p) => p.id === Number(id));

    if (existing) {
      const { id: _id, ...rest } = existing;
      setProduct(rest);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return <div style={{ padding: 16 }}>Product not found</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct((prev) =>
      prev
        ? {
            ...prev,
            [name]: name === "price" ? Number(value) : value,
          }
        : prev
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const products: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const updatedProducts = products.map((p) =>
      p.id === Number(id) ? { ...p, ...product } : p
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Product Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <TextField
            label="Price"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <TextField
            label="Category"
            name="category"
            value={product.category}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <TextField
            label="Image URL"
            name="image"
            value={product.image}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};
export default EditProduct;