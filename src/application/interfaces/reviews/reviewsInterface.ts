import type { Product } from '@/types/product';
import type { Review } from '@/types/review';

export const ReviewInterface = Symbol('interfaces.review');

export interface ReviewInterface {
    getReviewsForProduct(
        productId: Product['id']
    ): Promise<Array<Review> | undefined>;
}
