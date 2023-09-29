import styles from "@/app/css/history.module.css"
import Header from "@/app/components/Header"
import Link from 'next/link'
import historyList from './historyList.json'
export default function History() {
    return (
        <div className={styles.history}>
            <Header />
            <h1 className={styles.title}>経歴</h1>
            <ul className={styles.timeline}>
                {historyList.map((history, index) => (
                    <li className={styles.item} key={index}>
                        <h3>{history.title}</h3>
                        <h4>{history.status}</h4>
                        <Link href={history.link} className={styles.link}>{history.linkTitle} </Link>
                        <p>{history.description}</p>
                        <p className={styles.date}>{history.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
