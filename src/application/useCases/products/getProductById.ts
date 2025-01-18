import { inject, injectable } from 'inversify';
import type { Product } from '@/types/product';
import { ProductInterface } from '@/application/interfaces/products/productsInterface';

@injectable()
export class GetProductById {
    @inject(ProductInterface)
    productInterface!: ProductInterface;

    async execute(id: Product['id']): Promise<Product | undefined> {
        return this.productInterface.getProductById(id);
    }
}
