import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Header: React.FC<{}> = () => {
    return (
        <div>
            <header className={styles.header}>
                <Link href="/">
                    <Image src="/home/logo.png" alt="yuorei logo" width={300} height={100} />
                </Link>
                <nav >
                    <ul className={styles.menu}>
                        <li ><a href="/#yuorei">ユオレイ</a></li>
                        <li ><a href="/skill">スキル</a></li>
                        <li ><a href="/project">プロジェクト</a></li>
                        <li ><a href="/history">歴史</a></li>
                        <li ><a href="/hoby">趣味</a></li>
                        <li ><a href="/picture">写真</a></li>
                        <li ><a href="/#sns">SNS</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header