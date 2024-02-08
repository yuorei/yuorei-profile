'use client';
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import Link from 'next/link';
import Header from "@/app/components/Header"
import styles from "@/app/css/blog.module.css"

export type Article = {
    ID: string;
    Title: string;
    Content: string;
    Date: string;
    IsPublic: boolean;
    OGPURL: string;
};

export default function Blog() {
    // const articles = await getArticles();
    const [articles, setArticles] = useState<Article[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
                if (response.status === 404) {
                    notFound();
                }
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data: Article[] = await response.json();
                // Dateを降順でソート

                const sortedData = data.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime());

                setArticles(sortedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className={styles.blog}>
                <h1>yuorei blog</h1>
                <ul>
                    {articles.map((article, index) => (
                        <Link href={`blog/entry/${article.ID}`} key={index}>
                            <li className={styles.list} >
                                <div>
                                    <h2>{article.Title}</h2>
                                    <p>{article.Date}</p>
                                </div>
                                <img src={article.OGPURL} alt={article.Title} style={{ width: '10%', height: 'auto', objectFit: 'contain' }} />
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}