import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Article {
    ID: string;
    Title: string;
    Content: string;
    Date: string;
}

const getArticle = async (id: string) => {
    const res = await fetch(`http://localhost:8080/blog/${id}`);
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
        <div>
            <h1>{article.Title}</h1>
            <h2>{article.Date}</h2>
            <ReactMarkdown>{article.Content}</ReactMarkdown>
        </div>
    );
};