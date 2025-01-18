import container from '@/external/dependencies';
import { GetSalesForProduct } from '@/application/useCases/sales/getSalesForProduct';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Sale } from '@/types/sale';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Sale> | { message: string } | undefined>
) {
    if (!req.query.id) {
        return res.status(404);
    }

    const productId = req.query.id as string;

    const getSalesForProduct = container.resolve(GetSalesForProduct);

    const sales = await getSalesForProduct.execute(productId);

    if (!sales) {
        return res
            .status(404)
            .json({ message: 'Sales not found for product.' });
    }

    return res.status(200).json(sales);
}
