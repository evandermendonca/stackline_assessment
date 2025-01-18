/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from 'react';
import type { Product } from '@/types/product';
import './DetailsCard.css';

const apiBasePath = 'api/v1';
const productId = 'B007TIE0GQ';

export const DetailsCard = () => {
    const [productDetails, setProductDetails] = useState<Product>();

    useEffect(() => {
        fetch(`${apiBasePath}/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setProductDetails(data);
            });
    }, []);

    if (!productDetails) return <p>No product data</p>;

    return (
        <div className="detailsCard">
            <div style={{ borderBottom: 'solid #f5f5f5' }}>
                <img
                    src={productDetails.image}
                    alt="Image of a product for sale."
                    style={{ maxWidth: '100%' }}
                />
                <div
                    style={{
                        width: '95%',
                        margin: 'auto',
                        textAlign: 'center',
                        padding: '10px',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '18px',
                            color: '#282829',
                        }}
                    >
                        {productDetails.title}
                    </h1>
                    <p
                        style={{
                            margin: '5px',
                            fontSize: '12px',
                            color: '#a9a9a9',
                        }}
                    >
                        {productDetails.subtitle}
                    </p>
                </div>
            </div>
            <div
                style={{
                    width: '95%',
                    margin: 'auto',
                    padding: '10px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    overflow: 'hidden',
                    borderBottom: 'solid #f5f5f5',
                }}
            >
                {productDetails.tags.map((tag, index) => (
                    <span
                        key={index}
                        style={{
                            color: '#282829',
                            padding: '5px',
                            margin: '5px',
                            fontSize: '12px',
                            border: 'solid 1px #ececec',
                            borderRadius: '5px',
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};
