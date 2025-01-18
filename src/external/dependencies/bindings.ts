import type { Container } from 'inversify';
import { ProductInterface } from '@/application/interfaces/products/productsInterface';
import { ProductAdapter } from '@/adapters/products/productAdapter';
import { ReviewInterface } from '@/application/interfaces/reviews/reviewsInterface';
import { ReviewAdapter } from '@/adapters/review/reviewAdapater';

export default function bindAllDepdencies(container: Container): void {
    container.bind(ProductInterface).to(ProductAdapter);
    container.bind(ReviewInterface).to(ReviewAdapter);
}
