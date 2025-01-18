import container from '@/external/dependencies';
import { GetProductById } from '@/application/useCases/products/getProductById';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { CompleteProduct } from '@/types/product';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<CompleteProduct | { message: string } | undefined>
) {
    if (!req.query.id) {
        return res.status(404);
    }

    const productId = req.query.id as string;

    const getProductById = container.resolve(GetProductById);

    const product = await getProductById.execute(productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found.' });
    }

    return res.status(200).json(product);
}
