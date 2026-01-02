import { TextField } from "@mui/material";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

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

  return (
    <div>
      <h1>Add Product</h1>

      <form>
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
      </form>
    </div>
  );
};