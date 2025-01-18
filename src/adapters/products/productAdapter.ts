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

    async getProductById(id: Product['id']): Promise<Product | undefined> {
        const { data } = getDatabaseContext('Stackline');

        const matchingCompleteProduct = data.find(
            (product) => product.id === id
        ) as CompleteProduct | undefined;

        if (!matchingCompleteProduct) {
            return undefined;
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { sales, reviews, ...matchingProduct } = matchingCompleteProduct;

        return matchingProduct;
    }
}
