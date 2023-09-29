// import { notFound } from "next/navigation";
// import Link from 'next/link';

// export type Article = {
//     title: string;
//     content: string;
//     date: string;
// };

// const getArticles = async () => {
//     const res = await fetch(`http://localhost:8080/blog`);
//     if (res.status === 404) {
//         notFound();
//     }
//     if (!res.ok) {
//         throw new Error("Failed to fetch article");
//     }
//     const data = await res.json();
//     return data as Article[];
// }

// export default async function Blog() {
//     const articles = await getArticles();
//     return (
//         <div>
//             <h1>Blog</h1>
//             <ul>
//                 {articles.map((article, index) => (
//                     <li key={index}>
//                         <Link href={`blog/entry/${article.title}`}>
//                             <h2>{article.title}</h2>
//                             <p>{article.content}</p>
//                             <p>{article.date}</p>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
