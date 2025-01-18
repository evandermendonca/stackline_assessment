import type { CompleteProduct } from '@/types/product';

export const ProductInterface = Symbol('interfaces.product');

export interface ProductInterface {
    getAllProducts(): Promise<Array<CompleteProduct>>;
}
