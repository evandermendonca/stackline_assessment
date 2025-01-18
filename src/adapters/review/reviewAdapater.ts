import { injectable } from 'inversify';
import getDatabaseContext from '../database';
import type { ReviewInterface } from '@/application/interfaces/reviews/reviewsInterface';
import type { Product, CompleteProduct } from '@/types/product';
import type { Review } from '@/types/review';

@injectable()
export class ReviewAdapter implements ReviewInterface {
    async getReviewsForProduct(
        productId: Product['id']
    ): Promise<Array<Review> | undefined> {
        const { data } = getDatabaseContext('Stackline');

        const matchingCompleteProduct = data.find(
            (product) => product.id === productId
        ) as CompleteProduct | undefined;

        if (!matchingCompleteProduct) {
            return undefined;
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { sales, reviews, ...matchingProduct } = matchingCompleteProduct;

        return reviews;
    }
}
