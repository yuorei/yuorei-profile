import { notFound } from "next/navigation";
import Link from 'next/link';
import Header from "@/app/components/Header"
import styles from "@/app/css/blog.module.css"

export type Article = {
    ID: string;
    Title: string;
    // Content: string;
    Date: string;
};

const getArticles = async () => {
    const res = await fetch(`${process.env.API_URL}/blog`);
    if (res.status === 404) {
        notFound();
    }
    if (!res.ok) {
        throw new Error("Failed to fetch article");
    }
    const data = await res.json();
    return data as Article[];
}

export default async function Blog() {
    const articles = await getArticles();
    return (
        <>
            <Header />
            <div className={styles.blog}>
                <h1>yuorei's blog</h1>
                <ul>
                    {articles.map((article, index) => (
                        <li className={styles.list} key={index}>
                            <Link href={`blog/entry/${article.ID}`}>
                                <h2>{article.Title}</h2>
                                {/* <p>{article.Content}</p> */}
                                <p>{article.Date}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}