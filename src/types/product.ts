import type { Sale } from '@/types/sale';
import type { Review } from '@/types/review';

export type Product = {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    retailer: string;
    details: Array<string>;
    tags: Array<string>;
};

export type CompleteProduct = Product & {
    sales: Array<Sale>;
    reviews: Array<Review>;
};
