import styles from './SNS.module.css'
import Image from 'next/image'
import Link from 'next/link'
const SNS: React.FC<{}> = () => {
    return (
        <div className={styles.sns}>
            <h2 id="sns">SNS</h2>
            <div className={styles.sns_container}>
                <Link href="https://x.com/yuorei71">
                    <Image src="/sns/x.png" alt="x" width={80} height={80} />
                </Link>
                <Link href="https://github.com/yuorei">
                    <Image src="/sns/github.png" alt="github" width={80} height={80} />
                </Link>
            </div>
        </div>
    )
}

export default SNS