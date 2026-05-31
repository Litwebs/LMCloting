import type { Product } from "@/lib/site";
import data from "@/products.json";

const allProducts = (data as { products: Product[] }).products;

export function useProducts() {
  return { products: allProducts, loading: false };
}
