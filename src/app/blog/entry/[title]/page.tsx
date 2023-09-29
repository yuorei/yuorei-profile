// import { notFound } from "next/navigation";
// import ReactMarkdown from "react-markdown";
// interface Article {
//     title: string;
//     content: string;
//     date: string;
// }

// const getArticle = async (slug: string) => {
//     const res = await fetch(`http://localhost:8080/blog/${slug}`);
//     if (res.status === 404) {
//         notFound();
//     }
//     if (!res.ok) {
//         throw new Error("Failed to fetch article");
//     }
//     const data = await res.json();

//     return data as Article;
// }

// export default async function Article({ params }: { params: { title: string } }) {
//     const articlePromise = getArticle(params.title);
//     const article = await articlePromise;

//     return (
//         <div>
//             <h1>{article.title}</h1>
//             <h2>{article.date}</h2>
//             <p>{article.content}</p>
//             <ReactMarkdown>{article.content}</ReactMarkdown>;
//         </div>
//     );
// };

