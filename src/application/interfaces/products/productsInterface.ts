import type { CompleteProduct, Product } from '@/types/product';

export const ProductInterface = Symbol('interfaces.product');

export interface ProductInterface {
    getAllProducts(): Promise<Array<CompleteProduct>>;
    getProductById(id: Product['id']): Promise<Product | undefined>;
}
