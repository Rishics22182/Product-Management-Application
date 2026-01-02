import React from "react";
import type { Product } from "../utils/storage";

type Props = {
  product: Product;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};
export default function ProductCard({ product, onEdit, onDelete }: Props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h3 style={{ margin: 0 }}>Name: {product.name}</h3>
      <p style={{ margin: "6px 0" }}>Price: {product.price}</p>
      <p style={{ margin: "6px 0" }}>Category: {product.category}</p>

      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => onEdit(product.id)}>
          Edit
        </button>
        <button type="button" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
