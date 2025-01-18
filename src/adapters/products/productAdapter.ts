import { injectable } from 'inversify';
import getDatabaseContext from '../database';
import type { ProductInterface } from '@/application/interfaces/products/productsInterface';
import type { CompleteProduct, Product } from '@/types/product';

@injectable()
export class ProductAdapter implements ProductInterface {
    async getAllProducts(): Promise<Array<CompleteProduct>> {
        const { data } = getDatabaseContext('Stackline');

        return data;
    }

    async getProductById(
        id: Product['id']
    ): Promise<CompleteProduct | undefined> {
        const { data } = getDatabaseContext('Stackline');

        const matchingCompleteProduct = data.find(
            (product) => product.id === id
        ) as CompleteProduct | undefined;

        return matchingCompleteProduct;
    }
}
