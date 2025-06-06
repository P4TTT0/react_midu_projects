export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    quantity?: number;
}
  
export interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
  
export interface ProductFilter {
    minPrice: number;
    category: string;
}