'use client';
import { useState, useEffect } from 'react';
import type { Sale } from '@/types/sale';
import './SalesTable.css';

const apiBasePath = 'api/v1';
const productId = 'B007TIE0GQ';

export const SalesTable = () => {
    const [sales, setSales] = useState<Array<Sale>>();

    useEffect(() => {
        fetch(`${apiBasePath}/products/${productId}/sales`)
            .then((res) => res.json())
            .then((data) => {
                setSales(data);
            });
    }, []);

    if (!sales) return <p>No sales data</p>;

    return (
        <div className="salesTable">
            <table
                style={{
                    borderCollapse: 'collapse',
                    margin: 'auto',
                    padding: '30px',
                    width: '95%',
                    marginTop: '20px',
                }}
            >
                <thead
                    style={{
                        padding: '10px',
                        textAlign: 'left',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        borderBottom: 'solid #f5f5f5 1px',
                    }}
                >
                    <tr>
                        <th>Week Ending</th>
                        <th>Retail Sales</th>
                        <th>Wholesale Sales</th>
                        <th>Units Sold</th>
                        <th>Retailer Margin</th>
                    </tr>
                </thead>
                <tbody
                    style={{
                        textAlign: 'left',
                        fontSize: '14px',
                        fontWeight: 'normal',
                    }}
                >
                    {sales.map((sale, index) => (
                        <tr
                            key={index}
                            style={{
                                borderBottom: 'solid #f5f5f5 1px',
                                lineHeight: '3',
                            }}
                        >
                            <td>{sale.weekEnding}</td>
                            <td>{sale.retailSales}</td>
                            <td>{sale.wholesaleSales}</td>
                            <td>{sale.unitsSold}</td>
                            <td>{sale.retailerMargin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
