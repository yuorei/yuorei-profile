import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import styles from "@/app/css/article.module.css"
import Header from "@/app/components/Header"

interface Article {
    ID: string;
    Title: string;
    Content: string;
    Date: string;
}

export const getArticle = async (id: string) => {
    const res = await fetch(`${process.env.API_URL}/blog/${id}`);
    if (res.status === 404 || res == null) {
        notFound();
    }
    if (!res.ok) {
        throw new Error("Failed to fetch article");
    }
    const data = await res.json();

    return data as Article;
}

export default async function Article({ params }: { params: { id: string } }) {
    const articlePromise = getArticle(params.id);
    const article = await articlePromise;
    return (
        <>
            <Header />
            <div className={styles.page}>
                <h1>{article.Title}</h1>
                <h2>{article.Date}</h2>
                <div className={styles.blog}>
                    <ReactMarkdown className={styles.md}>{article.Content}</ReactMarkdown>
                </div>
            </div>
        </>
    );
};