import { inject, injectable } from 'inversify';
import type { CompleteProduct } from '@/types/product';
import { ProductInterface } from '@/application/interfaces/products/productsInterface';

@injectable()
export class GetAllProducts {
    @inject(ProductInterface)
    productInterface!: ProductInterface;

    async execute(): Promise<Array<CompleteProduct>> {
        return this.productInterface.getAllProducts();
    }
}
