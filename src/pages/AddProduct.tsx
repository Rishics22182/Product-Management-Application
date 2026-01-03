import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import type { Product } from "./interface/Product";

export const AddProduct = () => {
  const [product, setProduct] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
    category: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const existingProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const newProduct: Product = {
      id: Date.now(),
      ...product,
    };
    localStorage.setItem(
      "products",
      JSON.stringify([...existingProducts, newProduct])
    );
    setProduct({name: "",
    price: 0,
    category: "",
    image: "",});
  };

  return (
    <div>
      <h1>Add Product</h1>

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

        <div style={{ marginTop: "12px" }}>
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
        <div style={{ marginTop: "12px" }}>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};