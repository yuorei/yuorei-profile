import { Tweet } from '@/app/components/Tweet';
import Header from "@/app/components/Header"
import styles from "@/app/css/hoby.module.css"

export default function Hoby() {
    return (
        <div>
            <Header />
            <div className={styles.tweet}>
                <Tweet id="1699575685688541691" />
                <Tweet id="1690657450335039488" />
                <Tweet id="1707591030537617716" />
            </div>
            <p className={styles.description}>コナンが特に好きです。葬送のフリーレンもかなり好き。ゲームはポケモンとモンストをよくやっています。</p>
        </div>
    );
}
