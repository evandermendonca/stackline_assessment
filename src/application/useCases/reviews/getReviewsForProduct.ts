import { inject, injectable } from 'inversify';
import { ReviewInterface } from '@/application/interfaces/reviews/reviewsInterface';
import type { Product } from '@/types/product';
import type { Review } from '@/types/review';

@injectable()
export class GetReviewsForProduct {
    @inject(ReviewInterface)
    reviewInterface!: ReviewInterface;

    async execute(
        productId: Product['id']
    ): Promise<Array<Review> | undefined> {
        return this.reviewInterface.getReviewsForProduct(productId);
    }
}
