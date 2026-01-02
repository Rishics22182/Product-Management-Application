export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
};

const KEY = "products";

export function getProducts(): Product[] {
  const raw = localStorage.getItem(KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as Product[];
  } catch {
    return [];
  }
}

export function saveProducts(products: Product[]) {
  localStorage.setItem(KEY, JSON.stringify(products));
}
