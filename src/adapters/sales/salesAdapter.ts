import { injectable } from 'inversify';
import getDatabaseContext from '../database';
import type { SaleInterface } from '@/application/interfaces/sales/salesInterface';
import type { Product, CompleteProduct } from '@/types/product';
import type { Sale } from '@/types/sale';

@injectable()
export class SaleAdapter implements SaleInterface {
    async getSalesForProduct(
        productId: Product['id']
    ): Promise<Array<Sale> | undefined> {
        const { data } = getDatabaseContext('Stackline');

        const matchingCompleteProduct = data.find(
            (product) => product.id === productId
        ) as CompleteProduct | undefined;

        if (!matchingCompleteProduct) {
            return undefined;
        }

        const { sales } = matchingCompleteProduct;

        return sales;
    }
}
