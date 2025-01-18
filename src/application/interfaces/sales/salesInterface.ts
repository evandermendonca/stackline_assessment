import type { Product } from '@/types/product';
import type { Sale } from '@/types/sale';

export const SaleInterface = Symbol('interfaces.sale');

export interface SaleInterface {
    getSalesForProduct(
        productId: Product['id']
    ): Promise<Array<Sale> | undefined>;
}
