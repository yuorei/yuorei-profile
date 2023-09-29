'use client';
import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

export const Tweet: React.FC<{ id: string }> = ({ id }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // @ts-expect-error
        window.twttr?.widgets.load(ref.current);
    }, [id]);

    return (
        <>
        <div
            dangerouslySetInnerHTML={{ __html: generateEmbedHtml(id) }}
            ref={ref}
        />
        <Script
                src="https://platform.twitter.com/widgets.js"
                strategy="lazyOnload"
            />
        </>
    );
};

const generateEmbedHtml = (id: string): string => {
    if (!/^\d+$/u.test(id)) {
        throw new Error(`Invalid tweet ID: ${id}`);
    }

    return `<blockquote class="twitter-tweet"><a href="https://twitter.com/i/status/${id}"></a></blockquote>`;
};