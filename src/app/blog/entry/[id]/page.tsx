import { getArticle } from "./getArticle";
import ReactMarkdown from "react-markdown";
import styles from "@/app/css/article.module.css"
import Header from "@/app/components/Header"

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