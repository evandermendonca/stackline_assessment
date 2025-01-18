import { injectable } from 'inversify';
import getDatabaseContext from '../database';
import type { ProductInterface } from '@/application/interfaces/products/productsInterface';
import type { CompleteProduct } from '@/types/product';

@injectable()
export class ProductAdapter implements ProductInterface {
    async getAllProducts(): Promise<Array<CompleteProduct>> {
        const { data } = getDatabaseContext('Stackline');

        return data;
    }
}
