'use client'
import ReactMarkdown from "react-markdown";
import styles from "@/app/css/article.module.css"
import Header from "@/app/components/Header"
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Article } from '../../page';

export default function Article({ params }: { params: { id: string } }) {
    const [article, setArticle] = useState<Article>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${params.id}`);
                if (response.status === 404) {
                    notFound();
                }
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setArticle(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [params.id]);
    return (
        <>
            <Header />
            <div className={styles.page}>
                <h1>{article?.Title}</h1>
                <h2>{article?.Date}</h2>
                <div className={styles.blog}>
                    <img src={article?.OGPURL as string} alt={article?.Title as string} style={{ width: '60%', height: 'auto', objectFit: 'contain' }} />
                    <ReactMarkdown className={styles.md}>{article?.Content}</ReactMarkdown>
                </div>
            </div >
        </>
    );
};