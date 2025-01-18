import type { Container } from 'inversify';
import { ProductInterface } from '@/application/interfaces/products/productsInterface';
import { ProductAdapter } from '@/adapters/products/productAdapter';
import { ReviewInterface } from '@/application/interfaces/reviews/reviewsInterface';
import { ReviewAdapter } from '@/adapters/reviews/reviewAdapater';
import { SaleInterface } from '@/application/interfaces/sales/salesInterface';
import { SaleAdapter } from '@/adapters/sales/salesAdapter';

export default function bindAllDepdencies(container: Container): void {
    container.bind(ProductInterface).to(ProductAdapter);
    container.bind(ReviewInterface).to(ReviewAdapter);
    container.bind(SaleInterface).to(SaleAdapter);
}
