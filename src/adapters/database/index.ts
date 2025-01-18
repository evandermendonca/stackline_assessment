import StacklineData from './data/data.json';
import type { Product } from '@/types/product';
import type { Review } from '@/types/review';
import type { Sale } from '@/types/sale';

export type Databases = 'Stackline';

export type DatabaseInstance = {
    [Database in Databases]: {
        data: Array<
            Product & {
                reviews: Array<Review>;
                sales: Array<Sale>;
            }
        >;
    };
};

const databases = {
    Stackline: { data: StacklineData },
} as const;

export default function getDatabaseContext<TDatabase extends Databases>(
    database: TDatabase
): DatabaseInstance[TDatabase] {
    return databases[database];
}
