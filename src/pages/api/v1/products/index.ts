import container from '@/external/dependencies';
import { GetAllProducts } from '@/application/useCases/products/getAllProducts';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { CompleteProduct } from '@/types/product';

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Array<CompleteProduct>>
) {
    const getAllProducts = container.resolve(GetAllProducts);

    const products = await getAllProducts.execute();

    return res.status(200).json(products);
}
