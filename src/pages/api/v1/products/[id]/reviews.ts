import container from '@/external/dependencies';
import { GetReviewsForProduct } from '@/application/useCases/reviews/getReviewsForProduct';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Review } from '@/types/review';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Review> | { message: string } | undefined>
) {
    if (!req.query.id) {
        return res.status(404);
    }

    const productId = req.query.id as string;

    const getReviewsForProduct = container.resolve(GetReviewsForProduct);

    const reviews = await getReviewsForProduct.execute(productId);

    if (!reviews) {
        return res
            .status(404)
            .json({ message: 'Reviews not found for product.' });
    }

    return res.status(200).json(reviews);
}
