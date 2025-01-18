import type { Container } from 'inversify';
import { ProductInterface } from '@/application/interfaces/products/productsInterface';
import { ProductAdapter } from '@/adapters/products/productAdapter';

export default function bindAllDepdencies(container: Container): void {
    container.bind(ProductInterface).to(ProductAdapter);
}
