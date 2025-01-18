import { inject, injectable } from 'inversify';
import { SaleInterface } from '@/application/interfaces/sales/salesInterface';
import type { Product } from '@/types/product';
import type { Sale } from '@/types/sale';

@injectable()
export class GetSalesForProduct {
    @inject(SaleInterface)
    saleInterface!: SaleInterface;

    async execute(productId: Product['id']): Promise<Array<Sale> | undefined> {
        return this.saleInterface.getSalesForProduct(productId);
    }
}
